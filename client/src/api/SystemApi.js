import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;//set base url for every request
axios.defaults.withCredentials = true;// Enable passing credentials on cookies with every request. This is required for our server to save cookies on the client's browser.

const getKeyApi = async () => {
    try {
        const response = await axios.get("/service/key");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.response.data);
        return error.response.data
    }
}

export {
    getKeyApi
}