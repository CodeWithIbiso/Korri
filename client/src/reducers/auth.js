const authReducer =(state={  authData:null},action)=>{
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('userProfile',JSON.stringify({...action?.data}))
            // console.log(JSON.parse(localStorage.getItem('userProfile')))
            return {...state,authData:action?.data}
         case 'LOGOUT':
            localStorage.clear()
            return {...state,authData:null}
     
        default:
            return state;
    }
}

// const authReducer= (state={},action)=>{
//     switch (action.type) {
//         case 'AUTH':
//              return action.payload; //him
//         default:
//             return state;
//     }
// } 
export default authReducer