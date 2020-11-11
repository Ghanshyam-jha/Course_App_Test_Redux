export default function(state={},action){
    switch(action.type){
        case 'SET_ENQVALUES':
            return {...state, doubtsFormData:action.payload}
        case 'ENQFORM_DATA':
            return {...state, doubtsData:action.payload}
                
        default:
            return state;
            
    }
}