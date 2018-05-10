import React, { Component } from 'react'
import CatTile from '../components/CatTile'


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
       this.setState({ cats: body })
     })
     .catch(error => console.error(`${error.message}`))
  }

  render() {
    if (this.state.cats.length == 0){
      return(<div></div>)
      }
    else{
      let cats = this.state.cats.map(cat =>{
        return(
    <CatTile
      key={cat.id}
      id={cat.id}
      name={cat.name}
      description={cat.description}
      location={cat.location}
    />
        );
      })
      return(<div>{cats}</div>)
    }
  }
}

export default CatsIndexContainer
