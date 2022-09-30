import React, { Component } from 'react'
import "./propertyDetails.css"
import { ReactComponent as AreaSvg } from "./area.svg"
import { ReactComponent as BedsSvg } from "./beds.svg"
import { ReactComponent as BathsSvg } from './baths.svg'


export default class PropertyDetails extends Component {
    render() {
        const { details } = this.props;
        return (
            <ul className='details-list'>
                <li ><AreaSvg className="details-list-item" />{details.area}</li>
                <li ><BedsSvg className="details-list-item" />{details.bedrooms}</li>
                <li ><BathsSvg className="details-list-item" />{details.bathrooms}</li>
            </ul>
        )
    }
}
