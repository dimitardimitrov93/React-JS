import './Post.css';

function Post({
    post
}) {
    return (
        <div className="post">
            <img src="/blue-origami-bird.png" alt="blue-origami-bird" />
            <p className="description">{post.content}</p>
            <div>
                <span>
                    <small>Author:</small>
                    {post.author}
                </span>
            </div>
        </div>
    );
}

export default Post;