/**
 * antArea: 地区下拉框
 */

import React, { Component } from 'react'
import { Cascader } from 'antd'

import { options } from './data'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Cascader {...this.props} options={options}/>
    )
  }
}
