import React, { Component } from 'react'
import { ReactComponent as GridIcon } from "./grid.svg"
import { ReactComponent as ListIcon } from "./list.svg"
import "./ViewModeToggle.css"
import Button from '../button/button'

export default class ViewModeToggle extends Component {
  render() {
    const { mode, onChange } = this.props;
    return (
      <div className="view-mode">
        <p className="view-mode-text">View mode:</p>
        <Button className="for-grid-button" handleClick={() => onChange(mode)} isDisabled={mode === "grid"}><GridIcon className='btn-icon' /> </Button>
        <Button className="for-list-button" handleClick={() => onChange(mode)} isDisabled={mode === "list"}><ListIcon className='btn-icon' /> </Button>
      </div>
    )
  }
}