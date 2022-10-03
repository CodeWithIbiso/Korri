

export const fetchQueue=()=>async(dispatch)=>{
    try {
        const data = 67
        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
         console.log(error)
    }
}

export const addQueue=(each)=>async(dispatch)=>{
    const data= each
    try { 
        // console.log(data)
        dispatch({type:'ADD',payload:data})
    } catch (error) {
         console.log(error)
    }
}


export const removeFromQueue=(index)=>async(dispatch)=>{
    try {
        const data = index 
        dispatch({type:'REMOVE_FROM_QUEUE',payload:data})
    } catch (error) {
         console.log(error)
    }
}

export const clearQueue=()=>async(dispatch)=>{
    try {
        
        dispatch({type:'CLEAR'})
    } catch (error) {
         console.log(error)
    }
}
