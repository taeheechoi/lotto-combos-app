import { GET_WIN_NUMS_ERROR, GET_WIN_NUMS_LOADING, GET_WIN_NUMS_SUCCESS } from "././winNumsActions";

const winNumsReducer = (state, {type, payload}) => {
    switch(type){
        case GET_WIN_NUMS_LOADING:
            return{
                ...state,
                loading: true,
                error: false,
            }
        case GET_WIN_NUMS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload
            }
        case GET_WIN_NUMS_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }

        default:
            return state
    }
}

export default winNumsReducer