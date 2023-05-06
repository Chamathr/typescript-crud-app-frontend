import { AuthenticatedTemplate } from "@azure/msal-react";
import NavigationBar from "../../components/navigation/NavigationBar";
import ProjectRoutes from "../../routes/Routes";

const PageLayout = (props: any) => {
    return (
        <>
            <NavigationBar />
            <AuthenticatedTemplate>
                <ProjectRoutes />
            </AuthenticatedTemplate>
        </>
    );
}

export default PageLayout