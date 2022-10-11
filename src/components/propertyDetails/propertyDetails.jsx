import React, { Component } from 'react'
import "./propertyDetails.css"
import { ReactComponent as AreaSvg } from "./area.svg"
import { ReactComponent as BedsSvg } from "./beds.svg"
import { ReactComponent as BathsSvg } from './baths.svg'

export default class PropertyDetails extends Component {
    render() {
        const { details, mode } = this.props;
        return (
            <ul className={`details details_${mode}`}>
                <li ><AreaSvg className="details__item" />{details.area}ft<sup>2</sup></li>
                <li ><BedsSvg className="details__item" />{details.bedrooms}</li>
                <li ><BathsSvg className="details__item" />{details.bathrooms}</li>
            </ul>
        )
    }
}
