

export const setQueueVisibility=(index)=>async(dispatch)=>{
    try {
        const data = index 
        dispatch({type:'SET',payload:data})
    } catch (error) {
         console.log(error)
    }
}
