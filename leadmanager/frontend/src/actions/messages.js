import { CREATE_MESSAGE, GET_ERRORS } from './types';

// CREATE_MESSAGES
// 비동기 요청이지만 axios를 사용하지 않으므로 디스패치를 전달할 필요는 없다. 그래서 create message 타입을 직접 반환한다
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

// RETURN ERRORS
export const returnErrors = (msg, status) => {
    return {
        type: GET_ERRORS,
        payload: {msg, status}
    }
}