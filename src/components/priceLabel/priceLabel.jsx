import React, { Component } from 'react';
import PropertyIcon from '../propertyIcon/propertyIcon';
import "./priceLabel.css";


export default class PriceLabel extends Component {
    numberFormat = (price) => {
        const numbFmt = price.toLocaleString('ru-RU');
        return numbFmt;
    }

    saleOrRent = (deal) => {
        switch (deal) {
            case "sale":
                return "For Sale";
            case "rent":
                return "For Rent";
            default: return null;
        }
    }
    render() {
        const { price, deal, type } = this.props
        return (
            <div className="price-label">
                <p className='price-label__icon'>
                    <PropertyIcon size={"s"} type={type} color={"pink"}/>
                    {this.saleOrRent(deal)}
                </p>
                <p className='price-label__text'>{this.numberFormat(price)} $</p>
            </div>
        )
    }
}
