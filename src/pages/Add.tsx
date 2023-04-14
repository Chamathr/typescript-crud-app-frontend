import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import DataForm from '../components/data/Form';
import { useSelector } from 'react-redux';
import { selectAddedData } from '../redux/selectors/dataSelector';

const AddData: React.FC = () => {

  const addedData = useSelector(selectAddedData)

  return (
    <>
      <DataForm addedData={addedData} />
    </>
  )
}

export default AddData;

