import { Component } from 'react';
import style from './BlogPostDetails.module.css';
import blogPostService from '../../services/blogPostService';

class BlogPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPost: null,
        }
    }

    componentDidMount() {
        const { blogPostId } = this.props.match.params;
        
        blogPostService.getOne(blogPostId)
            .then(blogPost => {
                this.setState({ blogPost });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        let blogPost = {...this.state.blogPost}
        
        return (
            
            <main className={style.main}>
                <div className={style.blogPostDetails}>
                    <h2>{blogPost.title}</h2>
                    <img src={blogPost.imageUrl} />
                    <p>{blogPost.content}</p>
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </main>
        );
    }
}


export default BlogPostDetails;