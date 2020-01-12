import React from 'react';
import {IMAGES} from "../../constants";
import {Button} from 'react-toolbox/lib/button';

import "./productCard.scss";

const productCard = (props) => {
    const { name, price, imageName } = props;

    return (
        <div className="productContainer">
            <img src={IMAGES[imageName]} className="productImage" alt={name} />
            <div className="productDetails">
                <span className="productName">{name}</span>
                <span className="price">${price}</span>
            </div>
            <div className="separatorLine">
                <hr />
            </div>
            <Button
                onClick={() => alert('Item added to cart succesfully!')}
                label="ADD TO CART +"
                className="addToCartButton"
            />
        </div>
    );
};

export default productCard;
