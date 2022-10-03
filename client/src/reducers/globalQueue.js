export default (total={queue:[],ids:[],totalCued:0},action)=>{
    switch (action.type) {
        case 'ADD_G':
            // console.log(action.payload)
            if(!total.queue.includes(action.payload)){
                return {...total,
                    queue:[action.payload,...total.queue],
                    ids:[action.payload._id,...total.ids] ,
                    totalCued: total.totalCued+1 
                }
            };
            return total;
        case 'REMOVE_FROM_QUEUE_G':
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
        case 'CLEAR_G':
            return {...total,
                queue:[],
            ids:[],totalCued:0}; 
 
        default:
            return total;
    }
}