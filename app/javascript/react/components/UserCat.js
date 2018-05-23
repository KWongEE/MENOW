import React from 'react'

const UserCat = (props) => {
  return(
    <div className="userpageCatTile">
      <img className="userpageCatimage" src={props.image.url} width="350" height="263" />
      <span className="userpageCatinfo">
      <div>Cat Name ฅ(*ΦωΦ*)ฅ: {props.name}</div>
      <div>Cat Description: {props.description}</div>
      <div>Last seen: {props.location}</div>
    </span>
    </div>
  )
}

export default UserCat
