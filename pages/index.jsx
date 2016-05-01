import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment';
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import BlogPost from '../components/BlogPost'
import TopMenu from '../components/TopMenu'
import SiteFooter from '../components/SiteFooter'
import Button from '../components/Button'
import BlogContent from '../components/BlogContent'

class BlogIndex extends React.Component {
  render() {
    return (
      <DocumentTitle title={ config.siteTitle }>
        <div>
          <TopMenu {...this.props}/>
          <section className="hero">
            <h1 className="title">Look Ma, Digital Doodah</h1>
          </section>
          <section className="is">
            <img className="simg"
              src={prefixLink("/images/240x150.png")}
              srcset="/images/240x150.png 1x, /images/240x150@2x.png 2x"
              alt="Sample product image" />
            <img className="bimg"
              src={prefixLink("/images/470x290.png")}
              srcset="/images/470x290.png 1x, /images/470x290@2x.png 2x"
              alt="Sample product image" />
          </section>
          <div className='wrapper'>
            <div className='content'>
              <div className='main'>
                <div className='main-inner'>
                  <section className="social-proof">
                    <p>Use this Gatsby starter project to build a sales page for your digital doodah. You can host your website for free on surge.sh.</p>
                    <Button />
                  </section>
                </div>
              </div>
            </div>
          </div>
          <SiteFooter />
        </div>
      </DocumentTitle>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
