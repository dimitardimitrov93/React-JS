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
        }
    }

    componentDidMount() {
        blogPostService.getUserPosts(this.state.userData.email)
            .then(userPosts => {
                this.setState({ userPosts });
            })
            .catch(err => console.log(err));
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

        blogPostService.getUserPosts(this.state.userData.email)
            .then(userPosts => {
                this.setState({ userPosts });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <article className={style.blogArticle}>
                <h2>My posts</h2>
                {this.state.userData.isAuthenticated && <Link className={style.createBlogPostLink} to='/create-blog-post'>Create a new post</Link>}
                {this.state.userPosts.map((userPost, index) => {
                    return <BlogPost postIndex={index} key={userPost.id} blogPost={{ ...userPost }} />
                })}

            </article>
        );
    }
}

export default Profile;