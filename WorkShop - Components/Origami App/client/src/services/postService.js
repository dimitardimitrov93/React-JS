function getAll() {
    return fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .catch(err => console.log(err));
};

export default {
    getAll,
}