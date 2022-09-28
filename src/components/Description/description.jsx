import { Component } from 'react';
import './description.css';

class Description extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className="text_description">
                {<p>{this.props.text}</p>}
                <p>Verona at Parkbridge II by DR Horton. Conveniently located in Natomas Sacramento. 
                These 2020 build open, bright, and ready-to-move-in home is available for you.
                It features a unique floor plan with a 1932. 
                </p>
            </div>
        );
        }
    
}

export {Description};
