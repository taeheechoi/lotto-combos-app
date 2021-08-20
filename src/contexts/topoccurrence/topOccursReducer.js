import { GET_TOP_OCCURS_ERROR, GET_TOP_OCCURS_LOADING, GET_TOP_OCCURS_SUCCESS } from "./topOccursActions"


const topOccursReducer = (state, {type, payload}) => {
    switch(type){
        case GET_TOP_OCCURS_LOADING:
            return{
                ...state,
                loading: true,
                error: false,
            }
        case GET_TOP_OCCURS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload
            }
        case GET_TOP_OCCURS_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export default topOccursReducer