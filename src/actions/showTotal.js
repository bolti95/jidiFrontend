import { SHOW_TOTAL } from './types';

export const cancelOrder = ( action, basketCost) => {
    return (dispatch) => {
        console.log("show total");
        console.log("Basket price is now: ", basketCost);
        dispatch({
            type: action === SHOW_TOTAL,
            payload: basketCost
        });
    }
}