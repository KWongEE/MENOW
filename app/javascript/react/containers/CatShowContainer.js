import React, { Component } from 'react'
import CatShow from '../components/CatShow'


class CatShowContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      cats:[]
    }
  }
  componentDidMount() {
    let catID = this.props.params.id
   fetch(`/api/v1/cats/${catID}`)
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`
       }
     })
     .then(response => response.json())
     .then(body => {
       this.setState({ cats: body })
     })
     .catch(error => console.error(`${error.message}`))
  }

  render(){
    return(<div>
      <CatShow
        key={this.state.cats.id}
        id={this.state.cats.id}
        name={this.state.cats.name}
        description={this.state.cats.description}
        location={this.state.cats.location}
        spotter={this.state.cats.spotter}
      />
    </div>)
  }
}

export default CatShowContainer