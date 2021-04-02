import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './BlogPostDetails.module.css';
import blogPostService from '../../services/blogPostService';
import authService from '../../services/authService';

class BlogPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPost: null,
            userData: authService.getData(),
        }
    }

    componentDidMount() {
        const { blogPostId } = this.props.match.params;

        blogPostService.getOne(blogPostId)
            .then(blogPost => {
                this.setState({ blogPost: {...blogPost, blogPostId} });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.userData.isAuthenticated !== authService.getData().isAuthenticated) {
            this.setState({ userData: authService.getData() });
        }
        return;
    }

    render() {
        let blogPost = { ...this.state.blogPost }
        let isAuthenticated = this.state.userData.isAuthenticated;
        let isCreator = this.state.userData.email == blogPost.creator;
        console.log(blogPost);
        
        return (

            <main className={style.main}>
                <div className={style.blogPostDetails}>
                    <h2>{blogPost.title}</h2>
                    <img src={blogPost.imageUrl} />
                    <p>{blogPost.content}</p>
                    
                    {
                        isAuthenticated
                        && isCreator
                        && (
                            <div>
                                {/* <Link to={`/blog/${blogPost.category}/${blogPost.blogPostId}/delete`} blogPostId>Delete</ Link> */}
                                <Link to={`/blog/${blogPost.category}/${blogPost.blogPostId}/edit`}>Edit</ Link>
                            </div>
                        )}

                </div>
            </main>
        );
    }
}


export default BlogPostDetails;