import React, { Component } from 'react'
import Select from 'react-select'
import "./dropDown.css"

export default class DropDown extends Component {
    state = {
        currentProperty: this.props.value
    };

    render() {

        const getValue = () => {
            return this.state.currentProperty ? options.find(selected => selected.value === this.state.currentProperty) : ''
        }

        const changeValue = (selected, e) => {
            if (e.action === 'clear') {
                this.setState({ currentProperty: '' })
                this.props.onChange(undefined)
            }
            else {
                this.setState({ currentProperty: selected.value })
                this.props.onChange(selected.value)
            }
        }

        const { options, placeholder} = this.props;

        return <div className='dropdown-input'>
                <Select
                    placeholder={placeholder}
                    onChange={changeValue}
                    value={getValue()}
                    options={options}
                    isClearable
                 />
            </div>
    }
}
