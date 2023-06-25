import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigationHook = (initialValue: any) => {

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const navigate = useNavigate()
    navigate(initialValue)
    // Clean up any resources if necessary
    return () => {
      console.log('Custom hook cleanup');
    };
  }, []); // Empty dependency array to run the effect only once

  // Expose the value and a function to update the value
  return [value, setValue];
};

export default useNavigationHook;