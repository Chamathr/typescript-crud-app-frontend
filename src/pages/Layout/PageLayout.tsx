import { useState } from "react";
import NavigationBar from "../../components/navigation/NavigationBar";
import AuthRoutes from "../../routes/AuthRoutes";
import BasicRoutes from "../../routes/BasicRoutes";
import { Layout, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const PageLayout = (props: any) => {
    
    const token = localStorage.getItem('token')

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout>
                <Header className="header">
                    <NavigationBar />
                </Header>
                <Layout>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                                height: "100vh"
                            }}
                        >
                            {token ? <AuthRoutes /> : null}
                            <BasicRoutes />
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default PageLayout