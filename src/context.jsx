import React, { useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'

import image1 from './Assetes/w3.jpg'
const AppContext=React.createContext();
// const API="https://dog.ceo/api/breeds/image/random";



const intialState={
    name:"",
    image:"",
    services:[],
};



const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,intialState);
    const updateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"MANISSSH",
                heading:"ABOUT",
                image:image1,
            }
        });
    };
    const updateServicesPage=()=>{
        return dispatch({
            type:"SERVICE_UPDATE",
            payload:{
                name:"MANISSSH11",
                heading:"PROVIDE BEST IDEAS",
                image:image1,
            }
        });
    };
   
    
//to get the api data
// const getservices=async(url)=>{
//     try{
//         const res=await fetch(url);
//         const data = await res.json();
//         dispatch({type:"GET_SERVICES",payload:data})
//     }catch(error){
//         console.log(error);
//     }
// };


//to call the api
// useEffect(()=>{
//     getservices(API);
// },[]);




    return <AppContext.Provider value={{...state,updateAboutPage,updateServicesPage}}>
        {children}

    </AppContext.Provider>
};

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};