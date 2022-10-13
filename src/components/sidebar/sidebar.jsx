import { Component } from "react";
import {Subtitle} from "../subtitle/subtitle.jsx";
import "./sidebar.css";

export class Sidebar extends Component {       

    render() {
        const {children} = this.props;

        return (
            <>
                <aside className="sidebar">
                    <div className="sidebar__container">
                        <Subtitle>Property search</Subtitle>
                        <section className="sidebar__input">{children}</section>
                    </div>
                </aside>
            </>
        )
    }    
    
}

