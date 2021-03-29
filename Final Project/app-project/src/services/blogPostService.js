import authService from '../services/authService';
const databaseUrl = 'https://react-js-final-project-default-rtdb.firebaseio.com';
const apiKey = 'AIzaSyBVZrISvhzqDAwqLgxdlUFJ4faYEVNGllQ';

const request = async (url, method, body) => {
    let options = method === 'POST' || method === 'PATCH' ? { method, body } : { method };

    const res = await fetch(url, options);
    const data = await res.json();
    
    return data;
}

function getAll(category) {
    return fetch(`${databaseUrl}/blogPosts.json`)
        .then(res => res.json())
        .then(blogPosts => {
            if (category) {
                return Object.keys(blogPosts)
                    .map(id => ({ id: id, ...blogPosts[id] }))
                    .filter(post => post.category == category);
            } else {
                return Object.keys(blogPosts)
                    .map(id => ({ id: id, ...blogPosts[id] }))
            }
        })
        .catch(err => console.log(err));
}

function getOne(blogId, category) {
    return fetch(`${databaseUrl}/blogPosts/${category}/${blogId}.json`)
        .then(res => res.json())
        .then(blogPost => {
            return blogPost;
        })
        .catch(err => console.log(err));
}

async function addBlogPost(blogPostData) {
    const res = await request(`${databaseUrl}/blogPosts.json?auth=${authService.getData().idToken}`, 'POST', JSON.stringify(blogPostData));
    return res;
}

async function deleteBlogPost(destinationId) {
    const res = await request(`${databaseUrl}/destinations/${destinationId}.json?auth=${authService.getData().idToken}`, 'DELETE');
    return res;
}

async function editBlogPost(destinationId, destinationData) {
    const res = await request(`${databaseUrl}/destinations/${destinationId}.json?auth=${authService.getData().idToken}`, 'PATCH', JSON.stringify(destinationData));

    if (!res.error) {
        return Promise.resolve(res);
    } else {
        return Promise.reject(res.error);
    }
}

export default {
    getAll,
    getOne,
    addBlogPost,
};