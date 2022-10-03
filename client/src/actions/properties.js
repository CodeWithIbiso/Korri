 import * as api from '../api'
import { getPropertiesByCreator } from './search'




 export const createProperties=(property)=>async(dispatch)=>{
        dispatch({type:'SET_LOADING'})
     try {
        await api.createProperty(property).then(
             (response)=>{
                //  console.log(response.data)
                 dispatch({type:'CREATE',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
                 const localStorageDataId = JSON.parse(localStorage.getItem('userProfile'))?.result?._id
                 dispatch(getPropertiesByCreator({page:1,creator:localStorageDataId,propertyType : 'properties'})) 

             }
        ) 
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}

export const getProperties=(page)=>async(dispatch)=>{
    // console.log('na here o'+page)
    if (page === undefined) {const page = 1}
    dispatch({type:'SET_LOADING'})
    // console.trace()
    // console.log(page)
    try { 
        await api.fetchPropertiesByPage(page).then(
            // await api.fetchProperties().then(
             (response)=>{
                 dispatch({type:'REMOVE_LOADING'})
                 const data = response.data
                //  console.log(data) 
                //  dispatch({type:'FETCH_ALL',payload:data})
                 dispatch({type:'FETCH_ALL_BY_PAGE',payload:data})
            }
            )
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}

export const getPropertiesById=(id)=>async(dispatch)=>{ 
    // dispatch({type:'SET_LOADING'})
    // console.trace()
    // console.log('here  2')
    // console.log(id)
    try { 
        await api.fetchPropertiesById(id).then(
            // await api.fetchProperties().then(
             (response)=>{
                 const data = response.data
                //  console.log(data) 
                //  dispatch({type:'FETCH_ALL',payload:data})
                 dispatch({type:'FETCH_ALL_BY_ID',payload:data})
                //  dispatch({type:'REMOVE_LOADING'})
            }
            )
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
 

export const removeProperties=(id)=>async(dispatch)=>{
    dispatch({type:'SET_LOADING'})
    try { 
        await api.deleteProperty(id).then( 
            (response)=>{   
             
                dispatch({type:'REMOVE',payload:id})
                 dispatch(getProperties()) 
                 
                 dispatch({type:'REMOVE_LOADING'})
            })
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
export const updateProperties=(property)=>async(dispatch)=>{
    dispatch({type:'SET_LOADING'})
    try {
        const id =property._id 
        await api.updateProperty(id,property).then( 
            (response)=>{  
            dispatch({type:'UPDATE',payload:response.data}) 
            dispatch({type:'REMOVE_LOADING'})
            dispatch(getProperties())
        }
    ) 
    } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
