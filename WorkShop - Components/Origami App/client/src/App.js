import style from './App.module.css';
import { Component } from 'react';

import postService from './services/postService';

import Header from './components/Header';
import Aside from './components/Aside';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            selectedPost: null,
        }
    }

    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })
    }

    onListItemClick(id) {
        this.setState({ selectedPost: id });
    }

    getPosts() {
        if (!this.state.selectedPost) {
            return this.state.posts;
        } else {
            return [this.state.posts.find(post => post.id == this.state.selectedPost)];
        }
    }

    render() {
        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Aside
                        onListItemClick={this.onListItemClick.bind(this)}
                    />
                    <Main
                        posts={this.getPosts()}
                    />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Aside />
//         <Main />
//       </div>
//     </div>
//   );
// }
