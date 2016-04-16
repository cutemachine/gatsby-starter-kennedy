import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import BlogNav from '../BlogNav'
import BlogSocial from '../BlogSocial'
import './style.sss'

class Button extends React.Component {
    render() {
        const {location, children} = this.props
        return (
          <Link className="button small flash" to={ prefixLink('/doodah/') }>
            Doodah
          </Link>
        )
    }
}

Button.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default Button
