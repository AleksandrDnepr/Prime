import { Component } from "react";
import "./input.css";

export default class Input extends Component{
    render(){
        const {} = this.props;
        return(
            <Input
                type="number"
                value={42}
                placeholder="Price..."
                onChange={(value) => console.log(`Value changed to ${value}`)}
            />

        )
    }
}