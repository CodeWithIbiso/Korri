export default (propertiesById=[],action)=>{
    switch (action.type) {
        case 'FETCH_ALL_GLOBAL_BY_ID':
            // console.log(action.payload)
             return  action.payload 
        case 'REMOVE_GLOBAL_BY_ID':  
            return propertiesById.filter((single)=> single._id !== action.payload); 
        default:
            return propertiesById;
    }
}