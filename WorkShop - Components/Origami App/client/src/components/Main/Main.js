import './Main.css';
import Post from './Post'

function Main({
    posts
}) {
    return (
        <main className="main">
            <h1>Soooooooooome Heading</h1>
            <div className="posts">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        </main>
    );
  }
  
  export default Main;