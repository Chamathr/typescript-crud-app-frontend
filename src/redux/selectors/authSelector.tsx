/*signin*/
export const selectSignin = (state: any) => state.auth.token;
export const selectSigninLoading = (state: any) => state.data.signinLoading;
export const selectSigninError = (state: any) => state.data.signinError;
