import { Component } from "react";
import "./input.css";

export default class Input extends Component {
    state = {
        startValue: null,
        currentValue: this.props.value,
    };

    changeValue(e) {
        const { type } = this.props;
        let value = e.target.value;
        if (type === "number") { value = Number(value) };

        this.setState({ currentValue: value });
    }

    handleFocus(e) {
        const { type } = this.props;
        let value = e.target.value;
        if (type === "number") { value = Number(value) };

        this.setState({ startValue: value })
    }

    handleBlur = () => {
        const { startValue, currentValue } = this.state;
        if (currentValue !== startValue) {
            this.props.onChange(currentValue);
        }
    }

    render() {
        const { type, name, placeholder } = this.props;
        const { currentValue } = this.state;

        return <input
            type={type}
            name={name}
            value={currentValue}
            placeholder={placeholder}
            onChange={(e) => this.changeValue(e)}
            onFocus={(e) => this.handleFocus(e)}
            onBlur={this.handleBlur}
            autoComplete="off"
            className="input"
        />
    }
}
