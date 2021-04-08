import authService from '../services/authService';
import { Redirect } from 'react-router-dom';

async function onLoginSubmit(e) {
    e.preventDefault();
    // displayLoadingNotification();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // if (!email.trim() || !isEmailValid(email)) {
    //     // clearLoadingNotification();
    //     // displayErrorNotification('The email field must be filled with a valid address.');
    //     return;
    // } else if (!password.trim()) {
    //     // clearLoadingNotification();
    //     // displayErrorNotification('The password cannot be an empty string.');
    //     return;
    // }

    return authService.login(email, password)
        .then(data => {
            return data;
            // console.log(data);
            // return <Redirect to='/' />
            // clearLoadingNotification();
            // clearInputFields();
            // navigate('/home');
            // displaySuccessNotification('Login successful.');
        })
        .catch(error => {
            let errorMessage = error.message
                .replace(new RegExp(/_/g), ' ')
                .split(' ')
                .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
                .join(' ');

            return Promise.reject(errorMessage);
            
            // Format the error messages from Firebase DB
            // clearLoadingNotification();
            // let errorMessage = error.message
            //     .replace(new RegExp(/_/g), ' ')
            //     .split(' ')
            //     .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
            //     .join(' ');
            // displayErrorNotification(`${errorMessage}.`)
        });
}

export default onLoginSubmit;