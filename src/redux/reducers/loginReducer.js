

const initialState = {
    isLoading: false,
}

export const loginReducer = ( state = initialState, action ) => {
    if(action.type === 'load'){
        return {
            ...state,
            ...action.payload
        }
    }
    return state
    
}