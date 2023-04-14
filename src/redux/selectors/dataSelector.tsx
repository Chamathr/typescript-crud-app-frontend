/*get data*/
export const selectDataList = (state: any) => state.data.data;
export const selectretRievingDataLoading = (state: any) => state.data.getDataLoading;
export const selectretRievingDataError = (state: any) => state.data.getDataError;

/*add data*/
export const selectAddedData = (state: any) => state.data.addedData;
export const selectretAddingDataLoading = (state: any) => state.data.addDataLoading;
export const selectretAddingDataError = (state: any) => state.data.addDataError;

/*get data by id*/
export const selectDataById = (state: any) => state.data.dataById;
export const selectretRievingDataByIdLoading = (state: any) => state.data.getDataByIdLoading;
export const selectretRievingDataByIdError = (state: any) => state.data.getDataByIdError;
