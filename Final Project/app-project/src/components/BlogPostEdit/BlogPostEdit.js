import { useEffect, useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import style from './BlogPostEdit.module.css';
import SelectMenu from './SelectMenu';

import blogPostService from '../../services/blogPostService';
import onEditBlogPostSubmit from '../../BlogPostHandlers/onEditBlogPostSubmit';
import InputError from '../Shared/InputError';

const BlogPostEdit = ({ props, userData }) => {

    const blogPostId = props.match.params.blogPostId;
    const [blogPost, setBlogPost] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [submitButtonClassName, setSubmitButtonClassName] = useState(style['submit-btn']);
    const [isCreator, setIsCreator] = useState(false);

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

    useEffect(() => {
        blogPostService.getOne(props.match.params.blogPostId)
            .then(blogPost => {
                if (blogPost.creator !== userData.email) {
                    props.history.push(`/blog/${blogPost.category}/${blogPostId}`);
                    return;
                } else {
                    setIsCreator(true);
                    setBlogPost(blogPost);
                }
            })
            .catch(error => console.log(error));
    }, []);

    const edit = (e) => {
        onEditBlogPostSubmit(e, blogPostId)
            .then(() => {
                props.history.push(`/blog/${blogPost.category}/${props.match.params.blogPostId}`);
            })
            .catch(error => console.log(error));
    }

    if (isCreator) {
        return (
            <div className={style.editBlogPostWrapper}>
                <h2>Edit Your Post</h2>

                <section className={style.editBlogPostForm}>

                    <InputError>{errorMessage}</InputError>

                    <form name="editBlogPostForm" onSubmit={edit}>

                        <div className={style.inputWrapper}>
                            <label htmlFor="title">Title</label>

                            <input type="title" name="title" defaultValue={blogPost.title} onBlur={onChangeHandler} required />
                        </div>

                        <SelectMenu category={blogPost.category} />

                        <div className={style.inputWrapper}>
                            <label htmlFor="imageUrl">Image Url</label>

                            <input type="text" name="imageUrl" defaultValue={blogPost.imageUrl} onBlur={onChangeHandler} required />
                        </div>

                        <textarea className={style.contentArea} name="content" cols="30" rows="10" onBlur={onChangeHandler} defaultValue={blogPost.content}></textarea>
                        <input type="submit" className={submitButtonClassName} value="Edit" data-id={props.match.params.blogPostId} />

                    </form>

                </section>

            </div>
        );
    } else {
        return (
            <div>Loading...</div>
        );
    }
}

export default BlogPostEdit;