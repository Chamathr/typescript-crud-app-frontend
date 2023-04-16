import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData, fetchData, setDeleteData } from '../../redux/actions/dataAction';
import { Table, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { selectDeletedData } from '../../redux/selectors/dataSelector';

const DataTable = (props: any) => {

    const navigate = useNavigate();

    const deletedData = useSelector(selectDeletedData)

    const { dataList, setPage } = props
    const dataPerPage = 5

    const dispatch = useDispatch();

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber)
        
    };

    useEffect(() => {
        if (deletedData) {
            dispatch(setDeleteData(null))
            dispatch(fetchData(1))
        }
    }, [deletedData])

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Actions',
            key: 'actions',
            render: (text: any, record: any) => (
                <>
                    <Button type="primary" onClick={() => navigate(`/data/profile/${record._id}`)}>
                        View Details
                    </Button>
                    <Button type="primary" onClick={() => navigate(`/data/update/${record._id}`)} style={{ marginLeft: '10px' }}>
                        Edit
                    </Button>
                    <Button type="primary" onClick={() => dispatch(deleteData(record._id))} style={{ marginLeft: '10px' }}>
                        Delete
                    </Button>
                </>
            ),
        }
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataList?.data}
                pagination={{
                    total: dataList?.totalItems,
                    pageSize: dataPerPage,
                    pageSizeOptions: [5, 10, 20],
                    onChange: handlePageChange,
                }}
            />
            <Button type="primary" style={{ float: 'right' }} onClick={() => navigate('/data/add')}>
                Add Data
            </Button>
        </>
    )
}

export default DataTable;