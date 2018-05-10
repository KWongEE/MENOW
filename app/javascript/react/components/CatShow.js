import React from 'react'

const CatShow = (props) => {
  return(
    <div>
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div>
      <div>Cat Description: {props.description}</div>
      <div>Last seen: {props.location}</div>
      <div>Who found it?: {props.spotter}</div>
    </div>
  )
}

export default CatShow
