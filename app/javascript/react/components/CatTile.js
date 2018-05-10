import React from 'react'
import { Link } from 'react-router'

const CatTile = (props) => {
  return(
    <div className="catTile">
    <div>{props.name}</div>
    <div>{props.description}</div>
    <div>{props.location}</div>
  </div>
  )
}

export default CatTile
