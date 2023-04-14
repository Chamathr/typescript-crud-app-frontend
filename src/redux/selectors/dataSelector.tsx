/*get data*/
export const selectDataList = (state: any) => state.data.data;
export const selectretRievingDataLoading = (state: any) => state.data.getDataLoading;
export const selectretRievingDataError = (state: any) => state.data.getDataError;

/*add data*/
export const selectAddedData = (state: any) => state.data.addedData;
export const selectretAddingDataLoading = (state: any) => state.data.addDataLoading;
export const selectretAddingDataError = (state: any) => state.data.addDataError;


