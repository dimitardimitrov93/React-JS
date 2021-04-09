import { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './BlogPostDetails.module.css';
import blogPostService from '../../services/blogPostService';
import onLikePost from '../../BlogPostHandlers/onLikePost';
import authService from '../../services/authService';
import history from '../../history';

class BlogPostDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPost: {
                peopleLiked: [],
            },
            userData: authService.getData(),
            match: this.props.props.match,
            deleteConfirmationStyle: 'hideDeleteConfirmation',
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
        const { blogPostId } = this.state.match.params;

        if (!prevState.blogPost.peopleLiked.includes(this.state.userData.email)) {
            blogPostService.getOne(blogPostId)
                .then(blogPost => {

                    if (blogPost.peopleLiked.includes(this.state.userData.email)) {
                        this.setState({ blogPost: { ...blogPost, blogPostId } });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }

        if (prevState.userData.isAuthenticated !== authService.getData().isAuthenticated) {
            this.setState({ userData: authService.getData() });
        }

        return;
    }

    like(e) {
        onLikePost(e)
            .then(() => {
                this.setState({ userData: authService.getData() });
                return;
            })
            .catch(error => console.log(error));
    }

    delete() {
        const history = this.props.props.history;

        blogPostService.deleteBlogPost(this.state.blogPost.blogPostId)
            .then(() => {
                history.push(`/profile/${this.state.userData.email}`);
            })
            .catch(error => console.log(error));
    }

    showDeleteConfirmation() {
        this.setState({ deleteConfirmationStyle: 'showDeleteConfirmation' });
        return;
    }

    hideDeleteConfirmation() {
        this.setState({ deleteConfirmationStyle: 'hideDeleteConfirmation' });
        return;
    }

    // likePost(e) {
    //     onLikePost(e)
    //         .then(() => {

    //         })
    // }

    render() {
        let blogPost = { ...this.state.blogPost };
        let id = blogPost.blogPostId;
        let isAuthenticated = this.state.userData.isAuthenticated;
        let isCreator = this.state.userData.email == blogPost.creator;
        let hasntLiked = null;
        let likesNumber = 0;

        if (blogPost.peopleLiked) {
            hasntLiked = !blogPost.peopleLiked.includes(this.state.userData.email);
            likesNumber = blogPost.peopleLiked.includes('') 
                ? 0 
                : blogPost.peopleLiked.length;
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
                                    <span className={style.actionsButton} onClick={this.showDeleteConfirmation.bind(this)}>Delete</ span>
                                    <Link className={style.actionsButton} to={`/blog/${blogPost.category}/${blogPost.blogPostId}/edit`}>Edit</ Link>
                                    <span className={style.liked}>Likes: {likesNumber}</span>
                                </div>
                            )}

                        <div className={style.userActions}>

                            {
                                hasntLiked
                                && !isCreator
                                && (
                                    <div className={style.userActions} data-id={id}>

                                        <span className={style.liked}>Likes: {likesNumber}</span>

                                        <button className={style.actionsButton} onClick={this.like.bind(this)} data-id={id}>
                                            <i className="fas fa-thumbs-up"></i>
                                            Like
                                        </button>
                                    </div>
                                )
                            }
                            {
                                !hasntLiked
                                && !isCreator
                                && (
                                    <div className={style.userActions}>
                                        {/* <span className={style.liked}>You like this post!</span> */}
                                        <span className={style.liked}>Likes: {likesNumber}</span>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                    <div className={style[this.state.deleteConfirmationStyle]}>
                        <h3>Are you sure you want to delete this post?</h3>
                        <span onClick={this.delete.bind(this)}>Yes</span>
                        <span onClick={this.hideDeleteConfirmation.bind(this)}>No</span>
                    </div>
                </div>
            </main>
        );
    }
}


export default BlogPostDetails;