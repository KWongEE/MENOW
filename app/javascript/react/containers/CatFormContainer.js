import React, { Component } from 'react'
import TextField from '../components/TextField'
import { browserHistory, withRouter } from 'react-router'

class CatFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      location: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.addCat = this.addCat.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ name: "", description: "", location: "" })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value })
  }

  addCat(submission) {
    fetch(`/api/v1/cats`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    }).then( ()=> {
      browserHistory.push('/')
    })
  }

  handleFormSubmit(event) {
  event.preventDefault();
    if(this.state.name.trim() != '' && this.state.description.trim() != '' && this.state.location.trim() != '') {
      let formPayload = {
        cats: {
          name: this.state.name,
          description: this.state.description,
          location: this.state.location
        }
      }
      this.addCat(formPayload)
    } else {
      alert("Fill out the fields!")
    }
}

  render() {
    return(
      <div>
      <form className="new-cat-form callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.name}
          label="name"
          name="name"
          handlerFunction={this.handleNameChange}
        />
        <TextField
          content={this.state.description}
          label="description"
          name="description"
          handlerFunction={this.handleDescriptionChange}
        />
        <TextField
          content={this.state.location}
          label="location"
          name="location"
          handlerFunction={this.handleLocationChange}
        />

        <div className="button-group">
        <button className="button" onClick={this.handleClearForm}>Clear</button>
        <button className="button"  onClick={this.handleFormSubmit}>Submit</button>
      </div>
    </form>
  </div>
    )
  }
}

export default CatFormContainer;
