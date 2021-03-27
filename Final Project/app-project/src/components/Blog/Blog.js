import { Component } from 'react';
import style from './Blog.module.css';
import BlogPost from './BlogPost'
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';
import blogPostService from '../../services/blogPostService';


class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            category: this.props.match.params.category,
        }
    }

    componentDidMount() {
        blogPostService.getAll(this.state.category)
            .then(blogPosts => {
                this.setState({ blogPosts })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        const category = this.state.category;

        if (prevProps.match.params.category == category) {
            return;
        }

        blogPostService.getAll(category)
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