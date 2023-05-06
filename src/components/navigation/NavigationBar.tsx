import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest, b2cPolicies } from '../../auth/auth';
import { Button, Menu, Row, Space } from 'antd';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    const { instance, inProgress } = useMsal();
    let activeAccount;

    if (instance) {
        activeAccount = instance.getActiveAccount();
    }

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch((error) => console.log(error));
    };

    const handleLogout = () => {
        instance.logoutRedirect();
    };


    const handleProfileEdit = () => {
        if (inProgress === InteractionStatus.None) {
            instance.acquireTokenRedirect(b2cPolicies.authorities.editProfile);
        }
    };

    return (
        <>
            <AuthenticatedTemplate>
                <Row style={{ display: "flex", justifyContent: "space-between" }}>
                    <Space>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                            <Menu.Item key="home">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <a href="/about">
                                    About
                                </a>
                            </Menu.Item>
                            <Menu.Item key="data">
                                <a href="/data/view">
                                    Data
                                </a>
                            </Menu.Item>
                        </Menu>
                        {/* <Link to="/home">
                        Home
                    </Link>
                    <Link to="/about">
                        About
                    </Link>
                    <Link to="/data/view">
                        Data
                    </Link> */}
                    </Space>
                    <Space>
                        <Button type="primary" onClick={handleProfileEdit}>
                            Edit Profile
                        </Button>
                        <Button type="primary" onClick={handleLogout} >
                            Sign Out
                        </Button>
                    </Space>
                </Row>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Button onClick={handleLogin}>
                    Sign In
                </Button>
            </UnauthenticatedTemplate>
        </>
    );
};

export default NavigationBar
