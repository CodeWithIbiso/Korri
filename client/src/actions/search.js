import * as api from '../api'


// export const getPropertiesBySearch=(searchQuery)=>async(dispatch)=>{  
export const getPropertiesBySearch=({search,tags,navigate})=>async(dispatch)=>{ 
    const searchQuery = {search,tags}
    // console.log(search,tags)
    dispatch({type:'SET_LOADING'})
    try {
        // console.log(searchQuery)
        await api.fetchPropertiesBySearch(searchQuery).then(
            (response)=>{
                // console.log(response.data)
                //  navigate('/gallery')
                 dispatch({type:'FETCH_ALL_BY_SEARCH',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
           }
       )
    } catch (error) {
         console.log(error)
    }
} 

export const getPropertiesByGallerySearch=({search,page})=>async(dispatch)=>{ 
    const searchQuery = {search,page} 
    // console.log(searchQuery)
    dispatch({type:'SET_LOADING'})
    try {
        // console.log(searchQuery)
        await api.fetchPropertiesByGallerySearch(searchQuery).then(
            (response)=>{
                // console.log(response.data)
                //  navigate('/gallery')
                 dispatch({type:'FETCH_ALL_BY_GALLERY_SEARCH',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
           }
       )
    } catch (error) {
         console.log(error)
    }
} 
export const getPropertiesByCreator=(searchQuerys)=>async(dispatch)=>{ 
    const propertyType =searchQuerys.propertyType
    const search=searchQuerys.search
    const page=searchQuerys.page 
    const creator=searchQuerys.creator
    const searchQuery = {search,page,propertyType,creator}  
    // console.log(searchQuery)
    dispatch({type:'SET_LOADING'})
    try {
        // console.log(searchQuery)
        await api.fetchPropertiesByCreator(searchQuery).then(
            (response)=>{
                // console.log(response.data)
                //  navigate('/gallery')
                 dispatch({type:'FETCH_ALL_BY_CREATOR',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
           }
       )
    } catch (error) {
         console.log(error)
    }
} 
export const getGlobalPropertiesByStoreSearch=({search,page})=>async(dispatch)=>{ 
    
    const searchQuery = {search,page}
    // console.log(searchQuery)
    dispatch({type:'SET_LOADING'})
    try {
        // console.log(searchQuery)
        await api.fetchGlobalPropertiesByStoreSearch(searchQuery).then(
            (response)=>{
                // console.log(response.data.properties) 
                 dispatch({type:'FETCH_ALL_GLOBAL_BY_STORE_SEARCH',payload:response.data})
                 dispatch({type:'REMOVE_LOADING'})
           }
       )
    } catch (error) {
         console.log(error)
    }
} 