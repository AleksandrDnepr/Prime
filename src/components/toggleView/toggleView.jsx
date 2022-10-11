import React, { Component } from 'react'
import { ReactComponent as GridIcon } from "./grid.svg"
import { ReactComponent as ListIcon } from "./list.svg"
import "./toggleView.css"
import Button from '../button/button'

export default class ToggleView extends Component {
  render() {
    const { mode, onChange } = this.props;
    return (
      <div className="toggle-view">
        <p className="toggle-view__text">View mode:</p>
        <Button className="toggle-view__button_grid button" handleClick={() => onChange(mode)} isDisabled={mode === "grid"}><GridIcon className="button__icon" /> </Button>
        <Button className="toggle-view__button_list button" handleClick={() => onChange(mode)} isDisabled={mode === "list"}><ListIcon className="button__icon" /> </Button>
      </div>
    )
  }
}
