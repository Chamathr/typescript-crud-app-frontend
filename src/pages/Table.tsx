import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import { selectDataList } from "../redux/selectors/dataSelector";
import DataTable from "../components/data/Table";
import { Card } from "@mui/material";

const Table = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList)

    useEffect(() => {
        dispatch(fetchData(1))
    }, [])

    return (
        <>
            <Card sx={{padding: '5rem', height: '100vh'}}>
                <DataTable dataList={dataList} />
            </Card>
        </>
    )
}

export default connect(
    fetchData
)(Table);