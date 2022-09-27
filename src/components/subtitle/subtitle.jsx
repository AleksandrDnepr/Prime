import { Component } from "react";
import "./subtitle.css";

class Subtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <h1 className="subtitle">
                {children}
            </h1>
        )
    }
}

export {Subtitle};
