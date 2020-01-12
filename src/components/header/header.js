import React from 'react';
import {Link} from 'react-router-dom';
import {IMAGES} from '../../constants';
import './header.scss';

const Header = (props) => {
    const renderLogo = () => {
        return (
            <div className="homeButton">
                <Link to="/">{"Dania"}</Link>
            </div>
        );
    };

    const renderCart = () => {
        return (
            <div className="cartButtonContainter">
                <div className="link">
                    <Link to="/cart">
                        <img src={IMAGES.cart} className="cart" alt="cart"/>
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <div className="appContainer">
            <div className="headerContainer">
                <div className="logoContainer">
                    {renderLogo()}
                </div>
                <div className="menuContainer">
                    {renderCart()}
                </div>
            </div>
            <div className="contentContainer">
                {props.children}
            </div>
        </div>
    );
};

export default Header;
