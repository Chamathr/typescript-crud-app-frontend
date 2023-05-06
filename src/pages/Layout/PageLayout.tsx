import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import NavigationBar from "../../components/navigation/NavigationBar";
import AuthRoutes from "../../routes/AuthRoutes";
import BasicRoutes from "../../routes/BasicRoutes";

const PageLayout = (props: any) => {
    return (
        <>
            <NavigationBar />
            <AuthenticatedTemplate>
                <AuthRoutes />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
                <BasicRoutes />
            </UnauthenticatedTemplate>
        </>
    );
}

export default PageLayout