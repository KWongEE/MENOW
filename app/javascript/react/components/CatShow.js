import React from 'react'

const CatShow = (props) => {
  return(
    <div>
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div>
      <div>Cat Description: {props.description}</div>
      <div>Last seen: {props.location}</div>
      <div>Who found it?: {props.spotter}</div>
      <img src={props.image.url} />
    </div>
  )
}

export default CatShow
