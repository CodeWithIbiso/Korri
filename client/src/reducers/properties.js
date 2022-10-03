// export default (properties=[],action)=>{
//     switch (action.type) {
//         case 'FETCH_ALL':
//              return action.payload; //him
//         case 'FETCH_ALL_BY_SEARCH':
//             return action.payload; //him
//         case 'FETCH_ALL_BY_GALLERY_SEARCH':
//             return action.payload; //him
//         case 'CREATE':
//             return [...properties,action.payload]; 
//         case 'REMOVE':  
//             return properties.filter((single)=> single._id !== action.payload);
    
//         case 'UPDATE':  
//             const id = action.payload._id
//             const data= action.payload 
//             return properties.map((property)=>property._id === id?data:property) 
            
//          default:
//             return properties;
//     }
// }

export default (propertiesByPage={properties:[],currentPage:1,numberOfPages:1},action)=>{
    switch (action.type) {
        case 'FETCH_ALL_BY_PAGE': 
            // console.trace()

            //  return action.payload; //him
             return {...propertiesByPage,
                    properties:action.payload.properties,
                    currentPage:action.payload.currentPage,
                    numberOfPages:action.payload.numberOfPages
                    }; //him
      case 'FETCH_ALL_BY_SEARCH':// this is for the main search something on the home page, it will always return just 8
          return {...propertiesByPage,
            properties:action.payload 
                };  //him
    case 'FETCH_ALL_BY_GALLERY_SEARCH':  
                return  {...propertiesByPage,
                properties:action.payload.properties,
                currentPage:action.payload.currentPage,
                numberOfPages:action.payload.numberOfPages
                }; //him
        case 'CREATE':
            return {...propertiesByPage,
                properties:action.payload
                }
            //  [...propertiesByPage.properties,action.payload]; 
        case 'REMOVE':  
            return{ ...propertiesByPage,
                properties:propertiesByPage.properties.filter((single)=> single._id !== action.payload)
            }
        case 'UPDATE':  
            const id = action.payload._id
            const data= action.payload 
            return {...propertiesByPage,
                properties:propertiesByPage.properties.map((property)=>property._id === id?data:property) 
            }
         default:
            return propertiesByPage;
    }
}