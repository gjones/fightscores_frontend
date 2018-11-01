import React, { Component, Fragment } from 'react'

import '../../../assets/styles/titles.scss'

export default class NewScorecard extends Component {

  componentDidMount(){
    document.title = "New Scorecard"
  }

  render() {
    return (
      <Fragment>
        <h1 className='page-title'>New Scorecards</h1>
        <p>New Scorecards will appear here</p> 
      </Fragment>
    )
  }
}