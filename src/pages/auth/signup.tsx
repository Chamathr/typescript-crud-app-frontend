import React from 'react';
import SignupForm from '../../components/auth/SignupForm';
import { useSelector } from 'react-redux';
import { selectAddedData } from '../../redux/selectors/dataSelector';

const Signup: React.FC = () => {

//   const addedData = useSelector(selectAddedData)

  return (
    <>
      <SignupForm />
    </>
  )
}

export default Signup;

