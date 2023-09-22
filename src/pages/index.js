import React, {Component} from 'react'

import data from '../resource/data.json'

class Index extends Component {
  constructor (props) {
    super(props)
    // this.getJsonData()
    this.state = {
      selectedFilePath: null,
      selectedMessage: null,
      jsonData: null,
    }
  }

  handleFileClick (filePath, message, ev) {
    // 由于绑定的事件同名，需要阻止冒泡
    ev.stopPropagation()
    this.setState({
      selectedFilePath: filePath,
      selectedMessage: message,
    })
  }

  renderFileTree (data) {
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index} onClick={(ev) => this.handleFileClick(item.filePath, item.message, ev)}>
            {item.filePath}
            {item.childReportMsg && this.renderFileTree(item.childReportMsg)}
          </li>
        ))}
      </ul>
    )
  }

  render () {
    return (
      <div>
        <div className='left-panel'>{this.renderFileTree(data.msg)}</div>
        <div className='right-panel'>
          {this.state.selectedFilePath && (
            <div>
              <h2>{this.state.selectedFilePath}</h2>
              <p>{this.state.selectedMessage}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Index
