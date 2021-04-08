import { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogPost from '../Blog/BlogPost';
import style from './Profile.module.css';
import blogPostService from '../../services/blogPostService';
import authService from '../../services/authService';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userPosts: [],
            userData: authService.getData(),
            userPosts: [],
            likedPosts: [],
            comments: [],
        }
    }

    componentDidMount() {


        blogPostService.getAll()
            .then(blogPosts => {
                this.setState(({ userPosts: blogPosts.filter(blogPost => blogPost.creator == this.state.userData.email) }));
                this.setState(({ likedPosts: blogPosts.filter(blogPost => blogPost.peopleLiked.includes(this.state.userData.email)) }));
                // this.setState(({ comments: blogPosts.filter(blogPost => blogPost.comments.includes(this.state.userData.email)) }));
            })
            .catch(err => console.log(err));
        // blogPostService.getUserPosts(this.state.userData.email)
        //     .then(userPosts => {
        //         this.setState({ userPosts });
        //     })
        //     .catch(err => console.log(err));
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(`${this.state.category} this.state.category`);
        // const currentAuthStatus = authService.getData().isAuthenticated;

        if (prevState.userData.isAuthenticated !== authService.getData().isAuthenticated) {
            this.setState({ userData: authService.getData() });
        }


        if (prevState.userData.userEmail == this.state.userData.userEmail) {
            return;
        }

        blogPostService.getAll()
            .then(blogPosts => {
                this.setState(({ userPosts: blogPosts.filter(blogPost => blogPost.creator == this.state.userData.email) }));
                this.setState(({ likedPosts: blogPosts.filter(blogPost => blogPost.peopleLiked.includes(this.state.userData.email)) }));
                // this.setState(({ comments: blogPosts.filter(blogPost => blogPost.comments.includes(this.state.userData.email)) }));

                // this.state.likedPosts = blogPosts.filter(blogPost => blogPost.likes.includes(this.state.userData.email));
                // this.state.comments = blogPosts.filter(blogPost => blogPost.comments.includes(this.state.userData.email));
            })
            .catch(err => console.log(err));

        // blogPostService.getUserPosts(this.state.userData.email)
        //     .then(userPosts => {
        //         this.setState({ userPosts });
        //     })
        //     .catch(err => console.log(err));
    }

    render() {
        return (
            <article className={style.blogArticle}>
                <section className={style.userSummary}>
                    <span>Created posts: {this.state.userPosts.length}</span>
                    {this.state.userData.isAuthenticated && <Link className={style.createBlogPostLink} to='/create-blog-post'>Create a new post</Link>}
                    <span>Liked posts: {this.state.likedPosts.length}</span>
                    {/* <span>Comments: {this.state.comments.length}</span> */}
                </section>

                {this.state.userPosts[0] 
                    ? <h2>My Posts</h2>
                    : <h2>No posts yet</h2>    
                }

                {this.state.userPosts.map((userPost, index) => {
                    return <BlogPost postIndex={index} key={userPost.id} blogPost={{ ...userPost }} />
                })}

            </article>
        );
    }
}

export default Profile;