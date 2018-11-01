import React, { Component, Fragment } from 'react'

export default class Scorecards extends Component {

  componentDidMount(){
    document.title = "Scorecards page"
  }

  render() {
    return (
      <Fragment>
        <h1 className='page-title'>Your Scorecards</h1>
        <p>Scorecards will appear here</p> 
      </Fragment>
    )
  }
}