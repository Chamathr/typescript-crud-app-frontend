import React from 'react';
import DataForm from '../../components/data/Form';
import { useParams } from 'react-router-dom';

const UpdateData: React.FC = () => {

  const { id } = useParams();

  return (
    <>
      <DataForm id={id} />
    </>
  )
}

export default UpdateData;

