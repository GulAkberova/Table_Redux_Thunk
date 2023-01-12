export const favoriteAction={
    favoriteAdd:(payload)=>{
        return {
            type:"ADD_FAVORITE",
            payload:payload
        }
    },
    favoriteDelete:(payload)=>{
        return{
            type:'DELETE_FAVORITE',
            payload:payload
        }

    },

}