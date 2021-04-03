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
            match: this.props.props.match,
        }
    }

    componentDidMount() {
        const { blogPostId } = this.state.match.params;

        blogPostService.getOne(blogPostId)
            .then(blogPost => {
                this.setState({ blogPost: { ...blogPost, blogPostId } });
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
        let hasntLiked = null;
        let likesNumber = null;

        if (blogPost.likes) {
            hasntLiked = !blogPost.likes.includes(this.state.userData.email);
            likesNumber = blogPost.likes.length;
        }

        return (

            <main className={style.main}>
                <div className={style.detailsWrapper}>
                    <div className={style.blogPostDetails}>
                        <h2>{blogPost.title}</h2>
                        <img src={blogPost.imageUrl} />
                        <p>{blogPost.content}</p>

                        {
                            isAuthenticated
                            && isCreator
                            && (
                                <div className={style.userActions}>
                                    <Link className={style.actionsButton} to={`/blog/${blogPost.category}/${blogPost.blogPostId}/delete`} blogPostId>Delete</ Link>
                                    <Link className={style.actionsButton} to={`/blog/${blogPost.category}/${blogPost.blogPostId}/edit`}>Edit</ Link>
                                </div>
                            )}

                        <div className={style.userActions}>
                            <span className={style.liked}>Likes: {likesNumber}</span>

                            {
                                hasntLiked
                                && !isCreator
                                && (
                                    <button className={style.actionsButton}><i class="fas fa-thumbs-up"></i>Like</button>
                                )
                            }
                            {
                                !hasntLiked
                                && (
                                    <span className={style.liked}>Likes: {likesNumber}</span>
                                )
                            }
                        </div>

                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostDetails;