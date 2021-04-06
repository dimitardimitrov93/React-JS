import style from './BlogPost.module.css';
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import authService from '../../../services/authService';

function BlogPost({ blogPost, postIndex, isAuthenticated }) {
    let [islogged, setLogged] = useState(isAuthenticated);

    useEffect(() => {
        setLogged(authService.getData().isAuthenticated);
    });

    if (Number(postIndex) % 2 !== 0) {
        return (
            <section className={style.blogSection}>
                <h3>{blogPost.title}</h3>
                <img className={style.blogImageOdd} src={blogPost.imageUrl} />
                <p className={style.blogParagraphOdd}>{blogPost.content.slice(0, 640) + '...'}</p>
                {islogged
                    ? <Link className={style.blogPostLinkOdd} to={`/blog/${blogPost.category}/${blogPost.id}`}>Read the whole post</Link>
                    : <Link className={style.blogPostLinkOdd} to={`/login`}>Login to read the whole post</Link>
                }
            </section>
        );
    } else {
        return (
            <section className={style.blogSection}>
                <h3>{blogPost.title}</h3>
                <img className={style.blogImage} src={blogPost.imageUrl} />
                <p className={style.blogParagraph}>{blogPost.content.slice(0, 640) + '...'}</p>
                {islogged
                    ? <Link className={style.blogPostLink} to={`/blog/${blogPost.category}/${blogPost.id}`}>Read the whole post</Link>
                    : <Link className={style.blogPostLink} to={`/login`}>Login to read the whole post</Link>
                }
            </section>
        );
    }
}

export default BlogPost;