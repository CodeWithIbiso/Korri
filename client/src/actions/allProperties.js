import * as api from '../api'




export const getAllPropertiesByPage=(page)=>async(dispatch)=>{
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
                 dispatch({type:'FETCH_ALL_PROPERTIES_BY_PAGE',payload:data})
            }
            )
     } catch (error) {
        dispatch({type:'REMOVE_LOADING'})
        console.log(error)
    }
}
