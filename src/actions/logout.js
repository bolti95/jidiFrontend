import { LOGOUT } from './types';

export const logout = (logout) => {
    return (dispatch) => {
        console.log("logging in");

        dispatch({
            type: LOGOUT,
            payload: logout
        });
    }
}
