import React, { useEffect } from 'react';
import SigninForm from '../../components/auth/SigninForm';
import { useSelector } from 'react-redux';
import { selectSignin } from '../../redux/selectors/authSelector';
import { useNavigate } from 'react-router-dom';
import { apiInstance } from '../../http/apiInstance';

const Signin: React.FC = () => {

    const navigate = useNavigate()
    const token = useSelector(selectSignin)

    useEffect(() => {
        if (token) {
            apiInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            navigate('/')
        }
    }, [token])

    return (
        <>
            <SigninForm />
        </>
    )
}

export default Signin;

