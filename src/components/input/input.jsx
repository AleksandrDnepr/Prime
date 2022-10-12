import { Component } from "react";
import "./input.css";

export default class Input extends Component {
    state = {
        currentValue: this.props.value,
        onFocusValue: "",
    };

    convertValueType() {
        const { type, value } = this.props;

        switch (type) {
        case "number":
            return Number(value);
        case "text":
            return String(value);
        default:
            return null;
        }
    }

    changeValue(e) {
        this.setState({ currentValue: e.target.value });
    }

    fireAction() {
        const { onFocusValue, currentValue } = this.state;
        if (currentValue !== onFocusValue) {
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
            onFocus={(e) => this.setState({ onFocusValue: e.target.value })}
            onBlur={() => this.fireAction()}
            autoComplete="off"
            className="search-input"
        />
    }
}
