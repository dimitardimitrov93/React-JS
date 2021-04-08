import blogPostService from '../services/blogPostService';

async function onLikePost(e) {
    const blogPostId = e.target.parentElement.dataset.id;

    let currentUser = JSON.parse(localStorage.getItem('auth')).email;
    let { peopleLiked } = await blogPostService.getOne(blogPostId);

    if (peopleLiked.includes('')) {
        peopleLiked.splice(peopleLiked.indexOf(''), 1);
    }

    peopleLiked.push(currentUser);

    await blogPostService.likePost(blogPostId, { peopleLiked })
        .then(res => {
            return res;
            // document.getElementById('loadingBox').style.display = 'none';
            // navigate(`/details/${recipeId}`);
        })
        .catch(error => {
            console.log(error);
            return error;
        });
}

export default onLikePost;