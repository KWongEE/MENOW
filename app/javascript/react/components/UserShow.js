import React from 'react'

const UserShow = (props) => {
  if (props.avatar.url == null) {
    return (
      <div>
      </div>
    )
  }
  else{
  return(
    <div className="userShowTile">
      <img className="userpageImage" src={props.avatar.url} width="350" height="263" />
      <div className="userpageInfo">
      <div className="userpagename">Username: {props.username}</div>
      <div>Email: {props.email}</div>
      </div>
    </div>
  )
}
}

export default UserShow
