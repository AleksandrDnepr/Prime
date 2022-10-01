import React, { Component } from 'react'
import "./propertyDetails.css"
import { ReactComponent as AreaSvg } from "./area.svg"
import { ReactComponent as BedsSvg } from "./beds.svg"
import { ReactComponent as BathsSvg } from './baths.svg'


export default class PropertyDetails extends Component {
    render() {
        const { details, mode } = this.props;
        return (
            <ul className={`details-list_${mode}`}>
                <li ><AreaSvg className="details-list-item" />{details.area}ft<sup>2</sup></li>
                <li ><BedsSvg className="details-list-item" />{details.bedrooms}</li>
                <li ><BathsSvg className="details-list-item" />{details.bathrooms}</li>
            </ul>
        )
    }
}
