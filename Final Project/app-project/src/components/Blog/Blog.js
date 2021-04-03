import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Blog.module.css';
import BlogPost from './BlogPost';
import CategoriesNav from './CategoriesNav';
import blogPostService from '../../services/blogPostService';
import authService from '../../services/authService';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: [],
            category: this.props.match.params.category,
            isAuthenticated: authService.getData().isAuthenticated,
        }
    }

    componentDidMount() {
        blogPostService.getAll(this.state.category)
            .then(blogPosts => {
                this.setState({ blogPosts });
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(`${this.state.category} this.state.category`);
        // const currentAuthStatus = authService.getData().isAuthenticated;
        if (prevState.isAuthenticated !== authService.getData().isAuthenticated) {
            this.setState({ isAuthenticated: authService.getData().isAuthenticated });
        }     

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
                {this.state.isAuthenticated && <Link className={style.createBlogPostLink} to='/create-blog-post'>Create a new post</Link>}
                <h2>Blog Posts</h2>
                <CategoriesNav />
                {this.state.blogPosts.map((blogPost, index) => {
                    return <BlogPost postIndex={index} key={blogPost.id} blogPost={{ ...blogPost }} isAuthenticated={this.state.isAuthenticated} />
                })}

            </article>
        );
    }
}

export default Blog;