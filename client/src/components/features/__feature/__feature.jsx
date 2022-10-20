import React, { Component } from "react";
import "./__feature.css"
import { ReactComponent as PetIcon} from "./__pet.svg";
import { ReactComponent as PoolIcon} from "./__pool.svg";
import { ReactComponent as  GardenIcon} from "./__garden.svg";

export default class Feature extends Component {
    
    getIconFor(name) {
            switch (name) {    
            case "pet":
                return <PetIcon />;
            case "pool":
                return <PoolIcon />;
            case "garden":
                return <GardenIcon />;
            default: 
                return null;
            }
        };

    render() {
        const { name, text } = this.props;
    return  <li className="feature">
                <span className="feature__icon">
                    {this.getIconFor(name)} 
                </span>       
                {text}
            </li>
    }
}      
      
