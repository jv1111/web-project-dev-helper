import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;//set base url for every request
axios.defaults.withCredentials = true;// Enable passing credentials on cookies with every request. This is required for our server to save cookies on the client's browser.

const getSessionAPI = async () => {
    try {
        const response = await axios.get("/auth/login");
        console.log(response);
        return response.data;
    } catch (error) {
        return error.message
    }
}

const logoutApi = async () => {
    try {
        const response = await axios.get("/auth/logout");
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error.message
    }
}

export {
    getSessionAPI,
    logoutApi
}