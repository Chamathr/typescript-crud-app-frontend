/*signin*/
export const selectSignin = (state: any) => state.auth.token;
export const selectSigninLoading = (state: any) => state.data.signinLoading;
export const selectSigninError = (state: any) => state.data.signinError;

/*signin*/
export const selectSignup = (state: any) => state.auth.signupData;
export const selectSignupLoading = (state: any) => state.data.signupLoading;
export const selectSignupError = (state: any) => state.data.signupError;
