import React, { Component } from 'react'
import UserShow from '../components/UserShow'
import UserCat from '../components/UserCat'


class UserShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: [],
      cats:[]
    }
  }
  componentDidMount() {
    let userID = this.props.params.id
   fetch(`/api/v1/users/${userID}`)
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`
       }
     })
     .then(response => response.json())
     .then(body => {
       this.setState({ user: body, cats: body.cats })
     })
     .catch(error => console.error(`${error.message}`))
  }

  render(){
    if(this.state.user.length != 0) {
    let cats = this.state.cats.map(cat => {
      return(
        <UserCat
          key={cat.id}
          id={cat.id}
          name={cat.name}
          description={cat.description}
          location={cat.location}
          image={cat.image}
        />
      )
    })

    return(<div>
      <UserShow
        key={this.state.user.id}
        id={this.state.user.id}
        email={this.state.user.email}
        avatar={this.state.user.avatar}
        username={this.state.user.username}
      />
      <br></br>
      <br></br>
      <div>{cats}</div>
    </div>)
  }else{
    return(
      <div></div>
    )
    }
  }
}

export default UserShowContainer
