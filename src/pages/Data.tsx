import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/dataAction";
import { connect } from "react-redux";
import { selectDataList } from "../redux/selectors/dataSelector";
import View from "../components/data/View";

const Data = () => {

    const dispatch = useDispatch();
    const dataList = useSelector(selectDataList)

    useEffect(() => {
        dispatch(fetchData(1))
    }, [])

    return (
        <>
            <View dataList={dataList} />
        </>
    )
}

export default connect(
    fetchData
)(Data);