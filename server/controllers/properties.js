import mongoose from "mongoose"
import {propertyModelproperties , globalPropertyModelproperties } from "../models/propertyModel.js"

// 
export const fetchPropertiesByCreator=async (req,res)=>{
    // console.log('here') 
    const {creator,searchQuery,page,propertyType}=req.query   
    // console.log(req.query)   
    const LIMIT = 8
    const startIndex = (Number(page)-1)* LIMIT
    try {  
        if (searchQuery!=='none'){
            let LIMITs = 8

            //  console.log(searchQuery)
             const tags = searchQuery.split(' ').join('').toLowerCase()
             let properties=[]
             let count=0
             // console.log(tags)
            
            const countx = await propertyModelproperties.countDocuments( {searchIndex:{$all : [tags]},creator}) 
            count= countx+count
            // console.log('countx23',countx)
            const xx = await propertyModelproperties.find( {searchIndex:{$all : [tags]},creator}).sort({_id:-1}).limit(LIMITs).skip(startIndex)
            
            properties=[...properties,...xx]
            // console.log('here') 
            if( properties.length<LIMIT){         
             LIMITs=LIMITs-properties.length
             const county = await globalPropertyModelproperties.countDocuments( {searchIndex:{$all : [tags]},creator}) 
             count= county+count
            //  console.log('county32',county)
            //  console.log('countx33',countx)
            //  console.log('count34',count)
             let yy
             const startIndexes = startIndex - countx
             if(Number(page)<2) {yy = await globalPropertyModelproperties.find( {searchIndex:{$all : [tags]},creator}).sort({_id:-1}).limit(LIMITs).skip(startIndex)}
             if(Number(page)>1) {yy = await globalPropertyModelproperties.find( {searchIndex:{$all : [tags]},creator}).sort({_id:-1}).limit(LIMITs).skip(startIndexes)}
             properties=[...properties,...yy]
             
            }
            // 
            // console.log('count40',count)
            // console.log('total1',Math.ceil(count/8))
            const toReturn={properties:properties,currentPage:Number(page),numberOfPages:Math.ceil(count/LIMIT)}
            // console.log(toReturn.properties)    
            // console.log(toReturn.properties.length)    
            res.status(200).json(toReturn)    
             
        }if(searchQuery==='none'){
        if(propertyType==='properties'){
            // console.log('we are here now first')
        const count = await propertyModelproperties.countDocuments( {creator}) 
        const propertiesX     = await propertyModelproperties.find( {creator}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            
        const toReturn={properties:propertiesX,currentPage:Number(page),numberOfPages:Math.ceil(count/LIMIT)}
            res.status(200).json(toReturn) 
            // console.log(toReturn.properties.length)
        }  
        if(propertyType==='store'){
        const count = await globalPropertyModelproperties.countDocuments( {creator}) 
        const propertiesX     = await globalPropertyModelproperties.find( {creator}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            
        const toReturn={properties:propertiesX,currentPage:Number(page),numberOfPages:Math.ceil(count/LIMIT)}
        res.status(200).json(toReturn) 
        // console.log(toReturn.properties.length)  
        // console.log('we are here now second')
        }
    }
         
    } catch (error) {
        res.status(404).json({message:error})
    } 
} 


export const fetchGlobalPropertiesById=async (req,res)=>{
    // console.log('here') 
    const {id:searchQuery}=req.params   
    // console.log(searchQuery)   
    const LIMIT = 6
    try { 
         
        const tags = searchQuery.split(' ').join('').toLowerCase()
        if(tags.includes(',')){ 

            const splitted = searchQuery.split(',') 
            const properties     = await globalPropertyModelproperties.find( {_id:{$in : splitted}}).limit(LIMIT) 
              
            res.status(200).json(properties) 
        }else{ 
            // console.log(req.params)
             const properties = await globalPropertyModelproperties.find( {_id:{$all : [tags]}}).limit(LIMIT) 
             
             res.status(200).json(properties)
        } 
    } catch (error) {
        res.status(404).json({message:error})
    } 
} 
export const fetchPropertiesById=async (req,res)=>{
    const {id:searchQuery}=req.params   
    // console.log(searchQuery) 
    const LIMIT = 6
    try { 
         
        const tags = searchQuery.split(' ').join('').toLowerCase()
        if(tags.includes(',')){ 

            const splitted = searchQuery.split(',') 
            const properties     = await propertyModelproperties.find( {_id:{$in : splitted}}).limit(LIMIT) 
              
            res.status(200).json(properties) 
        }else{ 
            // console.log(req.params)
             const properties = await propertyModelproperties.find( {_id:{$all : [tags]}}).limit(LIMIT) 
             
             res.status(200).json(properties)
        } 
    } catch (error) {
        res.status(404).json({message:error})
    } 
} 
export const fetchPropertiesByGallerySearch=async (req,res)=>{
    const {searchQuery,page}=req.query    

    const LIMIT = 8
    // console.log(page)
    // console.log(req.query)
    const startIndex = (Number(page)-1)* LIMIT
    try {

        // const PropertyType=new RegExp(Type,'i')     
        const tags = searchQuery.split(' ').join('').toLowerCase()
        // console.log(tags)
        if(tags.includes(',')){ 
            
            const splitted = searchQuery.split(',')
            // let arr = []
            // let total = 0
            
            const count = await propertyModelproperties.countDocuments( {searchIndex:{$in : splitted}}) 
            // console.log(splitted)
            // console.log(searchQuery)
            // console.log(count)
            const total = count
            const propertiesX     = await propertyModelproperties.find( {searchIndex:{$in : splitted}}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            const arr=  propertiesX
            // for(var i = 0;i<splitted.length;i++){ 
                
                //     const count = await propertyModelproperties.countDocuments( {searchIndex:{$all : [splitted[i]]}}) 
                //     total = total + count
                //     console.log(total)
                //     // LIMIT
                //     const propertiesX     = await propertyModelproperties.find( {searchIndex:{$all : [splitted[i]]}}).sort({_id:-1}).limit(1).skip(startIndex)
                //     arr= [...arr,...propertiesX]
                //     // arr.push(propertiesX)
                // }
                


            // const properties  = arr
            // console.log('here'+total)
            // console.log('here',count,arr.length)
            // console.log(total)
            // console.log(propertiesX+'the properties are here')
            const toReturn={properties:propertiesX,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
            // console.log('we are here now second')
            res.status(200).json(toReturn)
            // console.log(typeof(tags))
            // console.log(properties.length)

            // console.log(tags) 
            // console.log(searchQuery)
            // console.log(tags.includes(','))
        }else{ 
            const total = await propertyModelproperties.countDocuments( {searchIndex:{$all : [tags]}}) 
            const properties = await propertyModelproperties.find( {searchIndex:{$all : [tags]}}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            // res.status(200).json(properties)  
            // console.log('here')
            // console.log(total)
            // console.log(properties.length)
            // console.log(startIndex+'start index')
            const toReturn={properties:properties,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
            res.status(200).json(toReturn)    
        }
        // console.log(properties.length)
        
        // console.log(searchQuery)
        
    } catch (error) {
        res.status(404).json({message:error})
    } 
}  
export const fetchPropertiesByStoreSearch=async (req,res)=>{ 
    const {searchQuery,page}=req.query 
    const LIMIT = 8
    // console.log(page)
    // console.log(req.query)
    const startIndex = (Number(page)-1)* LIMIT
    try { 
        // const PropertyType=new RegExp(Type,'i')     
        const tags = searchQuery.split(' ').join('').toLowerCase()
        if(tags.includes(',')){ 
            const splitted = searchQuery.split(',')
            const count     = await globalPropertyModelproperties.countDocuments( {searchIndex:{$in :  splitted }}) 
            const total = count
            const propertiesX     = await globalPropertyModelproperties.find( {searchIndex:{$in : splitted}}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            const    arr=  propertiesX
                // arr.push(propertiesX)
                
            


            const toReturn  = {properties:propertiesX,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
            res.status(200).json(toReturn)  
            // console.log(typeof(tags))
            // console.log(properties.length)

            // console.log(tags) 
            // console.log(searchQuery)
            // console.log(tags.includes(','))
        }else{ 
            const total = await globalPropertyModelproperties.countDocuments( {searchIndex:{$all : [tags]}}) 
            const properties = await globalPropertyModelproperties.find( {searchIndex:{$all : [tags]}}).sort({_id:-1}).limit(LIMIT).skip(startIndex)
            
            
            const toReturn={properties:properties,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
            // console.log(total)
            // console.log(properties.length)
            res.status(200).json(toReturn)  
            // console.log(tags) 
            // console.log(properties.length)
        }
 

    } catch (error) {
        res.status(404).json({message:error})
    } 
}  

export const fetchPropertiesBySearch=async (req,res)=>{
    // console.log('jhsdf')
    const {searchQuery,Category,minPrice,Baths,Furnished,Type,maxPrice,Bedroom,roomSize}=req.query 
    try { 
        const PropertyType=new RegExp(Type,'i')    
        // const Designation=Category.toString()//.toLowerCase()
        const Designation=Category.toString().split(' ').join('').toLowerCase()
        const RoomDimensions=roomSize.toString().toLowerCase()
        const tags = searchQuery.split(' ').join('').toLowerCase()

        // console.log(Designation,'d')
        // console.log(Category,'c')
        // console.log(searchQuery,'s')

        let search ={} 

        if(Type !=='none'){search = {...search,PropertyType}}
        if(roomSize !=='none'){search = {...search,RoomDimensions}}
        if(minPrice !=='none'){search = {...search,PriceMonthlyYearly:{$gte :minPrice}}}
        if(maxPrice !=='none'){search = {...search,PriceMonthlyYearly:{$lte :maxPrice}}}
        if(Furnished !=='none') {if(Furnished =='yes'){search = {...search,Furnishing:'Furnished'}}else{search = {...search,Furnishing:'UnFurnished'}}}
        if(Category !=='none'){search = {...search,searchIndex:{$all : [Designation]}}}
        // if(Category !=='none'){search = {...search,Designation:Category}}
        if(Baths !=='none'){search = {...search,Baths}}
        if(Bedroom !=='none'){search = {...search,Bedrooms:Bedroom}}

        // console.log(search) 
        const check = Object.keys(search).length === 0
        if(check === true){
            // console.log(check)
        const properties = await propertyModelproperties.find( {searchIndex:{$all : [tags]}}).limit(9).sort({_id:-1})
        res.status(200).json(properties)  

            // console.log(check)
        }else{
        const properties = await propertyModelproperties.find(search).limit(9).sort({_id:-1}) 
        res.status(200).json(properties)  
        }

    } catch (error) {
        res.status(404).json({message:error})
    } 
}  

export const getProperties=async (req,res)=>{
    // console.log(req)
    try {
        const properties = await propertyModelproperties.find().sort({_id:-1})
        res.status(200).json(properties)
    } catch (error) {
        res.status(404).json({message:error})
    } 
}   
export const getPropertiesByPage=async (req,res)=>{
    // const {page}=req.body
    const {id:page} = req.params
    // console.log(page)
    try {
        const LIMIT = 8
        const startIndex = (Number(page)-1)* LIMIT
        const total = await propertyModelproperties.countDocuments({})
        const properties = await propertyModelproperties.find().sort({_id:-1}).limit(LIMIT).skip(startIndex)
        const toReturn={properties:properties,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
        res.status(200).json(toReturn)
    } catch (error) {
        res.status(404).json({message:error})
    } 
}   

export const createProperty=async (req,res)=>{
    const property = req.body
    const Designation = property.Designation.split(' ').join('').toLowerCase() 
    const Locate = property.Location.split(' ').join('').toLowerCase() 
    const  searchParams= [property.PropertyType.toLowerCase(),Designation,Locate,property.Furnishing.toLowerCase() ] 
    const searchIndex = searchParams
    const newProperty = new propertyModelproperties({...property,creator:req.userId, createdAt: new Date().toISOString(), searchIndex})
    // console.log(newProperty)
    try {
        await newProperty.save()
        res.status(201).json(newProperty)
    } catch (error) {
        res.status(409).json({message:error})
    }  
}


export const updateProperty=async (req,res)=>{
    const {id:_id} = req.params
    const userId = req.userId

    const {creator} =await propertyModelproperties.findOne({_id}).sort({_id:-1})
    if(userId !== creator) return res.status(400).send('user dont match')
    const property = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no property with that id')
    if(userId === creator) {
        const updatedProperty =  await  propertyModelproperties.findByIdAndUpdate(_id,property,{new:true}).sort({_id:-1})
        res.json(updatedProperty) 
    }
    
}


export const deleteProperty=async (req,res)=>{
    const {id:_id} = req.params
    const userId = req.userId

    const {creator} =await propertyModelproperties.findOne({_id}).sort({_id:-1})
    if(userId !== creator) return res.status(400).send('user dont match')

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no property with that id')
    
    if(userId === creator) {
        await  propertyModelproperties.findByIdAndRemove(_id).sort({_id:-1})
        res.json({message:'successful deletion'})
    }
}
// GLOBAL 

export const getGlobalPropertiesByPage=async (req,res)=>{
    const {id:page} = req.params
    // console.log(page)
    try {
        const LIMIT = 8
        const startIndex = (Number(page)-1)* LIMIT
        const total = await globalPropertyModelproperties.countDocuments({})
        const properties = await globalPropertyModelproperties.find().sort({_id:-1}).limit(LIMIT).skip(startIndex)
        const toReturn={properties:properties,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)}
        // console.log(toReturn.properties.length,total)
        res.status(200).json(toReturn)
    } catch (error) {
        res.status(404).json({message:error})
    } 
}
export const getGlobalProperties=async (req,res)=>{
    try {
        const properties = await globalPropertyModelproperties.find().sort({_id:-1})
        res.status(200).json(properties)
    } catch (error) {
        res.status(404).json({message:error})
    } 
}
export const createGlobalProperty=async (req,res)=>{
    
    const property = req.body
    // console.log(property)
    const Designation = property.Designation.split(' ').join('').toLowerCase() 
    const Locate = property.GlobalLocation.split(' ').join('').toLowerCase() 
    const  searchParams= [property.GlobalPropertyType.toLowerCase(),Designation,Locate,property.GlobalPrice] 
    const searchIndex = searchParams
    // const newProperty = new globalPropertyModelproperties({...property,creator:req.userId, createdAt: new Date().toISOString(), searchIndex}).sort({_id:-1})

    const newProperty = new globalPropertyModelproperties({...property,creator:req.userId, createdAt: new Date().toISOString(),searchIndex})
    try {
        await newProperty.save()
        res.status(201).json(newProperty)
    } catch (error) {
        res.status(409).json({message:error})
    } 
}


export const updateGlobalProperty=async (req,res)=>{
    const {id:_id} = req.params
    const userId = req.userId

    const {creator} =await globalPropertyModelproperties.findOne({_id}).sort({_id:-1})
    if(userId !== creator) return res.status(400).send('user dont match')
    const property = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')
    if(userId === creator) {    
        const updatedProperty =  await  globalPropertyModelproperties.findByIdAndUpdate(_id,property,{new:true}).sort({_id:-1})
        res.json(updatedProperty)
    }
}

 
export const deleteGlobalProperty=async (req,res)=>{
    const {id:_id} = req.params
    const userId = req.userId

    const {creator} =await globalPropertyModelproperties.findOne({_id}).sort({_id:-1})
    if(userId !== creator) return res.status(400).send('user dont match')

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('no post with that id')
    
    if(userId === creator) {
        await  globalPropertyModelproperties.findByIdAndRemove(_id).sort({_id:-1})
        res.json({message:'successful deletion'})
    }
} 
