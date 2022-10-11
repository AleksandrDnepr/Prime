import { Component } from "react";
import "./subtitle.css";

class Subtitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <section className="subtitle">
                <h3 className="subtitle__text">
                    {children}
                </h3>
            </section>
        )
    }
}

export default Subtitle;