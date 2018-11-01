import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './goldButton.scss'

export type Props = {
  title: string,
  link: string,
}

export default class GoldButton extends Component<Props> {

  static defaultProps = {
    title: 'New Scorecard',
    link: '/new-scorecard/'
  }

  
  render () {
    return (
      <Link to={this.props.link} className='button gold'>
        {this.props.title}
      </Link>
    )
  }
}