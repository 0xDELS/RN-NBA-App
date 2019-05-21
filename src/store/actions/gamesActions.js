import {
    GET_GAMES
} from '../types';

import axios from 'axios';
import { FIREBASEURL, convertFirebase, getTeamData } from '../../utils/firebase/config';

export function getGames(){

    const promise = new Promise((resolve, reject) => {

        const request = axios({
            method:'GET',
            url: `${FIREBASEURL}/teams.json`
        }).then(response => {
            const teams = convertFirebase(response.data)

            axios({
                method:'GET',
                url:`${FIREBASEURL}/games.json`
            }).then(response => {
                const games =  convertFirebase(response.data)

                const responseData = [];

                for(let key in games){
                    responseData.push({
                        ...games[key],
                        awayData: getTeamData(games[key].away, teams),
                        localData: getTeamData(games[key].local, teams)
                    })
                }
                resolve(responseData)
            })
        }).catch(e=>{
            reject(false)
        })
    })

    return {
        type: GET_GAMES,
        payload: promise
    }
}