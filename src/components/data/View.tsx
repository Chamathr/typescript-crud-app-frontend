import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions/dataAction';
import { Table, Button } from 'antd';
import { useNavigate  } from 'react-router-dom';


const View = (props: any) => {

    const navigate = useNavigate ();
    
    const { dataList } = props
    const dataPerPage = 2

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber)
    };

    useEffect(() => {
        dispatch(fetchData(page))
    }, [page]);

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        {
            title: 'Actions',
            key: 'actions',
            render: (text: any, record: any) => (
                <>
                    <Button type="primary" onClick={() => console.log(record)}>
                        View Details
                    </Button>
                    <Button type="primary" onClick={() => console.log(record)} style={{marginLeft: '10px'}}>
                        Edit
                    </Button>
                    <Button type="primary" onClick={() => console.log(record)} style={{marginLeft: '10px'}}>
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
            <Button type="primary" style={{float: 'right'}} onClick={() => navigate('/data/add')}>
                Add Data
            </Button>
        </>
    )
}

export default View;