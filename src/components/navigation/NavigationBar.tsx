import { Button, Menu, Row, Space } from 'antd';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const handleLogin = () => {
    };

    const handleLogout = () => {
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
                    <Button type="primary" onClick={handleLogout} >
                        Sign Out
                    </Button>
                </Space>
            </Row>
            <Space style={{ display: "flex", justifyContent: "end" }}>
                <Button type="primary" onClick={handleLogin}>
                    Sign In
                </Button>
            </Space>
        </>
    );
};

export default NavigationBar
