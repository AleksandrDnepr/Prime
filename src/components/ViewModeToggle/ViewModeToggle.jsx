import React, { Component } from 'react'
import grid from"./grid.svg"
import list from"./list.svg"
import "./ViewModeToggle.css"


export default class ViewModeToggle extends Component {
  render() {
    
    const modes = [
        {url:grid, mode:"grid", className:"grid"},
        {url:list, mode:"list", className:"list"}
    ]
    return (
        <div className="view-mode">
        <p>View Mode:</p>
        {modes.map((el) => (
            
            <button 
                className={el.className} 
                mode={el.mode}
                >
                <img src={el.url} />

            </button>)
        )}
    </div>

    )
  }
}
