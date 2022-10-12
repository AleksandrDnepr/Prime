import { Component } from "react";
import "./input.css";

export default class Input extends Component{
    render(){
        const {type, value, placeholder, onChange} = this.props;
        return(
            <Input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />

        )
    }
}