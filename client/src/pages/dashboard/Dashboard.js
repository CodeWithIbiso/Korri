// import react,{useEffect} from 'react'
import Header from './Header'; 
import Footer from '../../components/Footer';  
import MainNav from '../../components/MainNav';  
import {useEffect, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { getProperties } from '../../actions/properties'
import { getGlobalProperties } from '../../actions/globalProperties';
import { useDispatch } from 'react-redux';
import MainNavSmall from '../../components/MainNavSmall';  


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
function Dashboard() { 
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate=useNavigate()
  const user = JSON.parse(localStorage.getItem('userProfile'))
  useEffect(() => {
    // console.log(user) 
    if(user===null)navigate('/') 
    dispatch(getGlobalProperties)
    dispatch(getProperties)
  },[window.location.reload])
  
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      // behavior: 'smooth'
      behavior:'auto'
    })
  }
  useEffect(()=>{
    scrollToTop()
  })
  const {width } = useWindowDimemsions()
  
  return (
    <> 

  {width >1017?
    <MainNav comp={'Dash'}/>  :  
    <MainNavSmall  /> }
    <Header/>  
    <Footer/>
    </>
  );
}

export default Dashboard;
