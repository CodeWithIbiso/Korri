


const PropertyType = {
    orig:true,
    none:false,
    Placeholder:'PropertyType' ,
    label:'Property type' ,
    DropPlaceholder:'Select a property type :',
    names:[ 
      'Apartment',
      'Bungalow',
      'Duplex',
      'Self Contained',
      'Flat',
      'Shop',
      'Other'
    ],
    titlePlaceholder:'Apartment'
}
const Baths =  {
    orig:false,
    none:false,
    Placeholder:'Baths' ,
    titlePlaceholder:'2'

}
const Bedrooms =  {
orig:false,
none:false,
Placeholder:'Bedrooms' ,
titlePlaceholder:'3'
}
const Kitchens =  {
orig:false,
none:false,
Placeholder:'Kitchens' ,
titlePlaceholder:'3'
}
const RoomDimensions =  {
orig:false,
none:false,
Placeholder:'RoomDimensions' ,
titlePlaceholder:'5 x 4 sqft'
}
const PriceMonthlyYearly =  {
orig:false,
none:false,
Placeholder:'PriceMonthlyYearly' ,
titlePlaceholder:'5000 monthly'
}
const Location =  {
orig:true,
none:false,
Placeholder:'Location' ,
DropPlaceholder:'Select a location :',
names:[ 
    'Port harcourt',
    'Lagos',
    'Benin',
    'Abuja'
],
titlePlaceholder:'Port Harcourt' 
}
const Designation =  {
orig:true,
none:false,
Placeholder:'Designation' ,
DropPlaceholder:'Select a designation :',
names:[ 
    'For Rent',
    'For Sale'
],
titlePlaceholder:'For Rent'
}
const Furnishing =  {
orig:true,
none:false,
Placeholder:'Furnishing' ,
DropPlaceholder:'Select a designation :',
names:[  
    'Furnished',
    'Unfurnished'
],
titlePlaceholder:'Furnished'
} 


 
const GlobalPropertyType =  {
    orig:false,
    none:false,
    Placeholder:'GlobalPropertyType' ,
    titlePlaceholder:'Car',
    label:'Property type'
}
const GlobalPrice =  {
    orig:false,
    none:false,
    Placeholder:'GlobalPrice' ,
    titlePlaceholder:'5000 monthly',
    label:'Price'
}
const GlobalQuantity =  {
        orig:false,
        none:false,
        Placeholder:'GlobalQuantity' ,
        titlePlaceholder:'3',
        label:'Quantity'
}
const GlobalLocation =  {
        orig:false,
        none:false,
        Placeholder:'GlobalLocation' ,
        titlePlaceholder:'Port harcourt',
        label:'Location'
}
const Props={
    Kitchens,
    Furnishing,
    PropertyType,
    Baths,
    Bedrooms,
    Designation,
    Location,
    RoomDimensions,
    PriceMonthlyYearly,

    GlobalPropertyType,
    GlobalPrice,
    GlobalQuantity,
    GlobalLocation
}




export default Props