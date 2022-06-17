import { ADD_TO_CART, DELETE_DATA, GET_DATA_SUCCESS } from "./action"

const init={
  products:[],
  cartData:[],
  cartTotal:0,
}
const reducer = (state=init, action) => {
  switch (action.type){
    case GET_DATA_SUCCESS:
      return{
        ...state,
        products:action.payload
      }
    case ADD_TO_CART:
      let cartProducts=[...state.cartData,action.payload]
      let cartSum=action.payload.Price
      return{
        ...state,
        cartData:cartProducts,
        cartTotal:cartSum
      }
    case DELETE_DATA:
      return{
        ...state,
        cartData:action.payload
      }
    default :
      return state
  }
}

export default reducer