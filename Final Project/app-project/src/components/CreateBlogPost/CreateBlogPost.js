import { useState, useContext } from 'react';
import style from './CreateBlogPost.module.css';
import onCreateBlogPostSubmit from '../../BlogPostHandlers/onCreateBlogPostSubmit';
import { useHistory } from 'react-router-dom';
import InputError from '../Shared/InputError';
import AuthContext from '../../contexts/AuthContext';
// import formInputsValidator from '../Shared/InputError/formInputsValidator';

const CreateBlogPost = () => {
    const { userData } = useContext(AuthContext).state;
    const history = useHistory();

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
                history.push(`/profile/${userData.email}`);
            })
            .catch(error => console.log(error));
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

                </form>

            </section>

        </div>
    );
}


export default CreateBlogPost;