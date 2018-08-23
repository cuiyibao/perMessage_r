import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import AntArea from '../../components/antArea'

import './sec-form.less'

class ModalForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  handleSearch() {

  }

  handleSearch() {

  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form>
        <Form.Item label="用户">
          {getFieldDecorator('user', {
            rules: [{ required: true, message: '请输入要查找的用户!' }],
          })(
            <Input style={{ width: 160 }} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="请输入" />
          )}
        </Form.Item>
        <Form.Item label="所在城市">
          <AntArea placeholder="请输入" style={{ width: 160 }}/>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.handleSearch}
          >
           查找
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            onClick={this.handleEmpty}
          >
           重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
 
const searchForm = Form.create()(ModalForm);
 
export default searchForm;

