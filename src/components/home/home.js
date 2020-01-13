import React, {Component} from 'react';
import {IMAGES} from "../../constants";
import './home.scss';
import {Button} from 'react-toolbox/lib/button';
import ProductList from '../productList';
import {getProducts} from './api';
import {scroller} from 'react-scroll';

class Home extends Component {
    constructor(props) {
        super(props);
        this.productsRef = null;
        this.scroller = scroller;
        this.state = {
            productList: []
        };
    }

    componentDidMount() {
        getProducts().then((res) => {
            this.setState({
                productList: res.data
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    scrollToRef = (ref) => {
        console.log(this.productsRef);
        console.log(this.productsRef.current);
        if (!ref) return null;

        this.scroller.scrollTo('productsSection', {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50
        });
    };

    leftFixed = () => {
        return (
            <div className="leftFixed">
                <span className="leftSpan">Dania - time to get dress</span>
            </div>
        );
    };

    rightFixed = () => {
        return (
            <div className="rightFixed">
                <span className="rightSpan">Since - 1845</span>
            </div>
        );
    };

    scrollDown = () => this.scrollToRef(this.productsRef);

    render() {
        return (
            <div className="homeContainer">
                <img src={IMAGES.home} className="homeImage" alt="homeImage" />
                <div className="pinkBackground" />
                {this.leftFixed()}
                {this.rightFixed()}
                <div className="firstSectionContainer">
                    <div className="spacing"></div>
                    <div className="bigText">LE STYLIST</div>
                    <div className="notSoBigTextContainer">
                        <div className="notSoBigText">
                            <div className="smallLine" />WEAR YOUR DRESS<div className="smallLine"/>
                        </div>
                    </div>
                    <div className="buttonToTrendingContainer">
                        <Button className="scrollDownButton" onClick={this.scrollDown}>
                            <div className="arrowDown"></div>
                        </Button>
                    </div>
                </div>
                <div className="productsSection" ref={(ref) => this.productsRef = ref} name="productsSection">
                    <div className="productLabelContainer">
                        <div className="bigLabel">Products</div>
                        <div className="smallLabel">our products</div>
                    </div>
                    <div className="productsContainer">
                        <ProductList productList={this.state.productList} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
