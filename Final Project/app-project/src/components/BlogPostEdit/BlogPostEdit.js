import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import style from './BlogPostEdit.module.css';
import blogPostService from '../../services/blogPostService';
import onEditBlogPostSubmit from '../../BlogPostHandlers/onEditBlogPostSubmit';

const BlogPostEdit = ({ match, history }) => {
    const [blogPost, setBlogPost] = useState({});
    const blogPostId = match.params.blogPostId;

    blogPostService.getOne(match.params.blogPostId)
        .then(blogPost => setBlogPost(blogPost))
        .catch(error => console.log(error));

    const edit = (e) => {
        onEditBlogPostSubmit(e, blogPostId)
            .then(() => {
                history.push(`/blog/${blogPost.category}/${match.params.blogPostId}`);
            })
            .catch(error => console.log(error));
    }

    return (
        <main>

            <div className={style.editBlogPostWrapper}>
                <h2>Edit Your Post</h2>

                <section className={style.editBlogPostForm}>

                    <form name="editBlogPostForm" onSubmit={edit}>
                        <input type="title" name="title" defaultValue={blogPost.title} required />
                        <label htmlFor="category">Category</label>
                        <select name="category">
                            <option value="mocha">Mocha</option>
                            <option value="espresso">Espresso</option>
                            <option value="latte">Latte</option>
                            <option value="Cappuccino">Cappuccino</option>
                        </select>
                        <input type="text" name="imageUrl" value={blogPost.imageUrl} required />
                        <textarea className={style.contentArea} name="content" cols="30" rows="10" defaultValue={blogPost.content}></textarea>
                        <input type="submit" className={style['submit-btn']} value="Edit" data-id={match.params.blogPostId} />
                        {/* <span class="successful-reg-msg">You were registered successfully. Now you can <NavLink className={style.loginLink} to='/login'>log in.</NavLink></span>
                        <span class="unsuccessful-reg-msg"></span> */}
                    </form>

                </section>

            </div>
        </main>

    );
}

export default BlogPostEdit;