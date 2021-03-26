import { USER } from './actionTypes';


export function setUser(userData={}){
    return{
        payload:userData,
        type:USER
    }
}