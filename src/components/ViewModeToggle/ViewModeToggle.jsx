import React, { Component } from 'react'
import grid from "./grid.svg"
import list from "./list.svg"
import "./ViewModeToggle.css"
import Button from '../button/button'

export default class ViewModeToggle extends Component {
  render() {
    const { mode, onChange } = this.props;

    const modes = [
      { url: grid, mode: "grid" },
      { url: list, mode: "list" }
    ]
    return (
      <div className="view-mode">
        <p className="view-mode-text">View mode:</p>
        {modes.map((el) => (
          <Button key={el.mode} className={el.mode} handleClick={() => onChange(mode)} isDisabled={mode === el.mode}>
            <img className="pict" src={el.url} alt="ViewMode picture" />
          </Button>
        ))}
      </div>
    )
  }
}
