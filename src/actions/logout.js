import { LOGOUT } from './types';

export const logout = () => {
    return (dispatch) => {
        console.log("logging in");

        dispatch({
            type: LOGOUT,
            payload: true
        });
    }
}
