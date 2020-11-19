import { ADD_PRODUCT_BASKET, DECREASE_QUANTITY, GET_NUMBERS_BASKET, INCREASE_QUANTITY, CANCEL_ORDER, SHOW_TOTAL, LOGOUT } from '../actions/types';


const initialState = {
    decrease: "arrow-back-circle-outline",
    basketNumbers: 0,
    basketCost: 0,
    productsInBasket: [],
    logout: 'login',
    products: {
        desktop: {

            name: "HP 22-df0005na 21.5 All-in-One PC - Intel® Core™ i3, 128 GB SSD",
            tagName: 'desktop',
             price: 529.00,
             numbers: 0,
             inBasket: false
     
         }, 
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
            productSelected.numbers += 1;
            productSelected.inBasket = true;

            return {
                ...state,

                productsInBasket: [...state.productsInBasket, state.products[action.payload].name],
                
                basketNumbers: state.basketNumbers + 1,

                basketCost: state.basketCost + state.products[action.payload].price,
                
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
            
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            state.basketNumbers += 1;
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
            let newdecrease = '';
            if( productSelected.numbers <= 0) {
                state.decrease = newdecrease;
                state.products[action.payload].price = 0;
                productSelected.numbers = 0;
                newBasketCost = 0;
                state.basketNumbers = 0;
            } else {
                productSelected.numbers -= 1;
                state.basketNumbers -= 1;
                newBasketCost = state.basketCost - state.products[action.payload].price
            } 
         
                    // newBasketCost = Math.round(state.basketCost);
              
                // } else {
                //     productSelected.numbers -= 1;
                //     newBasketCost = state.basketCost - state.products[action.payload].price;
                //     state.basketNumbers = state.products[action.payload].numbers;
                //     state.decrease = '';
                // } 
                return {
                    ...state,
                
                    basketCost: state.basketCost - state.products[action.payload].price,                

                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }
                }
    
    

        case CANCEL_ORDER: 
            productSelected = {...state.products[action.payload]}
            
            return {
                ...state,
                basketCost: 0,
                basketNumbers: 0,
                productsInBasket: []
                
            }


        case SHOW_TOTAL:
            productSelected = {...state.products[action.payload]}

            return {

                ...state,
                basketCost: state.basketCost,
                basketNumbers: state.basketNumbers
            }
            case LOGOUT:
                // productSelected = {...state.products[action.payload]}
                state.logout = 'logout'
                return {
                    
                    // ...state,
                    logout:  'logout'

                }
        default:
            return state;
    }

}

