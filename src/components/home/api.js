import axios from 'axios';

const getProducts = () => {
    return axios("http://localhost:8080/products", {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    });
};

export {
    getProducts
};
