import { CREATE_CUSTOMER_ORDER } from './types';

export const createCustomerOrder = (name, email, cardNumber) => {
    return (dispatch) => {
        console.log("creating customer order");
        console.log("Customer: ", name);
        dispatch({
            type: 'CREATE_CUSTOMER_ORDER',
            // type: action === CREATE_CUSTOMER_ORDER,
            payload: name, email, cardNumber
        });
    }
}
