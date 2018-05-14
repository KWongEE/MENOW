import React from 'react'

const CatShow = (props) => {
  return(
    <div>
    <div className="catShow">
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div><br></br>
      <div>Cat Description: {props.description}</div><br></br>
      <div>Last seen: {props.location}</div><br></br>
      <div>Who found it?: {props.spotter}</div><br></br>
      <img src={props.image.url} />
  </div>
  )
}

export default CatShow
