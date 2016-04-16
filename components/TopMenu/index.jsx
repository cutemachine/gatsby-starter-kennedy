import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import BlogNav from '../BlogNav'
import BlogSocial from '../BlogSocial'
import Button from '../Button'
import './style.sss'

class TopMenu extends React.Component {
    render() {
        const {location, children} = this.props
        return (
            <header className="top-navigation">
              <nav className="top-navigation__logo">
                <Link to={ prefixLink('/') }>
                  <img src='/images/logo.svg' />
                </Link>
              </nav>
              <nav className="top-navigation__menu">
                <Link to={prefixLink('/doodah/')} className={location.pathname === prefixLink('/Doodah/')?"top-navigation__item active":"top-navigation__item"}>Doodah</Link>
                <Link to={prefixLink('/blog/')} className={location.pathname === prefixLink('/blog/')?"top-navigation__item active":"top-navigation__item"}>Blog</Link>
              </nav>
              <nav className="top-navigation__button-middle">
                  <Button />
              </nav>
              <nav className="top-navigation__button-right">
                  <Button />
              </nav>
              <nav className="top-navigation__burger">
                <Link to={ prefixLink('/blog/') }>
                  <i className='fa fa-bars'></i>
                </Link>
              </nav>
            </header>
        )
    }
}

TopMenu.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default TopMenu
