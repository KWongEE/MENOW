import React, { Component } from 'react'

class CatsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats:[]
    }
  }

  componentDidMount() {
   fetch('api/v1/cats')
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
     })
     .catch(error => console.error(`${error.message}`))
  }

  render() {
    return(
     <div>

     </div>
   )
  }
}

export default CatsIndexContainer
