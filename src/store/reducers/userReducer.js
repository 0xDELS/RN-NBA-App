import {
    SIGN_IN,
    SIGN_UP
} from '../types';

export default function(state={}, action){
    switch(action.type){
        case SIGN_IN:
            return {
                ...state, 
                auth:{
                    localID: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refreshToken: action.payload.refreshToken || false
                }
            };
        case SIGN_UP:
            return {
                ...state, 
                auth:{
                    localID: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refreshToken: action.payload.refreshToken || false
                }
            };
        default:
            return state;
    }
}