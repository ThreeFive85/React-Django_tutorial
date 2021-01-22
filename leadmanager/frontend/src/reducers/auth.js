import { 
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
 } from '../actions/types';

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED: // 토큰이 정상적으로 인증되었을 때
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case AUTH_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null
            }
        default:
            return state;
    }
}