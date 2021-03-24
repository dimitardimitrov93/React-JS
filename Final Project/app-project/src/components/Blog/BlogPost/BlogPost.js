import style from './BlogPost.module.css';
// import BlogPost from './BlogPost';
import { Link, NavLink } from 'react-router-dom';

function BlogPost(props) {
    return (
        <section className={style.blogSection}>
            <h3>Blog post 1</h3>
            <img className={style.blogImage} src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" alt="" />
            <p className={style.blogParagraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod gravida velit. Proin vitae nisi sed libero mollis lobortis et a lacus. Etiam eu enim augue. Donec lectus ex, feugiat et euismod a, ornare eu lorem. Sed interdum eleifend magna quis convallis. Pellentesque non consequat leo. Vestibulum vulputate feugiat consectetur. Pellentesque tempus massa vitae urna maximus porttitor vitae sit amet leo. Nullam nec nisl vitae turpis maximus volutpat. Nam ultrices sapien sem, aliquam mattis urna volutpat in. Aliquam ut tortor mollis, interdum est quis, blandit arcu. Fusce erat dolor, convallis eu ligula at, congue sollicitudin nibh. Pellentesque varius ligula lorem, eu hendrerit ipsum eleifend sit amet. Aenean varius faucibus porttitor. Sed at velit ac libero lacinia dignissim. Pellentesque tempus massa vitae urna maximus porttitor vitae sit amet leo. Nullam nec nisl vitae turpis maximus volutpat. Nam ultrices sapien sem, aliquam mattis urna volutpat in. Aliquam ut tortor mollis, interdum est quis, blandit arcu. Fusce erat dolor, convallis eu ligula at, congue sollicitudin nibh. Pellentesque varius ligula lorem, eu hendrerit ipsum eleifend sit amet. Aenean varius faucibus porttitor. Sed at velit ac libero lacinia dignissim.
            </p>
        </section>
    );
}

export default BlogPost;