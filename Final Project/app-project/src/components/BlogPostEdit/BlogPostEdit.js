import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import style from './BlogPostEdit.module.css';
import SelectMenu from './SelectMenu';

import blogPostService from '../../services/blogPostService';
import onEditBlogPostSubmit from '../../BlogPostHandlers/onEditBlogPostSubmit';

const BlogPostEdit = ({ props }) => {

    const [blogPost, setBlogPost] = useState({});
    const blogPostId = props.match.params.blogPostId;

    useEffect(() => {
        blogPostService.getOne(props.match.params.blogPostId)
            .then(blogPost => setBlogPost(blogPost))
            .catch(error => console.log(error));
    }, []);

    const edit = (e) => {
        onEditBlogPostSubmit(e, blogPostId)
            .then(() => {
                props.history.push(`/blog/${blogPost.category}/${props.match.params.blogPostId}`);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className={style.editBlogPostWrapper}>
            <h2>Edit Your Post</h2>

            <section className={style.editBlogPostForm}>

                <form name="editBlogPostForm" onSubmit={edit}>

                    <div className={style.inputWrapper}>
                        <label htmlFor="title">Title</label>

                        <input type="title" name="title" defaultValue={blogPost.title} required />
                    </div>

                    <SelectMenu category={blogPost.category} />

                    <div className={style.inputWrapper}>
                        <label htmlFor="imageUrl">Image Url</label>

                        <input type="text" name="imageUrl" defaultValue={blogPost.imageUrl} required />
                    </div>

                    <textarea className={style.contentArea} name="content" cols="30" rows="10" defaultValue={blogPost.content}></textarea>
                    <input type="submit" className={style['submit-btn']} value="Edit" data-id={props.match.params.blogPostId} />
                    {/* <span class="successful-reg-msg">You were registered successfully. Now you can <NavLink className={style.loginLink} to='/login'>log in.</NavLink></span>
                        <span class="unsuccessful-reg-msg"></span> */}
                </form>

            </section>

        </div>
    );
}

export default BlogPostEdit;