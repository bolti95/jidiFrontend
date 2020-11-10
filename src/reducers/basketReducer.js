import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, GET_NUMBERS_BASKET, INCREASE_QUANTITY, CANCEL_ORDER, SHOW_TOTAL } from '../actions/types';


const initialState = {
    basketNumbers: 0,
    basketCost: 0,
    products: {
        laptop: {

            name: "APPLE 13.3",
            tagName: 'laptop',
             price: 943.00,
             numbers: 0,
             inBasket: false
     
         }, 
         iphone:
     
         {
     
             name: "APPLE iPhone 11 - 64 GB, Black ",
             tagName: 'iphone',
              price: 599.00,
              numbers: 0,
              inBasket: false
      
          },

          phonecase: 
          {
            name: "APPLE iPhone 11 Pro Leather Case - Black",
            tagName: 'phonecase',
            price: 34.97,
            numbers: 0,
            inBasket: false              
          },

          fitbit: 
          {
            name: "FITBIT Versa 3 - Pink Clay & Soft Gold",
            tagName: 'fitbit',
            price: 199.00,
            numbers: 0,
            inBasket: false            
          }

        
     
    }
};        


export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected= {...state.products[action.payload]}
            console.log(productSelected)
            productSelected.numbers += 1;
            productSelected.inBasket = true;
            console.log(productSelected);


            return {
                ...state,
                
                basketNumbers: state.basketNumbers + 1,

                basketCost: state.basketCost + state.products[action.payload].price,
                
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
                //caused error
           
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
            
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                ...state,
                basketCost: state.basketCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
            
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newBasketCost = 0;
            if( productSelected.numbers === 0) { 
                productSelected.numbers = 0;
                newBasketCost = state.basketCost
            } else {
                productSelected.numbers -= 1;
                newBasketCost = state.basketCost - state.products[action.payload].price
            } 
            return {
                ...state,
                basketCost: state.basketCost - state.products[action.payload].price,
                products: {
                    ...state.products,
                    basketCost: newBasketCost,
                    [action.payload]: productSelected
                }
            }
        case CANCEL_ORDER: 
            productSelected = {...state.products[action.payload]}
            
            return {
                ...state,
                basketCost: 0
                
            }

        case SHOW_TOTAL:
            productSelected = {...state.products[action.payload]}

            return {

                ...state,
                basketCost: state.basketCost,
                basketNumbers: state.basketNumbers
            }
        default:
            return state;
    }

}

