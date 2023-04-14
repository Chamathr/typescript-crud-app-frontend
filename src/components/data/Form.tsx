import React from 'react';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addData, fetchData, setAddData } from '../../redux/actions/dataAction';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DataForm = (props: any) => {

    const { addedData } = props

    const navigate = useNavigate()

    useEffect(() => {
        if(addedData){
            navigate('/data/view')
            dispatch(setAddData(null))
            dispatch(fetchData(1))
        }
    }, [addedData])

    const dispatch = useDispatch()

    const onFinish = (values: any) => {
        dispatch(addData(values))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Container style={{ margin: 'auto', paddingTop: '2rem' }}>
                <Card style={{ margin: 'auto', paddingTop: '2rem' }}>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please input your Email!' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            label="Age"
                            name="age"
                            rules={[{ required: true, message: 'Please input your Age!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Container>
        </>
    )
}

export default DataForm;

