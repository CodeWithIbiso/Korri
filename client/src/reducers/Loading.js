
export default (loading={isLoading:false},action)=>{
    switch (action.type) {
        case 'SET_LOADING':    
            return {...loading,isLoading:true}
        case 'REMOVE_LOADING': 
            return {...loading,isLoading:false}

         default:
            return loading;
    }
}