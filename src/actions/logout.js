import { LOGOUT } from './types';

export const logout = (action, logout) => {
    return (dispatch) => {
        console.log("logging in");

        dispatch({
            type: action,
            payload: logout
        });
    }
}
