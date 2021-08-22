import { CONNECTION_ERROR} from '../contexts/winnums/winNumsActions'
import { GET_WIN_NUMS_COMBOS_ERROR, GET_WIN_NUMS_COMBOS_LOADING, GET_WIN_NUMS_COMBOS_SUCCESS } from '../contexts/winnumscombo/winNumsCombosActions'
import axiosHelper from '../utils/axiosHelper'

const getWinNumsCombos = (game, numbers) => (dispatch) => {
    dispatch({
        type: GET_WIN_NUMS_COMBOS_LOADING
    })
  
    axiosHelper()
    .get(`/lottery/winning-numbers-combinations/?game=${game}&numbers=${numbers}`)
    .then((res) => {
        dispatch({
            type: GET_WIN_NUMS_COMBOS_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_WIN_NUMS_COMBOS_ERROR,
            payload: err.response ? err.response.data : CONNECTION_ERROR
        })
    })
}

export default getWinNumsCombos
