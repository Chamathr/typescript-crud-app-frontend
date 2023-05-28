import React from 'react';
import SigninForm from '../../components/auth/SigninForm';
import { useSelector } from 'react-redux';
import { selectAddedData } from '../../redux/selectors/dataSelector';

const Signin: React.FC = () => {

//   const addedData = useSelector(selectAddedData)

  return (
    <>
      <SigninForm />
    </>
  )
}

export default Signin;

