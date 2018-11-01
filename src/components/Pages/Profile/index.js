import React, { Component, Fragment } from 'react'

export default class Profile extends Component {

  componentDidMount(){
    document.title = "Profile page"
  }

  render() {
    return (
      <Fragment>
        <h1 className='page-title'>Your Profile</h1>
        <p>Profile will appear here</p> 
      </Fragment>
    )
  }
}