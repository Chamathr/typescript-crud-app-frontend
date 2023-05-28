import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchSignin } from '../../redux/actions/authAction';

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

    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        dispatch(fetchSignin(values))
    };

    return (
        <Form onFinish={onFinish} {...formItemLayout} style={{ paddingTop: "50px" }}>
            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
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
                        Sign In
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );
};

export default SigninForm;
