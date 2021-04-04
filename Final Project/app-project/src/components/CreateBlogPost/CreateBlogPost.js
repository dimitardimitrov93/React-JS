import { Component, useState, useEffect } from 'react';
import style from './CreateBlogPost.module.css';
import onCreateBlogPostSubmit from '../../BlogPostHandlers/onCreateBlogPostSubmit';
import { Link, NavLink } from 'react-router-dom';
import InputError from '../Shared/InputError';
// import formInputsValidator from '../Shared/InputError/formInputsValidator';

const CreateBlogPost = ({ upperProps, userData }) => {

    // const onCreateBlogPostSubmit = (e) => {
    //     e.preventDefault();

    //     const formData = new FormData(e.target);

    //     const blogPostData = {
    //         title: formData.get('title'),
    //          formData.get('category'),
    //         imageUrl: formData.get('imageUrl'),
    //         content: formData.get('content'),
    //     }

    //     console.log(blogPostData);
    // }

    const [errorMessage, setErrorMessage] = useState('');
    const [submitButtonClassName, setSubmitButtonClassName] = useState(style['submit-btn']);

    const onChangeHandler = (e) => {
        e.preventDefault();

        if (e.target.name === 'title') {
            if (!e.target.value.trim() || e.target.value.length < 6) {
                setErrorMessage('The title should be at least 6 characters long.');
                setSubmitButtonClassName(style['submit-btn-disabled']);
            } else {
                setErrorMessage('');
                setSubmitButtonClassName(style['submit-btn']);
            }
        } else if (e.target.name === 'imageUrl') {
            const imageUrlPattern = /^http:\/\/|https:\/\/.+/; //RegEx test if the user provided proper image URL.

            if (!e.target.value.trim() || !imageUrlPattern.test(e.target.value)) {
                setErrorMessage('The image Url should start with "http://" or "https://".');
                setSubmitButtonClassName(style['submit-btn-disabled']);
            } else {
                setErrorMessage('');
                setSubmitButtonClassName(style['submit-btn']);
            }
        } else if (e.target.name === 'content') {
            if (!e.target.value.trim() || e.target.value.length < 10) {
                setErrorMessage('Content must be at least 10 characters long.');
                setSubmitButtonClassName(style['submit-btn-disabled']);
            } else {
                setErrorMessage('');
                setSubmitButtonClassName(style['submit-btn']);
            }
        }
    }

    const post = (e) => {
        onCreateBlogPostSubmit(e)
            .then((res) => {
                upperProps.history.push(`/profile/${userData.email}`);
            })
            .catch(error => console.log(error));

        // const postCategory = new FormData(e.target).get('category');

        // onCreateBlogPostSubmit(e)
        //     .then((res) => {
        //         upperProps.history.push(`/blog/${postCategory}/${res.name}`);
        //     })
        //     .catch(error => console.log(error));
    }

    return (
        <div className={style.createBlogPostWrapper}>
            <h2>Create a New Blog Post</h2>

            <section className={style.createBlogPostForm}>

                <InputError>{errorMessage}</InputError>
                <form name="createBlogPostForm" onSubmit={post}>
                    <div className={style.inputWrapper}>
                        <label htmlFor="title">Title</label>
                        <input type="title" name="title" required onBlur={onChangeHandler} />
                    </div>
                    <div className={style.inputWrapper}>

                        <label htmlFor="category">Category</label>
                        <select name="category" >
                            <option value="mocha">Mocha</option>
                            <option value="espresso">Espresso</option>
                            <option value="latte">Latte</option>
                            <option value="Cappuccino">Cappuccino</option>
                        </select>
                    </div>
                    <div className={style.inputWrapper}>

                        <label htmlFor="imageUrl">Image Url</label>
                        <input type="text" name="imageUrl" required onBlur={onChangeHandler} />
                    </div>

                    <label className={style.contentLabel} htmlFor="content">Content</label>
                    <textarea className={style.contentArea} name="content" id="" cols="30" rows="10" onBlur={onChangeHandler}></textarea>
                    <input type="submit" className={submitButtonClassName} value="Post" />
                    {/* <span class="successful-reg-msg">You were registered successfully. Now you can <NavLink className={style.loginLink} to='/login'>log in.</NavLink></span>
                        <span class="unsuccessful-reg-msg"></span> */}
                </form>

            </section>

        </div>
    );
}

export default CreateBlogPost;