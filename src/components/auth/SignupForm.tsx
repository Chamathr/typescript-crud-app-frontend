import React from 'react';
import { Form, Input, Button } from 'antd';
import { fetchSignup } from '../../redux/actions/authAction';
import { useDispatch } from 'react-redux';

const SignupForm = () => {

  const dispatch = useDispatch();

  const onFinish = (values: any) => {
    dispatch(fetchSignup(values))

  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  const buttonWrapperStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
  };

  return (
    <Form onFinish={onFinish} {...formItemLayout} style={{ paddingTop: "50px" }}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: 'Please input your age!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ span: 18 }}>
        <div style={buttonWrapperStyle}>
          <Button type="primary" htmlType="submit">
            Sign Up
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
