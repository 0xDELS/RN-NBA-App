import {
    SIGN_IN,
    SIGN_UP
} from '../types';

import { SIGNUP, SIGNIN, FIREBASEURL  } from '../../utils/firebase/config';

import axios from 'axios';

export function signIn(data){

    const request = axios({
        method:'POST',
        url: SIGNIN,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers:{
            "Content-type":"application/json"
        }
    }).then( response => {
        return response.data
    }).catch(e => {
        return false
    });

    return {
        type:SIGN_IN,
        payload:request
    }
}

export function signUp(data){

    const request = axios({
        method:'POST',
        url: SIGNUP,
        data:{
            email: data.email,
            password: data.password,
            returnSecureToken: true
        },
        headers:{
            "Content-type":"application/json"
        }
    }).then( response => {
        return response.data
    }).catch(e => {
        return false
    });

    return {
        type:SIGN_UP,
        payload:request
    }
}