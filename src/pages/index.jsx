import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

export const flats = [
  {id: "1", city: "Kuiv", rooms: "3"},
  {id: "2", city: "Odessa", rooms: "2"},
  {id: "3", city: "Lviv", rooms: "1"},
]

class Index extends Component {
  render() {
    return (
      <>
      <Link to="/component_gallery">component gallery</Link> 
      <ul>
      {flats.map((item) => {
        return <li key={item.id}><Link to={`/properties/${item.id}`}>{item.city}</Link></li>
        })}
      </ul>
      <Link to="/foo">foo</Link> 
      <Link to="/bar">bar</Link> 
      <Link to="/baz">baz</Link>  
      </>
    )
  }
}

export default withRouter(Index)