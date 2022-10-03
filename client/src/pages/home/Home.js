import Header from './Header';
// import Navbar from './Navbar' 
import MainNav from '../../components/MainNav'
import MainNavSmall from '../../components/MainNavSmall'
import Body from './Body'  
import Footer from '../../components/Footer';
import  { useEffect,useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom'
import decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { getProperties } from '../../actions/properties';

function useWindowDimemsions(){
  const [width,setWidth] = useState(window.innerWidth)
  const [height,setHeight] = useState(window.innerHeight)
  const location = useLocation() 
  const updateWidthAndHeight=()=>{
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
  }
  useEffect
  (() => {
  window.addEventListener("resize",updateWidthAndHeight)
  },[location])
  return{
      width,
      height
  }
}
function Home() {   
  const {width } = useWindowDimemsions()
  // console.log(width)

  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('userProfile'))
  useEffect(()=>{
    dispatch(getProperties()) 


    const token = user?.token
    if(token){
      const decodedToken = decode(token)
      if(decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({type:'LOGOUT'})
        navigate('/')
      }
    }
    // setUser(user)
  },[location])
  return (
    <> 
    {/* <Navbar/> */}
    {width >1017?
    <MainNav comp={'Main'}/>:  
    <MainNavSmall  /> }
    <Header/>  
    <Body/>
    <Footer/>
    </>
  );
}

export default Home;
