import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import moment from 'moment';
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import BlogPost from '../../components/BlogPost'
import TopMenu from '../../components/TopMenu'
import BlogContent from '../../components/BlogContent'

class BlogIndex extends React.Component {
    render() {
        const pageLinks = []
        // Sort pages.
        const sortedPages = sortBy(this.props.route.pages, (page) => access(page, 'data.date')
        ).reverse()
        sortedPages.forEach((page) => {
            if (access(page, 'file.ext') === 'md' && access(page, 'data.layout') === 'post') {
                const title = access(page, 'data.title') || page.path
                const description = access(page, 'data.description')
                const datePublished = access(page, 'data.date')
                const category = access(page, 'data.category')

                pageLinks.push(
                    <div className='blog-post'>
                      <time dateTime={ moment(datePublished).format('MMMM D, YYYY') }>
                        { moment(datePublished).format('MMMM YYYY') }
                      </time>
                      <span style={ {    padding: '5px'} }></span>
                      <span className='blog-category'>{ category }</span>
                      <h2><Link style={ {    borderBottom: 'none',} } to={ prefixLink(page.path) } > { title } </Link></h2>
                      <p dangerouslySetInnerHTML={ {    __html: description} } />
                      <Link className='readmore' to={ prefixLink(page.path) }> Read
                      </Link>
                    </div>
                )
            }
        })

        return (
            <DocumentTitle title={ config.siteTitle }>
              <div>
              <TopMenu {...this.props}/>
              <div className='wrapper'>
                <div className='content'>
                  <div className='main'>
                    <div className='main-inner'>
                      <h1>The Digital Doodah Blog</h1>
                      { pageLinks }
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </DocumentTitle>
        )
    }
}

BlogIndex.propTypes = {
    route: React.PropTypes.object,
}

export default BlogIndex
