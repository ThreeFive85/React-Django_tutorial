// axios를 사용해 모든 http 요청 페이지
import axios from 'axios';
import { createMessage, returnErrors } from './messages';

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
    .then(res => {
        dispatch({
            type: GET_LEADS,
            payload: res.data
        });
    })
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)))
};

// DELETE LEAD
export const deleteLead = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
    .then(res => {
        dispatch(createMessage({ deleteLead: "메세지가 삭제되었습니다."}));
        dispatch({
            type: DELETE_LEAD,
            payload: id
        });
    })
    .catch(err => console.log(err))
};

// ADD LEAD
export const addLead = (lead) => dispatch => {
    axios.post('/api/leads/', lead)
    .then(res => {
        dispatch(createMessage({ addLead: "메세지가 등록되었습니다."}));
        dispatch({
            type: ADD_LEAD,
            payload: res.data
        });
    })
    // .catch(err => console.log(err.response.data)) 옳바른 이메일 형식을 적지 않으면 db에 post되지 않으므로 해당 에러 메세지를 
    // 콘솔에 표시
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};