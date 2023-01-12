export const productReducer=(state, action)=>{

    if(state== undefined){
        return []
    }

    switch (action.type) {
        // case 'FAVORITE_PRODUCT':
        //     return [...state, action.payload]

        case 'DELETE_PRODUCT':
            return state=state.filter(index=>index != action.payload)

        case 'GET_ALL_DATA':
            return [...action.payload]

        case 'GET_ALL_POST':
            return [...action.payload]
    
        default:
            return state
    }

}