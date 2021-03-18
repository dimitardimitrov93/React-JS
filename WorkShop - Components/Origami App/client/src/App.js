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
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({ posts })
      })
  }

  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Aside />
          <Main posts={this.state.posts} />
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
