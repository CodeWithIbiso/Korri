import express from 'express'
import {getProperties, createProperty,fetchPropertiesById, updateProperty,getPropertiesByPage, deleteProperty,fetchPropertiesBySearch,fetchPropertiesByGallerySearch, fetchPropertiesByCreator } from '../controllers/properties.js'
import {getGlobalProperties,fetchGlobalPropertiesById, createGlobalProperty,getGlobalPropertiesByPage,  updateGlobalProperty, deleteGlobalProperty ,fetchPropertiesByStoreSearch} from '../controllers/properties.js'
// import propertyModel from '../models/propertyModel.js'
import auth from '../middleware/auth.js'

// Set up router

const router = express.Router()

// router.get('/',getProperties)
// router.post('/',createProperty)
// router.patch('/:id',updateProperty)
// router.delete('/:id',deleteProperty)



// router.get('/store',getGlobalProperties)
// router.post('/store',createGlobalProperty)
// router.patch('/store/:id',updateGlobalProperty)
// router.delete('/store/:id',deleteGlobalProperty)

router.get('/search',fetchPropertiesBySearch)
router.get('/gallery',fetchPropertiesByGallerySearch)
router.get('/store',fetchPropertiesByStoreSearch)


router.get('/',getProperties)
router.get('/page/:id',getPropertiesByPage)
router.get('/id/:id',fetchPropertiesById)
router.get('/account/params',fetchPropertiesByCreator)
router.get('/store/product/id/:id',fetchGlobalPropertiesById)
router.post('/',auth,createProperty)
router.patch('/:id',auth,updateProperty)
router.delete('/:id',auth,deleteProperty) 



router.get('/store',getGlobalProperties)
router.get('/store/:id',getGlobalPropertiesByPage)
router.post('/store',auth,createGlobalProperty)
router.patch('/store/:id',auth,updateGlobalProperty)
router.delete('/store/:id',auth,deleteGlobalProperty)




export default router


