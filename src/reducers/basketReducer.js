import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from '../actions/types';


const initialState = {
    basketNumbers: 0,
    basketCost: 0,
    products: {
        laptop: {

            name: "APPLE 13.3",
             price: 943.00,
             numbers: 0,
             inBasket: false
     
         }, 
         iphone:
     
         {
     
             name: "APPLE iPhone 11 - 64 GB, Black ",
              price: 599.00,
              numbers: 0,
              inBasket: false
      
          },

          phonecase: 
          {
            name: "APPLE iPhone 11 Pro Leather Case - Black",
            price: 34.97,
            numbers: 0,
            inBasket: false              
          },

          fitbit: 
          {
            name: "FITBIT Versa 3 - Pink Clay & Soft Gold",
            price: 199.00,
            numbers: 0,
            inBasket: false            
          }
     
    }
};        


export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = {...state.products[action.payload]}
            console.log(addQuantity)
            addQuantity.numbers += 1;
            addQuantity.inBasket = true;
            console.log(addQuantity);


            return {
                ...state,
                
                basketNumbers: state.basketNumbers + 1,

                basketCost: state.basketCost + state.products[action.payload].price,
                
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
                //caused error
           
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state;
    }

}

