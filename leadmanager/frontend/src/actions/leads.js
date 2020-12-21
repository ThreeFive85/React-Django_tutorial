// axios를 사용해 모든 http 요청 페이지
import axios from 'axios';

import { GET_LEADS } from './types';

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    })
    .catch(err => console.log(err))
}