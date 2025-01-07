import axios from '@/config/axiosConfig';

export const signUpRequest = async ({ email, password, username }) => {
    // console.log("step 1")
    try {
        const response = await axios.post('/user/signup', {
            email,
            password,
            username
        });
    // console.log("step 2",response)

        return response.data;
    } catch(error) {
        console.error(error);
        throw error.response.data;     
    }
};

export const signInRequest = async ({ email, password }) => {
    try {
        const response = await axios.post('/user/signin', {
            email,
            password
        });
        return response.data;
    } catch(error) {
        console.error(error);
        throw error.response.data;     
    }
};