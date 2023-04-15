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

/*update data*/
export const selectUpdatedData = (state: any) => state.data.updatedData;
export const selectretUpdatingDataLoading = (state: any) => state.data.updateDataLoading;
export const selectretUpdatingDataError = (state: any) => state.data.updateDataError;

/*delete data*/
export const selectDeletedData = (state: any) => state.data.deletedData;
export const selectretDeletingDataLoading = (state: any) => state.data.deleteDataLoading;
export const selectretDeletingDataError = (state: any) => state.data.deleteDataError;