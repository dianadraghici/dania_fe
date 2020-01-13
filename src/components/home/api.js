import axios from 'axios';

const getProducts = () => {
    return axios("http://afternoon-garden-11169.herokuapp.com/products", {
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
