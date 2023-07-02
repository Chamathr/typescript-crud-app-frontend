import { Button, Menu, Row, Space } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dispatch, useSelector } from '../../redux/store';
import { setSignin } from '../../redux/actions/authAction';
import { selectSignin } from '../../redux/selectors/authSelector';
import { apiInstance } from '../../http/apiInstance';
import { resetStore } from '../../redux/actions/dataAction';
import { getAccessToken, removeAccessToken } from '../../utils/Jwt';

const NavigationBar = () => {

    const navigate = useNavigate();

    const token = useSelector(selectSignin) || getAccessToken()

    const handleSignin = () => {
        navigate('/signin')
    };

    const handleSignup = () => {
        navigate('/signup')
    };

    const handleSignout = () => {
        removeAccessToken()
        dispatch(setSignin({ payload: null }))
        dispatch(resetStore())
        navigate('/signin')
    };


    const handleProfileEdit = () => {
    };

    return (
        <>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Space>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                        <Menu.Item key="home">
                            <Link to="/">
                                Home
                            </Link>
                        </Menu.Item>
                        {token ?
                            <Menu.Item key="data">
                                <Link to="/data/view">
                                    Data
                                </Link>
                            </Menu.Item>
                            :
                            null
                        }
                        <Menu.Item key="about">
                            <Link to="/about">
                                About
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Space>
                <Space style={{ alignSelf: "end" }}>
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
