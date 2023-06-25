import React, { useEffect } from 'react';
import SignupForm from '../../components/auth/SignupForm';
import { useSelector } from 'react-redux';
import { selectSignup } from '../../redux/selectors/authSelector';
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {

  const navigate = useNavigate()
  const signUpData = useSelector(selectSignup)

  useEffect(() => {
    if (signUpData) {
      navigate('/signin')
    }
  }, [signUpData])

  return (
    <>
      <SignupForm />
    </>
  )
}

export default Signup;

