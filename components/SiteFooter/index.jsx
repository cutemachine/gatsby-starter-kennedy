import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import BlogNav from '../BlogNav'
import BlogSocial from '../BlogSocial'
import './style.sss'

class SiteFooter extends React.Component {
    render() {
        const {location, children} = this.props
        return (
                <Link to={ prefixLink('/blog/') }>
            <footer className="site-footer">
                  Early Bird Doodah > $50
            </footer>
                </Link>
        )
    }
}

SiteFooter.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
}

export default SiteFooter
