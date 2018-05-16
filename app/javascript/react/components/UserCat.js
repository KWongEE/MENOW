import React from 'react'

const UserCat = (props) => {
  return(
    <div>
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div>
      <div>Cat Description: {props.description}</div>
      <div>Last seen: {props.location}</div>
      <img src={props.image.url} width="350" height="263" />
    </div>
  )
}

export default UserCat
