
import { GET_TOP_OCCURS_ERROR, GET_TOP_OCCURS_LOADING, GET_TOP_OCCURS_SUCCESS } from '../contexts/topoccurrence/topOccursActions'
import { CONNECTION_ERROR} from '../contexts/winnums/winNumsActions'
import axiosHelper from '../utils/axiosHelper'

const getTopOccurs = (game) => (dispatch) => {
    dispatch({
        type: GET_TOP_OCCURS_LOADING
    })
  
    axiosHelper()
    .get(`/lottery/winning-numbers-combinations/?game=${game}&top-occurrence=True`)
    .then((res) => {
        dispatch({
            type: GET_TOP_OCCURS_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: GET_TOP_OCCURS_ERROR,
            payload: err.response ? err.response.data : CONNECTION_ERROR
        })
    })
}

export default getTopOccurs
