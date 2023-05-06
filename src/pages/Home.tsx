import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { Container } from 'react-bootstrap';
import { IdTokenData } from '../components/DataDisplay';
import HomeContent from '../components/home/Home';

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */
const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
        <>
            <AuthenticatedTemplate>
                {activeAccount ? (
                    <HomeContent/>
                ) : null}
            </AuthenticatedTemplate>
        </>
    );
}

export default Home