import { Form, Input, Button } from 'antd';

const SigninForm = () => {

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

    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    return (
        <Form onFinish={onFinish} {...formItemLayout} style={{ paddingTop: "50px" }}>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
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

export default SigninForm;
