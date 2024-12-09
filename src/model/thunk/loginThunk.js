import { setJWTToken } from "../reducer/authReducer";

export const setTokenThunk = (token) => async (dispatch) => {
    try {
        await dispatch(setJWTToken({ data: token }));
        return true;
    } catch (error) {
        console.error("Error setting token:", error);
        return false;
    }
}