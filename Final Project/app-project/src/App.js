import style from './App.module.css';

import { Component, Suspense, lazy } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import authService from './services/authService';

// import postService from './services/postService';

import Header from './components/Header';
// import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import CreateBlogPost from './components/CreateBlogPost';
import BlogPostDetails from './components/BlogPostDetails';

const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Blog = lazy(() => import('./components/Blog'));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
            userData: authService.getData(),
        }
    }

    componentDidMount() {
        const fromAuthService = authService.getData();
        console.log(Boolean(this.state.userData));

        if (this.state.userData) {
            if (this.state.userData.email !== fromAuthService.email) {
                this.setState({ userData: fromAuthService });
                console.log(`${this.state.userData} didmount`);

            }
            return;
        } else {
            console.log(fromAuthService);
            console.log(this);

            this.setState({ userData: { ...fromAuthService } });
            console.log(`${this.state.userData} didmount else`);


            return;
        }
    }

    componentDidUpdate() {
        const fromAuthService = authService.getData();

        if (this.state.userData) {
            if (this.state.userData.email !== fromAuthService.email) {
                this.setState({ userData: fromAuthService });
                console.log(`${this.state.userData} didupdate else`);

            }
            return;
        } else {
            this.setState({ userData: fromAuthService });
            console.log(`${this.state.userData} didupdate else`);

            return;
        }
    }

    // onListItemClick(id) {
    //     this.setState({ selectedPost: id });
    // }

    // getPosts() {
    //     if (!this.state.selectedPost) {
    //         return this.state.posts;
    //     } else {
    //         return [this.state.posts.find(post => post.id == this.state.selectedPost)];
    //     }
    // }

    render() {
        return (
            <div className={style.app}>
                <div className={style.container}>
                    {/* <Aside
                        onListItemClick={this.onListItemClick.bind(this)}
                    /> */}
                    <Header appContext={this} userData={this.state.userData} />

                    <Suspense fallback={<div>Loading...</div>}>

                        <Switch>

                            <Route path="/" exact>
                                <Main />
                            </Route>

                            <Route
                                exact
                                path="/create-blog-post"
                                render={() =>
                                    (this.state.userData.isAuthenticated
                                        ? <CreateBlogPost />
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route path="/blog" props={this} component={Blog} exact />

                            <Route path="/blog/:category" component={Blog} exact />

                            <Route path="/blog/:blogPostCategory/:blogPostId" component={BlogPostDetails} exact />

                            <Route path="/about" component={About} />

                            <Route path="/contact-us" component={ContactUs} />

                            <Route path="/login" >
                                <Login appContext={this} />
                            </Route>

                            <Route path="/register" component={Register} />

                            <Route render={() => <h1>Page Not Found</h1>} />
                        </Switch>
                    </Suspense>

                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
