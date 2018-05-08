import React, { Component } from 'react'

class CatShowContainer extends Component {
  constructors(props){
    super(props)
    this.state = {
      user: '',
      cats:[]
    }
  }
  componentDidMount() {
    let catID = this.props.params.id
   fetch('api/v1/cats/${catID}')
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`
       }
     })
     .then(response => response.json())
     .then(body => {
       this.setState({

         cats: body
        })
        debugger;
     })
     .catch(error => console.error(`${error.message}`))
  }

  render(){
    return(<div>

    </div>)
  }
}
