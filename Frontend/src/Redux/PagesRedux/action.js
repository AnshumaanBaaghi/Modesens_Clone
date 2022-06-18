import axios from "axios"

export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const ADD_TO_CART="ADD_TO_CART"
export const DELETE_DATA="DELETE_DATA"
export const GET_CART_DATA="GET_CART_DATA"

export const getDataSuccess=(data)=>(
    {
        type:GET_DATA_SUCCESS,
        payload:data
    }
)

export const getData=(payload,page_no)=>(dispatch)=>{
    axios({
        url:"http://localhost:8080/modesens/beauty",
        method:"GET",
        params:{...payload,page_no,limit:10}
    })
    .then((res)=>{
        dispatch(getDataSuccess(res.data))
    })
}
// ..................................................................//
export const addtoCartsuccess=(data)=>(
    {
        type:ADD_TO_CART,
        payload:{...data,Price:data.Price}
    }
)

export const addToCart=(payload)=>(dispatch)=>{
    axios({
        url:"http://localhost:8080/modesens/cart",
        method:"POST",
        data:{
            ...payload
        }
    }).then((res)=>{
        console.log(payload);
        dispatch(addtoCartsuccess(res.data))
    }).catch((err)=>{
        console.log(err)
    })
}

// get cart data..........



// delete products in cart........................///
export const deleteData=(payload)=>(
    {
        type:DELETE_DATA,
        payload
    }
)

export const deleteCartData=(id)=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/modesens/cart/${id}`,
        method:"DELETE"
    }).then((res)=>{
        dispatch(deleteData(res.data))
    }).catch((err)=>{
        console.log("unable to delete product from ur cart-", err);
    })
}
    
