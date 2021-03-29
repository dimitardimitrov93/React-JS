import { Component } from 'react';
import style from './CreateBlogPost.module.css';
import onCreateBlogPostSubmit from '../../BlogPostHandlers/onCreateBlogPostSubmit';

const CreateBlogPost = () => {

    // const onCreateBlogPostSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const blogPostData = {
    //         title: formData.get('title'),
    //         category: formData.get('category'),
    //         imageUrl: formData.get('imageUrl'),
    //         content: formData.get('content'),
    //     }

    //     console.log(blogPostData);
    // }

    return (
        <div className={style.createBlogPostWrapper}>
            <h2>Create a New Blog Post</h2>

            <section className={style.createBlogPostForm}>

                <form onSubmit={onCreateBlogPostSubmit}>
                    <input type="title" name="title" placeholder="Title" required />
                    <input type="text" name="category" placeholder="Category" required />
                    <input type="text" name="imageUrl" placeholder="Image Url" required />
                    <textarea className={style.contentArea} name="content" id="" cols="30" rows="10"></textarea>
                    <input type="submit" className={style['submit-btn']} value="Post" />
                    {/* <span class="successful-reg-msg">You were registered successfully. Now you can <NavLink className={style.loginLink} to='/login'>log in.</NavLink></span>
                        <span class="unsuccessful-reg-msg"></span> */}
                </form>

            </section>

        </div>
    );
}

export default CreateBlogPost;