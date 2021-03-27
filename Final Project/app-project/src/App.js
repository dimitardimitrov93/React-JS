import style from './App.module.css';

import { Component, Suspense, lazy } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

// import postService from './services/postService';

import Header from './components/Header';
// import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

const About = lazy(() => import('./components/About'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Blog = lazy(() => import('./components/Blog'));

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
        }
    }

    // componentDidMount() {
    //     postService.getAll()
    //         .then(posts => {
    //             this.setState({ posts })
    //         })
    // }

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
                    <Header />
                    {/* <Aside
                        onListItemClick={this.onListItemClick.bind(this)}
                    /> */}

                    <Suspense fallback={<div>Loading...</div>}>

                        <Switch>

                            <Route path="/" exact>
                                <Main />
                            </Route>

                            <Route path="/blog" component={Blog} exact/>

                            <Route path="/blog/:category" component={Blog} />

                            <Route path="/about" component={About} />

                            <Route path="/contact-us" component={ContactUs} />

                            <Route path="/login" component={Login} />

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
