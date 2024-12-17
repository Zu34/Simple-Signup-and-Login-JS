// apiService.js
export const apiService = {
    login: async (username, password) => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            return response.json();
        } catch (error) {
            console.error('Login Error:', error);
        }
    },

    signup: async (name, email, password) => {
        try {
            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });
            return response.json();
        } catch (error) {
            console.error('Signup Error:', error);
        }
    }
};
