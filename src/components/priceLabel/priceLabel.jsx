import React, { Component } from 'react'
import { ReactComponent as ApartmentSvg } from "./Apartment.svg"
import { ReactComponent as TownHouseSvg } from "./townhouse.svg"

export class PriceLabel extends Component {
    numberFormat = (price) => {
        const numbFmt = price.toLocaleString('ru-RU');
        return `$ ${numbFmt}`;
    }
    chooseImage = (type) => {
        switch (type) {
            case "apartment":
                return <ApartmentSvg className='type-building-icon' />;
            case "townhouse":
                return <TownHouseSvg className='type-building-icon' />;
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
            <div>
                <div className="price__label-block">
                    {this.chooseImage(type)}
                    <p className='type-building'>{this.saleOrRent(deal)}</p>
                    <p className='price'>{this.numberFormat(price)}</p>
                </div>
            </div>
        )
    }
}
