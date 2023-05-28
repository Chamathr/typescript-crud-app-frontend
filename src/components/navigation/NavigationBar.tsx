import { Button, Menu, Row, Space } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dispatch, useSelector } from '../../redux/store';
import { setSignin } from '../../redux/actions/authAction';
import { selectSignin } from '../../redux/selectors/authSelector';
import { authApiInstance } from '../../http/apiInstance';

const NavigationBar = () => {

    const navigate = useNavigate();

    const token = useSelector(selectSignin)

    const handleSignin = () => {
        navigate('/signin')
    };

    const handleSignup = () => {
        navigate('/signup')
    };

    const handleSignout = () => {
        localStorage.removeItem('token');
        dispatch(setSignin(null))
        navigate('/')
    };


    const handleProfileEdit = () => {
    };

    return (
        <>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Space>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['about']}>
                        <Menu.Item key="about">
                            <Link to="/about">
                                About
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="data">
                            <Link to="/data/view">
                                Data
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Space>
                <Space style={{ alignSelf: "end" }}>
                    <Button type="primary" onClick={handleProfileEdit}>
                        Edit Profile
                    </Button>
                    {token ?
                        <Button type="primary" onClick={handleSignout} >
                            Sign Out
                        </Button>
                        :
                        <>
                            <Button type="primary" onClick={handleSignup}>
                                Sign Up
                            </Button>
                            <Button type="primary" onClick={handleSignin}>
                                Sign In
                            </Button>
                        </>
                    }
                </Space>
            </Row>
        </>
    );
};

export default NavigationBar
