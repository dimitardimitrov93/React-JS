import style from './BlogPost.module.css';
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';

function BlogPost({ blogPost }) {
    if (Number(blogPost.category) % 2 !== 0) {
        return (
            <section className={style.blogSection}>
                <h3>{blogPost.title}</h3>
                <img className={style.blogImageOdd} src={blogPost.imageUrl} />
                <p className={style.blogParagraphOdd}>{blogPost.content.slice(0, 680) + '...'}</p>
                <Link className={style.blogPostLinkOdd} to={`/blog-post/${blogPost.id}`}>Read the whole post</Link>
            </section>
        );
    } else {
        return (
            <section className={style.blogSection}>
                <h3>{blogPost.title}</h3>
                <img className={style.blogImage} src={blogPost.imageUrl} />
                <p className={style.blogParagraph}>{blogPost.content.slice(0, 680) + '...'}</p>
                <Link className={style.blogPostLink} to={`/blog-post/${blogPost.id}`}>Read the whole post</Link>
            </section>
        );
    }
}

export default BlogPost;