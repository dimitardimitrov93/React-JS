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
import Profile from './components/Profile';
import BlogPostEdit from './components/BlogPostEdit';

// import AuthContext from './contexts/AuthContext';
// import isAuth from './hoc/isAuth';

import About from './components/About';
import ContactUs from './components/ContactUs';

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

        if (this.state.userData) {
            if (this.state.userData.email !== fromAuthService.email) {
                this.setState({ userData: fromAuthService });
            }
            return;
        } else {
            this.setState({ userData: { ...fromAuthService } });
            return;
        }
    }

    componentDidUpdate() {
        const fromAuthService = authService.getData();

        if (this.state.userData) {
            if (this.state.userData.email !== fromAuthService.email) {
                this.setState({ userData: fromAuthService });
            }
            return;
        } else {
            this.setState({ userData: fromAuthService });
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
                    {/* <AuthContext.Provider value={this.userData}> */}
                    <Header appContext={this} userData={this.state.userData} />

                    <Suspense fallback={<div>Loading...</div>}>

                        <Switch>

                            <Route path="/" exact>
                                <Main />
                            </Route>

                            <Route
                                exact
                                path="/create-blog-post"
                                render={(props) =>
                                    (this.state.userData.isAuthenticated
                                        ? <CreateBlogPost upperProps={props} userData={this.state.userData} />
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route path="/blog" props={this} component={Blog} exact />

                            <Route path="/blog/:category" component={Blog} exact />

                            <Route
                                exact
                                path="/blog/:blogPostCategory/:blogPostId"
                                render={(props) =>
                                    (this.state.userData.isAuthenticated
                                        ? <BlogPostDetails props={props} />
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route
                                exact
                                path="/blog/:blogPostCategory/:blogPostId/edit"
                                render={(props) =>
                                    

                                    (this.state.userData.isAuthenticated
                                        ? <BlogPostEdit props={props} userData={this.state.userData}/>
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route
                                exact
                                path="/blog/:blogPostCategory/:blogPostId"
                                render={(props) =>
                                    (this.state.userData.isAuthenticated
                                        ? <BlogPostDetails props={props} />
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route path="/about" component={About} />

                            <Route path="/contact-us" component={ContactUs} />

                            <Route path="/login" >
                                <Login appContext={this} />
                            </Route>

                            <Route path="/register" component={Register} />

                            <Route
                                exact
                                path="/profile/:userEmail"
                                render={() =>
                                    (this.state.userData.isAuthenticated
                                        ? <Profile />
                                        : <Redirect to="/login" />)
                                }
                            />

                            <Route render={() => <h1>Page Not Found</h1>} />
                        </Switch>
                    </Suspense>

                    <Footer />
                    {/* </AuthContext.Provider> */}
                </div>
            </div>
        );
    }
}

export default App;
