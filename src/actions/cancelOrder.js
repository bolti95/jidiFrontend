import { CANCEL_ORDER } from './types';

export const cancelOrder = ( action, basketTotal) => {
    return (dispatch) => {
        console.log("Cancelling customer order");
        console.log("Basket price is now: ", 0);
        dispatch({
            type: action === CANCEL_ORDER,
            payload: basketTotal
        });
    }
}