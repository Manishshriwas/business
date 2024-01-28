 const reducer=(state,action)=>{
    if(action.type==="ABOUT_UPDATE"){
        return{
            ...state,
            name:action.payload.name,
            image:action.payload.image,
            heading:action.payload.heading,
        };
    } 
    if(action.type==="SERVICE_UPDATE"){
        return{
            ...state,
            name:action.payload.name,
            image:action.payload.image,
            heading:action.payload.heading,
        };
    }
    // if(action.type==="GET_SERVICES"){
    //     return{
    //         ...state,
    //      services:action.payload,
    //     };
    // } 
    return state;

 }
 export default reducer;