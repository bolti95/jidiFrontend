import { INCREASE_QUANTITY, DECREASE_QUANTITY  } from './types';

export const productQuantity = ( action, tagName ) => {
    return (dispatch) => {
        console.log("Inside product quantity");
        console.log("The action is", action );
        console.log("The product name is", tagName);

        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: tagName
        })
    }
}