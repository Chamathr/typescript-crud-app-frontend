import React from 'react';
import { Button, Card, Checkbox, Form, Input } from 'antd';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addData, fetchData, fetchDataById, setAddData, setGetDataById, setUpdateData, updateData } from '../../redux/actions/dataAction';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAddedData, selectDataById, selectUpdatedData } from '../../redux/selectors/dataSelector';

const DataForm = (props: any) => {

    const { id } = props

    const existingData = useSelector(selectDataById)
    const updatedData = useSelector(selectUpdatedData)
    const addedData = useSelector(selectAddedData)

    const changedData = id ? updatedData : addedData

    const defaultValues = {
        name: existingData?.name || '',
        email: existingData?.email || '',
        age: existingData?.age || ''
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchDataById(id))
        }
    }, [])

    const navigate = useNavigate()

    useEffect(() => {
        if (changedData) {
            if (id) {
                dispatch(setGetDataById(null))
                dispatch(setUpdateData(null))
            }
            else {
                dispatch(setAddData(null))
            }
            dispatch(fetchData(1))
            navigate('/data/view')
        }
    }, [changedData])

    const dispatch = useDispatch()

    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue(defaultValues)
    }, [form, defaultValues])

    const onFinish = (values: any) => {
        if (id) {
            const { email, ...dataBody } = values
            dispatch(updateData({ id: id, payload: dataBody }))
        }
        else {
            dispatch(addData(values))
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Container style={{ margin: 'auto', paddingTop: '2rem' }}>
                <Card style={{ margin: 'auto', paddingTop: '2rem' }}>
                    <Form
                        form={form}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={defaultValues}
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
                            <Input disabled={id} />
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

