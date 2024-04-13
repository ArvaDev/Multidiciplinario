import axios from "axios"
export const getProducts = () => {
    return axios.get('http://18.233.236.214/products')
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
};

