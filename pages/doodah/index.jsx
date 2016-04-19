import React from 'react'
import DocumentTitle from 'react-document-title'
import TopMenu from '../../components/TopMenu'

class Doodah extends React.Component {
  render() {
    return (
      <DocumentTitle title="Doodah">
        <div>
          <TopMenu {...this.props}/>
          <div className='wrapper'>
            <div className='content'>
              <div className='main'>
                <div style={{marginTop: '100px'}} className='main-inner'>
                  <h2>Some words about your digital doodah</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default Doodah
