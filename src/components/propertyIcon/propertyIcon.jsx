import { Component } from "react";
import { ReactComponent as ApartmentIcon } from "./apartment.svg";
import { ReactComponent as TownhouseIcon } from "./townhouse.svg";
import "./propertyIcon.css";

export default class PropertyIcon extends Component{
    generateIcon(size, type, color) {
        switch(type) {
            case "apartment":
                return <ApartmentIcon className={`property-icon_${size}_${type}_${color}`}/>;
            case "townhouse":
                return <TownhouseIcon className={`property-icon_${size}_${type}_${color}`}/>;
            default: return null;
        }
    }

    render() {
        const { size, type, color } = this.props;
        return(
            <>
                { this.generateIcon(size, type, color) }
            </>
        )
    }
}
