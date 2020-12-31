import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
    switch(action.type){
        // case GET_MESSAGES: 메세지를 가져오는 것은 사용하지 않으므로 case문이 필요하지는 않다.
        //     return action.payload;
        case CREATE_MESSAGE:
            return (state = action.payload);
        default:
            return state;
    }
}