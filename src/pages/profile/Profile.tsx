import DataViewCard from '../../components/data/DataViewCard';
import { Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDataById } from '../../redux/actions/dataAction';
import { useParams } from 'react-router-dom';

const ProfileView = () => {

    const dispatch = useDispatch()

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchDataById(id))
    }, [])

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex', padding: '5rem' }}>
                <DataViewCard />
            </Space>
        </>
    );
};

export default ProfileView;