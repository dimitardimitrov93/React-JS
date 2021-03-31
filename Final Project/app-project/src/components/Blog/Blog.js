import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Blog.module.css';
import BlogPost from './BlogPost';
import CategoriesNav from './CategoriesNav';
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
        // console.log(`${this.state.category} this.state.category`);
        if (prevProps.match.params.category == this.props.match.params.category) {
            return;
        }

        blogPostService.getAll(this.props.match.params.category)
            .then(blogPosts => {
                this.setState({ blogPosts: Object.keys(blogPosts).map(id => ({ id: id, ...blogPosts[id] })) });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <article className={style.blogArticle}>
                <h2>Blog Posts</h2>
                <Link className={style.createBlogPostLink} to='/create-blog-post'>Create a new post</Link>
                <CategoriesNav />
                {this.state.blogPosts.map((blogPost, index) => {
                    return <BlogPost postIndex={index} key={blogPost.id} blogPost={{ ...blogPost }} />
                })}

            </article>
        );
    }
}

export default Blog;