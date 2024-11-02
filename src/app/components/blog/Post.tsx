import { useState, useEffect } from 'react';

interface ElementData {
  element: string;
  content?: string;
  items?: string[];
  sublist?: string[];
  class?: string;
  columns?: [];
}

interface JsonToHtmlProps {
  filename: string;
}

export default function JsonToHtml({ filename }: JsonToHtmlProps) {
  const [elements, setElements] = useState<ElementData[]>([]);

  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch(`/posts/${filename}`);
        if (!response.ok) throw new Error("Error al cargar el archivo JSON");

        const data: ElementData[] = await response.json();
        setElements(data);
      } catch (error) {
        console.error("Fetch JSON Error:", error);
      }
    };

    if (filename) fetchJson();
  }, [filename]);

  const renderElement = (element: ElementData, index: number) => {
    switch (element.element) {
      case "h1":
        return <h1 key={index}>{element.content}</h1>;
      case "h2":
        return <h2 key={index}>{element.content}</h2>;
      case "h3":
        return <h3 key={index}>{element.content}</h3>;
      case "p":
        return (
          <p key={index} dangerouslySetInnerHTML={{ __html: element.content || "" }} />
        );
      case "image": 
        return (
          <img src={element.content} className={element.class} />
        );
      case "two-columns": 
        return (
          <div className="flex-container" key={index}>
            {element.columns && element.columns.map((item: any, subIndex) => {
              // Renderiza según el tipo de elemento (p o image)
              if (item && item.element === "image") {
                return (
                  <div key={subIndex} className="">
                    <img src={item.content} alt={`Image ${subIndex + 1}`} className={item.class ? item.class : ""}/>
                  </div>
                );
              } else if (item.element === "p") {
                return (
                  <div key={subIndex} className="column">
                    <p dangerouslySetInnerHTML={{ __html: item.content || "" }} />
                  </div>
                );
              }
              return null;
            })}
          </div>
        );
      case "frase":
        return (
          <>
            <p key={index} dangerouslySetInnerHTML={{ __html: element.content || "" }} className='post_frase'/>
            <div className='divider'></div>
          </>
        );
      case "list":
        return (
          <ul key={index}>
            {element.items?.map((item, itemIndex) => (
              <li key={itemIndex}>
                <div dangerouslySetInnerHTML={{ __html: item }} />
                {element.sublist && element.sublist.length > 0 && (
                  <ul>
                    {element.sublist.map((subItem, subIndex) => (
                      <li key={subIndex} dangerouslySetInnerHTML={{ __html: subItem }} />
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {elements.map((element, index) => renderElement(element, index))}
    </div>
  );
}
