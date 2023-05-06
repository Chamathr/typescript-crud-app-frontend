import React from 'react';
import DataForm from '../../components/data/Form';
import { useSelector } from 'react-redux';
import { selectAddedData } from '../../redux/selectors/dataSelector';

const AddData: React.FC = () => {

  const addedData = useSelector(selectAddedData)

  return (
    <>
      <DataForm changedData={addedData} id={null} />
    </>
  )
}

export default AddData;

