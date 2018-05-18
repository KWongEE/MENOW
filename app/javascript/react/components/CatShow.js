import React from 'react'
import { Link } from 'react-router'

const CatShow = (props) => {
  return(
    <div className="catTile">
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div><br></br>
      <div>Cat Description: {props.description}</div><br></br>
      <div>Last seen: {props.location}</div><br></br>
      <div>Who found it?: {props.spotter}</div><br></br>
      <img src={props.image.url} width="350" height="263" />
      <div>Have you seen this cat?</div>
      <a href={`/cats/${props.id}/edit`}>Update here!</a>
  </div>
  )
}

export default CatShow
