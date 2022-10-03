import react, {useEffect} from 'react'
import { CssBaseline } from '@material-ui/core'; 
import Access from './pages/access/Access'; 
import AboutUs from './pages/about/AboutUs'  
import Dashboard from './pages/dashboard/Dashboard'  
import Gallery from './pages/gallery/Gallery'  
import Home from './pages/home/Home'  
import Store from './pages/store/Store'  
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Product from './pages/product/Product' 
import StoreProduct from './pages/storeProduct/Product' 
import { useDispatch } from 'react-redux';
import { getProperties } from './actions/properties';
import { getGlobalProperties } from './actions/globalProperties';
import Test from './pages/test/Test';

function App() {  
    const user = JSON.parse(localStorage.getItem('userProfile'))
    // console.log(user)
  const dispatch = useDispatch()
  
    
  useEffect(() => {
    // dispatch(getProperties()) 
    // dispatch(getGlobalProperties()) 
    
  }, [window.location.href]) 
  
  return (
    <Router>
    <CssBaseline/> 
    <Routes>
        <Route exact path='/'         element={<Home/>}/> 
        <Route exact path='/signing'   element={ <Access/>}/> 
        {/* <Route exact path='/signin'   element={!user ?<Access/>:<Navigate replace to='/'/>}/>  */}
        {/* <Route exact path='/signup'   element={<Access/>}/>  */}
        <Route exact path='/search'   element={<Home/>}/> 
        <Route exact path='/product/:id'  element={<Product/>}/> 
        <Route exact path='/store/product/:id'  element={<StoreProduct/>}/> 
         <Route exact path='/about'    element={<AboutUs/>}/> 
        <Route exact path='/account'  element={<Dashboard/>}/>
        {/* <Route exact path='/account'  element={user===null?<Navigate replace to='/'/>:<Dashboard/>}/> */}
        <Route exact path='/gallery'  element={<Gallery/>}/> 

        <Route exact path='/buy'  element={<Gallery/>}/> 
        <Route exact path='/rent'  element={<Gallery/>}/> 
        {/* <Route exact path='/sell'  element={<Gallery/>}/>  */}

        <Route exact path='/store'  element={<Store/>}/>  
        <Route exact path='/test'  element={<Test/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
