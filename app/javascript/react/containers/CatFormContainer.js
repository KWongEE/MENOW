import React, { Component } from 'react'
import TextField from '../components/TextField'
import { browserHistory, withRouter } from 'react-router'

class CatFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      location: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.addCat = this.addCat.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ title: "", description: "", location: "" })
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value })
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
    })
  }

  handleFormSubmit(event) {
  event.preventDefault();
    if(this.state.title.trim() != '' && this.state.description.trim() != '' && this.state.location.trim() != '') {
      let formPayload = {
        cats: {
          title: this.state.title,
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
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div>
      <form className="new-cat-form callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.title}
          label="title"
          name="title"
          handlerFunction={this.handleTitleChange}
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
