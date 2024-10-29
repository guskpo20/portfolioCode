import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

import Post from './Post';

import styles from './blog.module.scss';

const postNoSelected = "NoPost";
const posts = [
    {
        fileName: "introduccion.md",
        tags: ["introduccion"],
        title: "Introduccion",
        date: "01-01-2024",
        content: "Una breve explicación del porque de este blog"
    }    
];

function Blog() {
    const { isDarkMode } = useTheme();
    const [tags, setTags] = useState<string[]>([]);
    const [filterByTag, setFilterByTag] = useState<string | null>(null); 
    const [postSelected, setPostSelected] = useState(postNoSelected);

    useEffect(() => {
        const allTags = posts.flatMap(post => post.tags); 
        const uniqueTags = Array.from(new Set(allTags));
        setTags(uniqueTags);
    }, []);

    const filteredPosts = filterByTag ? posts.filter(post => post.tags.includes(filterByTag)) : posts;

    const handleTagClick = (tag: string) => {
        if (filterByTag === tag) {
            setFilterByTag(null);
        } else {
            setFilterByTag(tag);
        }
    };

    return (
        <div className={`${styles.blog} ${isDarkMode ? styles.dark : styles.light}`}>
            
            {postSelected !== postNoSelected && (
                <>
                    <button className="button" onClick={() => setPostSelected(postNoSelected)}>Volver a Blog</button>
                    <Post filename={postSelected} />
                </>
            )}

            {postSelected === postNoSelected && (
                <>
                    <h2>Blog</h2>
                    <p>En esta seccion cuento lo que creo que puede ayudar a otros en base a mi experiencia o lo que necesito contar.</p>
                    <button className="button frases_button" onClick={() => setPostSelected("frases.md")}>Frases que me gustaron</button>
                    {tags.length > 0 && (
                        <div className={styles.tagsSection}>
                            <h2>Tags:</h2>
                            <div className={styles.tagsSection__tags}>
                                {tags.map(tag => (
                                    <div className={`${styles.tag} ${filterByTag === tag ? styles.active : ""}`} key={tag} onClick={() => handleTagClick(tag)}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className={styles.postsSection}>
                        <h2>Posts:</h2>
                        <div className={styles.posts}>
                            {filteredPosts.map(post => (
                                <>
                                <div className={styles.postContainer} key={post.fileName}>
                                    <div className={styles.post} onClick={() => setPostSelected(post.fileName)}>
                                        <p className={styles.day}>{post.date}</p>
                                        <h3>{post.title}</h3>
                                        <p>{post.content}</p>
                                    </div>
                                    <div className={styles.tags}>
                                        {post.tags.map(tag => (
                                            <div className={styles.tag} key={tag} onClick={() => handleTagClick(tag)}>{tag}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="divider"></div>
                                </>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Blog;
