import style from './Blog.module.css';
import BlogPost from './BlogPost'
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';

function Blog(props) {
    return (
        <article className={style.blogArticle}>
            <h2>Blog posts</h2>
            <BlogPost />
            <BlogPost />
            <BlogPost />
        </article>
    );
}

export default Blog;