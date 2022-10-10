import React, { Component } from 'react';
import { ReactComponent as Apartment } from "./Apartment.svg";
import { ReactComponent as Townhouse } from "./townhouse.svg";
import "./priceLabel.css";

export default class PriceLabel extends Component {
    numberFormat = (price) => {
        const numbFmt = price.toLocaleString('ru-RU');
        return numbFmt;
    }
    chooseImage = (type) => {
        switch (type) {
            case "apartment":
                return <Apartment className='price-label__icon_apartament' />;
            case "townhouse":
                return <Townhouse className='price-label__icon_townhouse' />;
            default: return null;
        }
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
                {this.chooseImage(type)}
                <p className='price-label__icon'>{this.saleOrRent(deal)}</p>
                <p className='price-label__text'>{this.numberFormat(price)} $</p>
            </div>
        )
    }
}
