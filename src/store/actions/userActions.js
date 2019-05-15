import {
    SIGN_IN,
    SIGN_UP
} from '../types';

import axios from 'axios';

export function signIn(){
    return {
        type:SIGN_IN,
        payload:{
            email:'francis@gmail.com',
            token:'jdkashdjksandiubdjqwkdasda'
        }
    }
}

export function signUp(){
    return {
        type:SIGN_UP,
        payload:{
            email:'francis@gmail.com',
            token:'jdkashdjksandiubdjqwkdasda'
        }
    }
}