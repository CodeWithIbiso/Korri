

export const fetchGlobalQueue=()=>async(dispatch)=>{
    try {
        const data = 67
        dispatch({type:'FETCH_ALL_G',payload:data})
    } catch (error) {
         console.log(error)
    }
}

export const addGlobalQueue=(index)=>async(dispatch)=>{
    try {
        const data = index 
        dispatch({type:'ADD_G',payload:data})
    } catch (error) {
         console.log(error)
    }
}


export const removeFromGlobalQueue=(index)=>async(dispatch)=>{
    try {
        const data = index 
        dispatch({type:'REMOVE_FROM_QUEUE_G',payload:data})
    } catch (error) {
         console.log(error)
    }
}

export const clearGlobalQueue=()=>async(dispatch)=>{
    try {
        
        dispatch({type:'CLEAR_G'})
    } catch (error) {
         console.log(error)
    }
}
