import authService from '../services/authService';

function onRegisterSubmit(e) {
    e.preventDefault();
    // displayLoadingNotification();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (!email.trim() || !isEmailValid(email)) {
        // clearLoadingNotification();
        // displayErrorNotification('The email field must be filled with a valid address.');
        console.log('The email field must be filled with a valid address.');
        return;
    } else if (password !== repeatPassword) {
        // clearLoadingNotification();
        // displayErrorNotification('Password mismatch.');

        console.log('Password mismatch.');

        return;
    } else if (!password.trim()) {
        // clearLoadingNotification();
        // displayErrorNotification('The password cannot be an empty string.');
        console.log('The password cannot be an empty string.');
        return;
    }

    authService.register(email, password)
        .then(data => {
            console.log(`Registered successfully.`);

            // clearLoadingNotification();
            // displaySuccessNotification('User registration successful.');
            // clearInputFields();
            // authService.login(email, password)
            //     .then(res => {
            //         navigate('/home');
            //     });
        })
        .catch(error => {
            let errorMessage = error.message
                .replace(new RegExp(/_/g), ' ')
                .split(' ')
                .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
                .join(' ');

            console.log(errorMessage);

            // // Format the error messages from Firebase DB
            // clearLoadingNotification();
            // let errorMessage = error.message
            //     .replace(new RegExp(/_/g), ' ')
            //     .split(' ')
            //     .map(word => `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`)
            //     .join(' ');
            // displayErrorNotification(`${errorMessage}.`)
        });
}

function isEmailValid(email) {
    const emailValidationRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidationRegEx.test(String(email).toLowerCase());
}

export default onRegisterSubmit;