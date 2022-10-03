import { combineReducers } from "redux";
import properties from './properties'
import globalProperties from './globalProperties'
import queue from './queue'
import queueState from './queueState'
import globalQueueState from './globalQueueState'
import globalQueue from './globalQueue'
import authReducer from './auth'
import loading from './Loading'
import error from './Error'
import propertyById from './propertyById'
import globalPropertyById from './globalPropertyById'
import creator from './propertiesByCreator'
 
export default combineReducers({
    properties,
    globalProperties,
    queue,
    globalQueue,
    queueState,
    globalQueueState,
    authReducer,
    loading,
    error,
    propertyById,
    globalPropertyById,
    creator
     
})