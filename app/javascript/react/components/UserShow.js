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
      <div>Username: {props.username}</div>
      <div>Email: {props.email}</div>
      <img src={props.avatar.url} width="350" height="263" />
    </div>
  )
}
}

export default UserShow
