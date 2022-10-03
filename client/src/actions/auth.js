import * as api from '../api'


export const signIn=(formData,navigate)=>async(dispatch)=>{
    dispatch({type:'REMOVE_ERROR'})
    dispatch({type:'SET_LOADING'})
    try {
        const {data} = await api.signIn(formData)
        dispatch({type:'AUTH',data})
        navigate('/')
        dispatch({type:'REMOVE_LOADING'})
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        dispatch({type:'SET_ERROR',payload:error.response.data.message})
        // console.log(error) 
        // console.log('h'+error.response.status) 
    }
}

export const signUp=(formData,navigate)=>async(dispatch)=>{
    dispatch({type:'REMOVE_ERROR'})
    dispatch({type:'SET_LOADING'})
    try {
        const {data} = await api.signUp(formData)
        dispatch({type:'AUTH',data})
        navigate('/') 
        dispatch({type:'REMOVE_LOADING'})
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        // console.log(error)
        dispatch({type:'SET_ERROR'})
    }
}
 