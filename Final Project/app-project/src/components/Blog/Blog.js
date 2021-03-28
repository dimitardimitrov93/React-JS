import { Component } from 'react';
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
        console.log('didmount');
        
        blogPostService.getAll(this.state.category)
            .then(blogPosts => {
                this.setState({ blogPosts })
            })
            .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps) {
        console.log('didUpdate');
        
        // console.log(`${this.state.category} this.state.category`);
        console.log(this.props.match.params.category + ' currentprops');
        
        console.log(`${prevProps.match.params.category} prevProps`);

        if (prevProps.match.params.category == this.props.match.params.category) {
            console.log('return');
            
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
                <h2>Blog posts</h2>
                <CategoriesNav />
                {this.state.blogPosts.map(blogPost => {
                    return <BlogPost key={blogPost.id} blogPost={{ ...blogPost }} />
                })}

            </article>
        );
    }
}

export default Blog;