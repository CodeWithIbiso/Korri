import axios from 'axios'

const API = axios.create({baseURL:'http://localhost:8000'})

const url = 'http://localhost:8000'
API.interceptors.request.use((req)=>{
    const localStorageData = JSON.parse(localStorage.getItem('userProfile')) 
    if (localStorageData){
        req.headers.authorization= `Bearer ${ localStorageData.token}`
        // console.log(req.headers.authorization[1])
        // console.log(localStorageData)
    }
    return req
})

export const fetchProperties = ()=> API.get('/')
export const fetchPropertiesByPage = (page)=> API.get(`/page/${page}`)
export const fetchPropertiesById = (id)=> API.get(`/id/${id}`)
export const fetchPropertiesByGallerySearch = (searchQuery)=> API.get(`/gallery?searchQuery=${searchQuery.search || 'none'}&page=${searchQuery.page}`)
export const fetchPropertiesBySearch = (searchQuery)=> API.get(`/search?searchQuery=${searchQuery.search || 'none'}&Category=${searchQuery.tags.Category|| 'none'}&minPrice=${searchQuery.tags.minPrice|| 'none'}&Baths=${searchQuery.tags.Baths|| 'none'}&Furnished=${searchQuery.tags.Furnished|| 'none'}&Type=${searchQuery.tags.Type|| 'none'}&maxPrice=${searchQuery.tags.maxPrice|| 'none'}&Bedroom=${searchQuery.tags.Bedroom|| 'none'}&roomSize=${searchQuery.tags.roomSize|| 'none'}`)
export const createProperty = (newProperty)=> API.post('/',newProperty)
export const updateProperty = (id,updatedProperty)=> API.patch(`/${id}`,updatedProperty)
export const deleteProperty = (id)=> API.delete(`/${id}`)

// fetchPropertiesByCreator
// export const fetchGlobalPropertiesById = (id)=> API.get(`/id/${id}`)
export const fetchPropertiesByCreator = (searchQuery)=> API.get(`/account/params?searchQuery=${searchQuery.search || 'none'}&page=${searchQuery.page}&propertyType=${searchQuery.propertyType}&creator=${searchQuery.creator}`)
export const fetchGlobalPropertiesById = (id)=> API.get(`/store/product/id/${id}`)
export const fetchGlobalPropertiesByStoreSearch = (searchQuery)=> API.get(`/store?searchQuery=${searchQuery.search || 'none'}&page=${searchQuery.page}`)
export const fetchGlobalProperties = ()=> API.get('/store')
export const fetchGlobalPropertiesByPage = (page)=> API.get(`/store/${page}`)
export const createGlobalProperty = (newProperty)=> API.post('/store',newProperty)
export const updateGlobalProperty = (id,updatedProperty)=> API.patch(`${'/store'}/${id}`,updatedProperty)
export const deleteGlobalProperty = (id)=> API.delete(`${'/store'}/${id}`)

export const signUp = (formData)=> API.post('/user/signup',formData)
export const signIn = (formData)=> API.post('/user/signin',formData)


// const url = 'http://localhost:5000'
// const urlG = 'http://localhost:5000/store'

// export const fetchProperties = ()=> axios.get(url)
// export const createProperty = (newProperty)=> axios.post(url,newProperty)
// export const updateProperty = (id,updatedProperty)=> axios.patch(`${url}/${id}`,updatedProperty)
// export const deleteProperty = (id)=> axios.delete(`${url}/${id}`)


// export const fetchGlobalProperties = ()=> axios.get(urlG)
// export const createGlobalProperty = (newProperty)=> axios.post(urlG,newProperty)
// export const updateGlobalProperty = (id,updatedProperty)=> axios.patch(`${urlG}/${id}`,updatedProperty)
// export const deleteGlobalProperty = (id)=> axios.delete(`${urlG}/${id}`)
