import authService from '../services/authService';
import isEmailValid from '../Validators/isEmailValid';

function onRegisterSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (!email.trim() || !isEmailValid(email)) {
        return new Promise((resolve, reject) => {
            reject('The email field must be filled with a valid address.')
        });
    } else if (password !== repeatPassword) {
        return new Promise((resolve, reject) => {
            reject('Password mismatch.')
        });
    } else if (!password.trim()) {
        return new Promise((resolve, reject) => {
            reject('The password cannot be an empty string.');
        });
    }

    return authService.register(email, password)
        .then(data => {
            return(`Registered successfully.`);
        })
        .catch(error => {
            let errorMessage = error.message
                .replace(new RegExp(/_/g), ' ')
                .split(' ')
                .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
                .join(' ');

            return Promise.reject(errorMessage);
        });
}

export default onRegisterSubmit;