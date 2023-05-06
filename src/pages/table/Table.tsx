import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/dataAction";
import { connect } from "react-redux";
import { selectDataList } from "../../redux/selectors/dataSelector";
import DataTable from "../../components/data/Table";
import { Card } from "@mui/material";

const Table = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList)
    const [page, setPage] = useState(1)

    const getPage = (e: any) => {
        setPage(e)
    }

    useEffect(() => {
        dispatch(fetchData(page))
    }, [page])

    return (
        <>
            <Card sx={{ padding: '5rem', height: '100vh' }}>
                <DataTable dataList={dataList} setPage={getPage} />
            </Card>
        </>
    )
}

export default connect(
    fetchData
)(Table);