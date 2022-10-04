import React, { Component } from "react";
import "./feature.css"
import { ReactComponent as PawIcon} from "./Paw.svg";
import { ReactComponent as PoolIcon} from "./Pool.svg";
import { ReactComponent as  FenceIcon} from "./Fence.svg";

export default class Feature extends Component {
    
    getImg = (icon) => {
        switch (icon) {
        case "paw":
            return <PawIcon />;
        case "pool":
            return <PoolIcon />;
        case "fence":
            return <FenceIcon />;
        default:
            break;
        }
    };

    render() {
        const {children, icon} = this.props;
        return  <li className="feature_container">
                    <span className="features_icon">
                        {this.getImg(icon)} 
                    </span>       
                    {children}
                </li>
    }
}      

