const apiKey = 'AIzaSyBVZrISvhzqDAwqLgxdlUFJ4faYEVNGllQ';

const authService = {

    async login(email, password) {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true, // important
            }),
        });

        const data = await res.json();
        
        if (!data.error) {
            localStorage.setItem('auth', JSON.stringify(data));
            return Promise.resolve(data);
        } else {
            return Promise.reject(data.error);
        }
    },

    async register(email, password) {
        const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true, // important
            })
        })

        const data = await res.json();

        if (!data.error) {
            return Promise.resolve(data);
        } else {
            return Promise.reject(data.error);
        }
    },

    getData() {
        const data = JSON.parse(localStorage.getItem('auth'));

        if (data) {
            return {
                isAuthenticated: Boolean(data.idToken),
                email: data.email,
                idToken: data.idToken,
            }
        } else {
            return {
                isAuthenticated: false,
                email: '',
            }
        }
    },

    logOut() {
        localStorage.removeItem('auth');
    },
};

export default authService;