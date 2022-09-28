import { Component } from "react";
import "./subtitle.css";

class Subtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1 className="subtitle">
                {/* {this.props.subtitle} */}
                Floor plans
            </h1>
        )
    }
}

export {Subtitle};
