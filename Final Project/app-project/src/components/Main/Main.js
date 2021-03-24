import style from './Main.module.css';
import Post from './Post'

function Main({
    posts
}) {
    return (
        <div className={style.mainWrapper}>
            <main className={style.main}>
                <h1>Why Coffee?</h1>
                <article>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod gravida velit. Proin vitae nisi sed libero mollis lobortis et a lacus. Etiam eu enim augue. Donec lectus ex, feugiat et euismod a, ornare eu lorem. Sed interdum eleifend magna quis convallis. Pellentesque non consequat leo. Vestibulum vulputate feugiat consectetur. Pellentesque tempus massa vitae urna maximus porttitor vitae sit amet leo. Nullam nec nisl vitae turpis maximus volutpat. Nam ultrices sapien sem, aliquam mattis urna volutpat in. Aliquam ut tortor mollis, interdum est quis, blandit arcu. Fusce erat dolor, convallis eu ligula at, congue sollicitudin nibh. Pellentesque varius ligula lorem, eu hendrerit ipsum eleifend sit amet. Aenean varius faucibus porttitor. Sed at velit ac libero lacinia dignissim.
                    </p>
                    <p>
                        Pellentesque placerat lectus eu interdum tincidunt. Donec libero nunc, efficitur eget augue non, sollicitudin dignissim elit. Ut sed augue vehicula, ultrices sem sit amet, eleifend est. Vivamus nec tincidunt tellus, varius ultricies tortor. Vivamus maximus ornare consectetur. Suspendisse ut arcu at mauris pulvinar laoreet a sed ligula. Nam ac risus et diam rhoncus pharetra. Mauris ipsum risus, consequat vitae lorem id, mattis aliquet nisi. In sed sem mauris. Sed sed velit pharetra, bibendum lacus ut, efficitur ante. Donec vehicula pharetra risus id ultricies. Maecenas lacinia egestas tellus, eget efficitur ligula posuere eget.
                    </p>
                    <p>
                        Fusce bibendum mattis lacinia. Pellentesque efficitur quis elit a faucibus. Mauris cursus commodo eros, et scelerisque libero. Fusce sed ex odio. Vivamus lorem nisi, dapibus nec dignissim eu, mattis a lectus. Curabitur sollicitudin suscipit eros, ut malesuada quam scelerisque in. Donec dolor magna, laoreet eu lacus sed, ornare placerat turpis. Vestibulum eu tempor nibh. Pellentesque ac purus venenatis, finibus eros ut, porta purus. Fusce placerat, erat ac consectetur pretium, sapien lorem sodales odio, ac congue sem arcu ac massa. Sed sapien mauris, vestibulum vel tempus in, ultricies ut velit. Proin mattis, erat quis eleifend fringilla, dolor nunc sollicitudin libero, eget efficitur justo turpis sed elit.
                    </p>
                </article>
                {/* <div className="posts">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div> */}
            </main>
        </div>
    );
}

export default Main;