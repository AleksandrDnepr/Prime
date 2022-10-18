import { Component } from "react";
import "./input.css";

export class Input extends Component {
    state = {
        startValue: this.props.value,
        currentValue: this.props.value,
    };

    changeValue = (e) => {
        const { type } = this.props;
        let value = e.target.value;

        if (type === "number") { value = Number(value) };

        switch (e.type) {
            case "focus":
                this.setState({ startValue: value });
                break;

            case "change":
                this.setState({ currentValue: value });
                break;

            default: return;
        }
    }

    handleBlur = () => {
        const { startValue, currentValue } = this.state;
        const { name, onChange } = this.props;
        if (currentValue !== startValue) {
            onChange(name, currentValue);
        }
    }

    render() {
        const { type, name, placeholder, size, children } = this.props;
        const { currentValue } = this.state;

        return <label>
                    {children}
                    <input
                    type={type}
                    name={name}
                    id={name}
                    value={currentValue}
                    placeholder={placeholder}
                    onChange={this.changeValue}
                    onFocus={this.changeValue}
                    onBlur={this.handleBlur}
                    autoComplete="off"
                    className={`input input_${size}`}
                />
            </label>
    }
}

