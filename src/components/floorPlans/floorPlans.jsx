import { Component } from 'react';
import {Subtitle} from '../subtitle/subtitle.jsx';
import "./floorPlans.css";


export class FloorPlans extends Component {
    state = {
        currentFloor: this.props.plans[0],
    }

    changeFloor(choosenFloor) {
        this.setState({currentFloor: choosenFloor});
    }

    render() {
        const { plans } = this.props;
        const { currentFloor } = this.state;
        return (
        <section className="floorplan__section">
            <Subtitle>FLOOR PLANS</Subtitle>
            <div className="floorplan__frame">
                <nav className="floorplan__toggle">
                    <ol className="floorplan__menu">
                        {plans.map(plan => {
                            return (
                            <li 
                            className={`floorplan__menu-item ${plan.name === currentFloor.name ? "currentFloor" : ""}`} 
                            key={plan.name} 
                            onClick={() => this.changeFloor(plan)}> 
                                {plan.name} 
                            </li>)})
                        }
                    </ol>
                </nav>
                    <img 
                        src={this.state.currentFloor.url} 
                        alt={`${this.state.currentFloor.name}'s plan'`} 
                        className="floorplan__picture"
                    />
            </div>
        </section>
        )
    }
}
