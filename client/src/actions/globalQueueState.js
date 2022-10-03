

export const setGlobalQueueVisibility=(index)=>async(dispatch)=>{
    try {
        const data = index 
        dispatch({type:'SETG',payload:data})
    } catch (error) {
         console.log(error)
    }
}
