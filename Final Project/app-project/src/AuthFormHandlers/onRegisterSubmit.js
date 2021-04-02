import authService from '../services/authService';

function onRegisterSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    return authService.register(email, password)
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

            return errorMessage;

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

export default onRegisterSubmit;