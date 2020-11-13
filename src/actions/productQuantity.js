import { INCREASE_QUANTITY, DECREASE_QUANTITY  } from './types';

export const productQuantity = ( action, tagName, productsInBasket ) => {
    return (dispatch) => {
        console.log("Inside product quantity");
        console.log("The action is", action );
        console.log("The product name is", tagName);
        console.log("The products in basket are", productsInBasket);

        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: tagName, productsInBasket
        })
    }
}