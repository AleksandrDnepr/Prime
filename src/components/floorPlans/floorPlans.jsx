import { Component } from 'react';
import { Subtitle } from '../subtitle/subtitle';
import "./floorPlans.css";
import FloorPlaceholder from "./placeholder.png";

// plans={[
//     { 'name': 'Ground Floor', url: 'http://path.to/image.png' },
//     // ...
//   ]}


export default class FloorPlans extends Component {
    state = {
        currentFloor: this.props.plans[0],
    }

    showPlaceHolder() {
        this.state.currentFloor ?? (
            <img 
                src={FloorPlaceholder} 
                alt="no floor_picture" 
                className="floorplan__picture"/>
        )
    }
    render() {
        const {plans} = this.props;
        return (
        <section className="floorplan__section">
            <Subtitle>FLOOR PLANS</Subtitle>
            <div className="floorplan__frame">
                <nav className="floorplan__toggle">
                    <ol className="floorplan__menu">
                        {plans.map(plan => 
                            <li className="floorplan__menu-item" key={plan.name}> 
                                {plan.name} 
                            </li>)}
                    </ol>
                </nav>
                    <img 
                        src={this.state.currentFloor.url} 
                        alt={`${this.state.currentFloor.name}'s plan'`} 
                        className="floorplan__picture"/>
            </div>
        </section>
        )
    }
}
