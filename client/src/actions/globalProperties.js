import * as api from '../api'
import { getPropertiesByCreator } from './search'

export const createGlobalProperties=(property)=>async(dispatch)=>{
    dispatch({type:'SET_LOADING'})
    try {
        await api.createGlobalProperty(property).then(
            (response)=>{
                 dispatch({type:'CREATE_GLOBAL',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
                 const localStorageDataId = JSON.parse(localStorage.getItem('userProfile'))?.result?._id
                 dispatch(getPropertiesByCreator({page:1,creator:localStorageDataId,propertyType : 'store'})) 
            }
       )  
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
export const getGlobalPropertiesById=(id)=>async(dispatch)=>{ 
    // dispatch({type:'SET_LOADING'})
    // console.trace()
    // console.log('here  2')
    // console.log(id)
    try { 
        await api.fetchGlobalPropertiesById(id).then(
            // await api.fetchProperties().then(
             (response)=>{
                 const data = response.data
                //  console.log(data) 
                //  dispatch({type:'FETCH_ALL',payload:data})
                 dispatch({type:'FETCH_ALL_GLOBAL_BY_ID',payload:data})
                //  dispatch({type:'REMOVE_LOADING'})
            }
            )
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
export const getGlobalProperties=(page)=>async(dispatch)=>{
    if (page === undefined) {const page = 1}
    dispatch({type:'SET_LOADING'})
    // console.log('hrehjhj')
    try {
        await api.fetchGlobalPropertiesByPage(page).then(
            (response)=>{
                dispatch({type:'REMOVE_LOADING'})
                 dispatch({type:'FETCH_ALL_GLOBAL_BY_PAGE',payload:response.data})
           }
       )
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
} 

export const removeGlobalProperties=(id)=>async(dispatch)=>{
    dispatch({type:'SET_LOADING'})
    try {  
        await api.deleteGlobalProperty(id).then( 
            (response)=>{   
             dispatch({type:'REMOVE_GLOBAL',payload:id})
             dispatch({type:'REMOVE_LOADING'})
             dispatch(getGlobalProperties())
            })
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
export const updateGlobalProperties=(property)=>async(dispatch)=>{
    dispatch({type:'SET_LOADING'})
    try {
        const id =property._id 
        await api.updateGlobalProperty(id,property).then( 
            (response)=>{  
            dispatch({type:'UPDATE_GLOBAL',payload:response.data})
            dispatch({type:'REMOVE_LOADING'})
            dispatch(getGlobalProperties())
        } )
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
