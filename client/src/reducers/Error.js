
export default (error={isError:false,isExist:false},action)=>{
    switch (action.type) {
        case 'SET_ERROR':    
            return  {...error,isError:true,isExist:action.payload===401? true:false}
        case 'REMOVE_ERROR': 
            return {...error,isError:false,isExist:false}

         default:
            return error;
    }
}