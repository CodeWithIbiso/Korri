import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
    searchIndex:[String],

    creator:String,
    createdAt: {
        type:Date ,
        default: new Date()
    },

    PropertyType:String,
    Bedrooms:String,
    Baths:String,
    Designation:String,
    Kitchen:String,
    Furnishing:String,
    Location:String,
    RoomDimensions:String,
    PriceMonthlyYearly:String, 
    DateAvailable:  Date,  
    // DateAvailable:  String, 
    // DateAvailable:{
    //     type: Date,
    //     default: new Date()
    // },
    Image:[String],
    Description:String,
    Video:String,
    GlobalPropertyType:String,
    GlobalPrice:String,
    GlobalQuantity:String,
    GlobalLocation:String
})

const globalPropertySchema = mongoose.Schema({
    searchIndex:[String],

    creator:String,
    createdAt: {
        type:Date ,
        default: new Date()
    },

    PropertyType:String,
    Bedrooms:String,
    Baths:String,
    Designation:String, 
    Kitchen:String,
    Furnishing:String,
    Location:String,
    RoomDimensions:String,
    PriceMonthlyYearly:String, 

    
    DateAvailable:  Date,  
    Image:[String],
    Description:String,
    Video:String,
    GlobalPropertyType:String,
    GlobalPrice:String,
    GlobalQuantity:String,
    GlobalLocation:String
})
 

export const propertyModelproperties = mongoose.model('propertyModelproperties',propertySchema)
export const globalPropertyModelproperties = mongoose.model('globalPropertyModelproperties',globalPropertySchema)

// const data = new propertyModelproperties({Image:59})
// data.save()
// export default propertyModelproperties 
 




 