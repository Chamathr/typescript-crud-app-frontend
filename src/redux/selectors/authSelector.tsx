/*signin*/
export const selectSignin = (state: any) => state.auth.token;
export const selectSigninRefreshToken = (state: any) => state.auth.refreshToken;
export const selectSigninLoading = (state: any) => state.data.signinLoading;
export const selectSigninError = (state: any) => state.data.signinError;

/*signin*/
export const selectSignup = (state: any) => state.auth.signupData;
export const selectSignupLoading = (state: any) => state.data.signupLoading;
export const selectSignupError = (state: any) => state.data.signupError;

/*access-token by refresh-token*/
export const selectAccessToken = (state: any) => state.auth.token;
export const selectAccessTokenLoading = (state: any) => state.data.accessTokenLoading;
export const selectAccessTokenError = (state: any) => state.data.accessTokenError;
