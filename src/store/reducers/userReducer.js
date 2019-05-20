import {
    SIGN_IN,
    SIGN_UP,
    AUTO_SIGN_IN
} from '../types';

export default function(state={}, action){
    switch(action.type){
        case SIGN_IN:
            return {
                ...state, 
                auth:{
                    userID: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refreshToken: action.payload.refreshToken || false
                }
            };
            break;
        case SIGN_UP:
            return {
                ...state, 
                auth:{
                    userID: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refreshToken: action.payload.refreshToken || false
                }
            };
            break;
        case AUTO_SIGN_IN:
            return {
                ...state, 
                auth:{
                    userID: action.payload.user_id || false,
                    token: action.payload.id_token || false,
                    refreshToken: action.payload.refresh_token || false
                }
            };
        default:
            return state;
    }
}