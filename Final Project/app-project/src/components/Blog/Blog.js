import { Component } from 'react';
import style from './Blog.module.css';
import BlogPost from './BlogPost'
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';

// const apiKey = 'AIzaSyBVZrISvhzqDAwqLgxdlUFJ4faYEVNGllQ';
const databaseUrl = 'https://react-js-final-project-default-rtdb.firebaseio.com';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
        }
    }

    componentDidMount() {
        fetch(`${databaseUrl}/blogPosts.json`)
            .then(res => res.json())
            .then(blogPosts => {
                this.setState({ blogPosts: Object.keys(blogPosts).map(id => ({ id: id, ...blogPosts[id] })) });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <article className={style.blogArticle}>
                <h2>Blog posts</h2>

                {this.state.blogPosts.map(blogPost => {
                    return <BlogPost key={blogPost.id} blogPost={{ ...blogPost }} />
                })}

            </article>
        );
    }
}

export default Blog;