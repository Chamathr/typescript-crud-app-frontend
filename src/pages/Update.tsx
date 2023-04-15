import React from 'react';
import DataForm from '../components/data/Form';
import { useSelector } from 'react-redux';
import { selectUpdatedData } from '../redux/selectors/dataSelector';
import { useParams } from 'react-router-dom';

const UpdateData: React.FC = () => {

  const updatedData = useSelector(selectUpdatedData)

  const { id } = useParams();

  return (
    <>
      <DataForm changedData={updatedData} id={id} />
    </>
  )
}

export default UpdateData;

