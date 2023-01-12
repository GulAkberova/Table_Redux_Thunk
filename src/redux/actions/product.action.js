// import { type } from "@testing-library/user-event/dist/type";

export const productAction={
  
    delete:(payload)=>{
        return{
            type:'DELETE_PRODUCT',
            payload:payload
        }

    },
    getAll:()=>{
        return async(dispatch)=>{
            fetch("https://northwind.vercel.app/api/products")
            .then((res) => res.json())
            .then((data) => dispatch({type:'GET_ALL_DATA',payload: data}));
        }
    },
    getAdd:(payload)=>{
        return async(dispatch)=>{
            fetch("https://northwind.vercel.app/api/products",{
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)

            })
            .then((res) => res.json())
            .then((data) => dispatch({type:'ADD_PRODUCT',payload: data}));
          
        }
    },

}