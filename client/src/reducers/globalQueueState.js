export default (queue=false,action)=>{
    switch (action.type) {
        case 'SETG':
            return queue=!queue; 
 
        default:
            return queue;
    }
}