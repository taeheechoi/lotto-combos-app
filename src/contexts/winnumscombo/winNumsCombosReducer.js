import { CLEAR_SEARCH, GET_WIN_NUMS_COMBOS_ERROR, GET_WIN_NUMS_COMBOS_LOADING, GET_WIN_NUMS_COMBOS_SUCCESS } from './winNumsCombosActions'
import winNumsCombosInitialState from './winNumsCombosInitialState'

const winNumsCombosReducer = (state, {type, payload}) => {
    switch(type){
        case GET_WIN_NUMS_COMBOS_LOADING:
            return{
                ...state,
                loading: true,
                error: false,
            }
        case GET_WIN_NUMS_COMBOS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: payload
            }
        case GET_WIN_NUMS_COMBOS_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }

        case CLEAR_SEARCH:{
            return{
                ...winNumsCombosInitialState
            }
        }

        default:
            return state
    }
}

export default winNumsCombosReducer