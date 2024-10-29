import { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter'; // Importa gray-matter

interface MarkdownFromFileProps {
  filename: string;
}

export default function MarkdownFromFile({ filename }: MarkdownFromFileProps) {
  const [contentHtml, setContentHtml] = useState<string>('');
  const [date, setDate] = useState<string>(''); // Estado para la fecha

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/posts/${filename}`);
        if (!response.ok) throw new Error("Error al cargar el archivo Markdown");

        const text = await response.text();
        processMarkdown(text);
      } catch (error) {
        console.error("Fetch Markdown Error:", error);
      }
    };

    if (filename) fetchMarkdown();
  }, [filename]);

  const processMarkdown = async (content: string) => {
    // Usa gray-matter para extraer metadatos y contenido
    const { data, content: markdownContent } = matter(content);

    // Convierte el contenido de Markdown a HTML
    const processedContent = await remark().use(html).process(markdownContent);
    const contentHtml = processedContent.toString();

    // Establece los metadatos en el estado
    setDate(data.date || 'Fecha no disponible'); // Asigna la fecha extraída

    // Establece el contenido HTML
    setContentHtml(contentHtml);
  };

  return (
    <div>
      {/* Muestra el título y la fecha */}
      <p className='blog_date'>{date}</p> {/* Renderiza la fecha aquí */}
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
