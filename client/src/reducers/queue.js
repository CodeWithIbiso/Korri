export default (total={queue:[],ids:[],totalCued:0},action)=>{
    switch (action.type) {
        case 'ADD':
            // console.log(total.ids)
            if(!total.queue.includes(action.payload)){
                // total.ids.push(action.payload._id)
                return {...total,
                    queue:[action.payload,...total.queue],
                    ids:[action.payload._id,...total.ids] ,
                    totalCued: total.totalCued+1 
                }
            };
            return total;
        case 'REMOVE_FROM_QUEUE':
            // console.log(action.payload) 
            const x =total.queue.filter((single)=> single._id !== action.payload)
            const y = total.ids.filter((single)=> single !== action.payload)
            // console.log(total)
            // console.log(x)
            // console.log(y)
             return {...total,
                queue: x,
                ids:y ,
                totalCued: total.totalCued-1

            }
         
        case 'CLEAR': 
            return {...total,
                queue:[],
            ids:[]
        
            ,totalCued:0}; 
 
        default:
            return total;
    }
}