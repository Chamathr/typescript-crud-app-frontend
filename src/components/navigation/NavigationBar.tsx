import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionStatus } from "@azure/msal-browser";
import { loginRequest, b2cPolicies } from '../../auth/b2cAuth';
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
                        <Button type="primary" onClick={handleLogout} >
                            Sign Out
                        </Button>
                    </Space>
                </Row>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <Space style={{ display: "flex", justifyContent: "end" }}>
                    <Button type="primary" onClick={handleLogin}>
                        Sign In
                    </Button>
                </Space>
            </UnauthenticatedTemplate>
        </>
    );
};

export default NavigationBar
