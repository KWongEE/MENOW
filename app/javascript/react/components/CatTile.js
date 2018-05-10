import React from 'react'
import { Link } from 'react-router'

const CatTile = (props) => {
  return(
    <div className="catTile">
  <Link to={`/cats/${props.id}`}>
    <div>{props.name}</div>
    <div>{props.description}</div>
    <div>{props.location}</div>
  </Link>
  </div>
  )
}

export default CatTile
