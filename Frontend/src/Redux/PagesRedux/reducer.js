import { GET_DATA_SUCCESS } from "./action"

const init={
  products:[]
}
const reducer = (state=init, action) => {
  switch (action.type){
    case GET_DATA_SUCCESS:
      return{
        ...state,
        products:action.payload
      }
    default :
      return state
  }
}

export default reducer