import axios from "axios"

export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"

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
    
