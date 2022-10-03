import { Component } from 'react';
import './description.css';

class Description extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="text_description">
                <p>{children}</p>
                
            </div>
        );
        }
    
}

export default Description;
