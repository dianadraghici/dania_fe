import React from 'react';
import ProductCard from '../productCard';
import './productList.scss';

const productList = (props) => {
    const renderProducts = () => {
        const {productList} = props;

        return productList.map((product) => {
            return (
                <ProductCard
                    {...product}
                    key={product.productId}
                />
            );
        });
    };

    if (!props.productList) return null;

    return (
        <div className="productListContainer">
            {renderProducts()}
        </div>
    );
};

export default productList;
