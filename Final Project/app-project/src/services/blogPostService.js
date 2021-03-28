const databaseUrl = 'https://react-js-final-project-default-rtdb.firebaseio.com';
// const apiKey = 'AIzaSyBVZrISvhzqDAwqLgxdlUFJ4faYEVNGllQ';

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

export default {
    getAll,
    getOne,
};