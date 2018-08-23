/**
 * perMsg: 个人信息
 */

import React, { Component } from 'react'
import { Table, Button, Modal } from 'antd'
import SearchForm from './sec-form'
import ModalForm from './mdl-form'

import { getTableData } from './network'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tableData: [],    // 表格数据
      modalTab: false,  // 模态框标识
    }

    this.tableColumns = [{
      dataIndex: "name",
      title: "用户"
    }, {
      dataIndex: "sex",
      title: "性别"
    }, {
      dataIndex: "birthday",
      title: "出生日期"
    }, {
      dataIndex: "area",
      title: "所在地区"
    }, {
      dataIndex: "phone",
      title: "手机号"
    }, {
      dataIndex: "email",
      title: "电子邮箱"
    }]
  }


  componentWillMount() {
    getTableData().then((data) => {
      let _data = data.data
      _data = _data.map((item, index) => {
        item.key = index + 1
        return item
      })
      this.setState({ tableData: _data })
    })
  }

  /**
   * 新增
   */
  handleAdd() {
    this.setState({
      modalTab: true
    })
  }

  render() {
    const { tableData } = this.state
    return (
      <div className="god-wrap">
        <SearchForm />
        <Button onClick={this.handleAdd.bind(this)}>新增</Button>
        <Table dataSource={tableData} columns={this.tableColumns}></Table>
        <Modal 
          visible={this.state.modalTab}
          onOk={() => {
            this.setState({ modalTab: false })
          }}
          onCancel={() => {
            this.setState({ modalTab: false })
          }}
        >
          <ModalForm />
        </Modal>
      </div>
    )
  }
}
