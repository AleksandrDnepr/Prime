import { Component } from "react";
import "./subtitle.css";

class Subtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <h2 className="subtitle">
                {children}
            </h2>
        )
    }
}

export default Subtitle;