import React, { Component } from 'react'

import FSLogo from '../Icons/logo';
import NavigationButton from './NavigationButton/navigationButton'
import GoldButton from './GoldButton/goldButton'
import IconProfile from '../Icons/iconProfile'

import './header.scss'

export default class Header extends Component {

  render() {

    const logo = <FSLogo />
    const profileIcon = <IconProfile />

    return <div className='header'>
    <div className='logo'>{ logo }</div>
      <ul>
        <li><GoldButton /></li>
        <li><NavigationButton title='Scorecards' link='/scorecards/' /></li>
        <li><NavigationButton title='Profile' link='/profile/' icon={profileIcon} /></li>
      </ul>
    </div>
  }
}