export default (queue=false,action)=>{
    switch (action.type) {
        case 'SET':
            return queue=!queue; 
 
        default:
            return queue;
    }
}