import { func } from "prop-types";


export default function(state={},action){
    switch(action.type){
        case 'COURSE_LIST':
            return {...state, cList:action.payload}
        case 'SET_FORMVALUES':
                return {...state, formValues: action.payload}
        case 'FORM_DATA':
                return {...state, getValues: action.payload}
                
        default:
            return state;
            
    }
}