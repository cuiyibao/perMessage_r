import React, { Component } from 'react';
import moment from 'moment'
import { Form, Input, Select, DatePicker } from 'antd';
import AntArea from '../../components/antArea'
 
const FormItem = Form.Item;
const Option = Select.Option

class ModalForm extends Component {

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="mod-form">
        <FormItem label="用户">
          {getFieldDecorator('user', {
            rules: [{ required: true, message: '请输入用户!' }],
          })(
            <Input type="text" placeholder="请输入" />
          )}
        </FormItem>
        <FormItem label="性别">
          {getFieldDecorator('sex', {
            rules: [{ required: true, message: '请选择性别!' }],
          })(
            <Select defaultValue="man" value="user">
              <Option value="man">男</Option>
              <Option value="woman">女</Option>
            </Select>
          )}
        </FormItem>
        <FormItem label="出生日期">
          {getFieldDecorator('birthday', {
            rules: [{ required: true, message: '请选择出生日期!' }],
          })(
            <DatePicker defaultValue={moment('2000/01/01')} />
          )}
        </FormItem>
        <FormItem label="所在城市">
          <AntArea placeholder="请输入" style={{ width: 160 }}/>
        </FormItem>
      </Form>
    );
  }
}
 
const phoneModal = Form.create()(ModalForm);
 
export default phoneModal;

