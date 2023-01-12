export const favoriteReducer=(state,action)=>{
    if (state==undefined){
        return []
    }
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state,action.payload]
            
            case 'DELETE_FAVORITE':
              let filteredFav=state.filter(index=>index != action.payload)
              return [...filteredFav]

            case 'EMPTY':
                return []
    
        default:
          return state
    }

}