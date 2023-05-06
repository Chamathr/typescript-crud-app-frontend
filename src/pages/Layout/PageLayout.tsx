import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import NavigationBar from "../../components/navigation/NavigationBar";
import AuthRoutes from "../../routes/AuthRoutes";
import BasicRoutes from "../../routes/BasicRoutes";
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const PageLayout = (props: any) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <Layout>
                <Header className="header">
                    <div className="logo" />
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
                            <AuthenticatedTemplate>
                                <AuthRoutes />
                            </AuthenticatedTemplate>
                            <UnauthenticatedTemplate>
                                <BasicRoutes />
                            </UnauthenticatedTemplate>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default PageLayout