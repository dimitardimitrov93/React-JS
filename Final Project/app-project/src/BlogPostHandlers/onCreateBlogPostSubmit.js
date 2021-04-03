import blogPostService from '../services/blogPostService';

function onCreateBlogPostSubmit(e) {
    e.preventDefault();
    // displayLoadingNotification();

    const formData = new FormData(e.target);

    const blogPostData = {
        title: formData.get('title'),
        category: formData.get('category'),
        imageUrl: formData.get('imageUrl'),
        content: formData.get('content'),
        creator: JSON.parse(localStorage.getItem('auth')).email,
        likes: [""],
    }

    // Inputs check
    // if ((!destination.trim()) || (typeof destination.trim() !== 'string')) {
    //     clearLoadingNotification();
    //     displayErrorNotification('The destination name should be a non-empty string.');
    //     return;
    // } else if (!city.trim() || (typeof city.trim() !== 'string')) {
    //     clearLoadingNotification();
    //     displayErrorNotification('The city name should be a non-empty string.');
    //     return;
    // } else if (!duration || (isNaN(duration)) || (Number(duration) < 1 || Number(duration) > 100)) {
    //     clearLoadingNotification();
    //     displayErrorNotification(`The duration should be a number between 1 and 100.`);
    //     return;
    // } else if (!departureDate.trim() || (typeof departureDate.trim() !== 'string')) {
    //     clearLoadingNotification();
    //     displayErrorNotification('The departure date should be a non-empty string.');
    //     return;
    // } else if (!imgUrl.trim() || (typeof imgUrl.trim() !== 'string')) {
    //     clearLoadingNotification();
    //     displayErrorNotification('The image url should be a non-empty string.');
    //     return;
    // }

    blogPostService.addBlogPost(blogPostData)
        .then(res => {
            // console.log('Destination created successfully.');
            console.log(res);
            
            // clearLoadingNotification();
            // navigate('/home')
            // displaySuccessNotification('Destination created successfully.');
        })
        .catch(error => {
            console.log(error);

            // clearLoadingNotification();
            // displayErrorNotification(error.message);
        });
}

export default onCreateBlogPostSubmit;