import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './navigationButton.scss'

import IconScorecard from '../../Icons/iconScorecard'

export type Props = {
  icon: any,
  title: string,
  link: string,
}

export default class NavigationButton extends Component<Props> {

  state = {
    isSelected: false
  }

  static defaultProps = {
    icon: <IconScorecard />,
    title: 'Scorecards',
    link: '/scorecards'
  }

  
  render () {
    return (
      <Link to={this.props.link} className='navigation-button'>
          <div className='icon'>      
            {this.props.icon}
          </div>
          <div className='title'>
            {this.props.title}
          </div>
      </Link>
    )
  }
}