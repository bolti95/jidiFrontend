import { CREATE_CUSTOMER_ORDER } from '../actions/types'


const initialState = {
    customer: {
            name: '',
            email: '',
            cardNumber: '',

    }
};        


export default (state = initialState, action) => {
    let newCustomer='';
    switch(action.type) {
        case CREATE_CUSTOMER_ORDER:
            newCustomer= {...state.customer.name[action.payload]}
            console.log(newCustomer)

            return {
                // name: state.name,
                // email: state.email,
                name: action.payload,
                ...state,
                
       
                // customer: {
                //     ...state.customer
                //     [action.payload]: newCustomer
                }
               
           
            
            default:
                return state;
    }

}

