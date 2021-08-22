import { CONNECTION_ERROR, GET_WIN_NUMS_ERROR, GET_WIN_NUMS_LOADING, GET_WIN_NUMS_SUCCESS } from '../contexts/winnums/winNumsActions'
import axiosHelper from '../utils/axiosHelper'

const getWinNums = (game) => (dispatch) => {
    dispatch({
        type: GET_WIN_NUMS_LOADING
    })

    axiosHelper()
    .get(`/lottery/${game}/`)
    .then((res) => {
        dispatch({
            type: GET_WIN_NUMS_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_WIN_NUMS_ERROR,
            payload: err.response ? err.response.data : CONNECTION_ERROR
        })
    })
}

export default getWinNums
