/**
 * main: 内容
 */

import React, { Component } from 'react'


export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }


  componentDidMount() {
  }

  render() {
    const { content } = this.props
    
    return (
      <div className="main-wrap">
        <div className="title">{content.props.route.title}</div>
        <div className="main-content">{content}</div>
      </div>
    )
  }
}
