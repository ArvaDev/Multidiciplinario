import axios from "axios"
export const getProducts = () => {
    return axios.get('http://localhost:4000/products')
        .then((response) => {
            return response.data;
        }).catch((error) => {
            console.log(error);
            throw error;
        });
};

