import DataViewCard from '../../components/data/DataViewCard';
import { Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDataById } from '../../redux/selectors/dataSelector';
import { fetchDataById } from '../../redux/actions/dataAction';
import { connect } from "react-redux";
import { useParams } from 'react-router-dom';

const ProfileView = () => {

    const dispatch = useDispatch()
    const dataById = useSelector(selectDataById)

    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchDataById(id))
    }, [])

    return (
        <>
            <Space direction="vertical" size="middle" style={{ display: 'flex', padding: '5rem' }}>
                <DataViewCard data={dataById} />
            </Space>
        </>
    );
};

export default connect(
    fetchDataById
)(ProfileView);