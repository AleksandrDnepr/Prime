import { Component } from 'react';
import './description.css';

class Description extends Component {
    constructor(props) {
        super (props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="description">
                <p className="description__text">{children}</p>                
            </div>
        );
        }
    
}

export default Description;
