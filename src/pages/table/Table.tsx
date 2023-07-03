import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/actions/dataAction";
import DataTable from "../../components/data/Table";
import { Card } from "@mui/material";

const Table = () => {

    const dispatch = useDispatch();
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
                <DataTable setPage={getPage} />
            </Card>
        </>
    )
}

export default Table