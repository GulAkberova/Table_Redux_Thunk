export const favoriteReducer=(state,action)=>{
    if (state==undefined){
        return []
    }
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state,action.payload]
            
            case 'DELETE_FAVORITE':
                return state=state.filter(index=>index != action.payload)
    
        default:
          return state
    }

}