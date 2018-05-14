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
    <div>
      <div>Your Name: {props.username}</div>
      <div>Email: {props.email}</div>
      <img src={props.avatar.url} />
    </div>
  )
}
}

export default UserShow
