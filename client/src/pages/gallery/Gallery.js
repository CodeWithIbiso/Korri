import Header from './Header';
import Navbar from './Navbar' 
import Body from './Body'  
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav' 
import MainNavSmall from '../../components/MainNavSmall' 
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';


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
function Gallery() { 
  const {width } = useWindowDimemsions()
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
  return (
    <> 
    {width >1017?
    <MainNav comp={'Gallery'}/>:  
    <MainNavSmall  /> }
    
    <Body/>
    <Footer/>
    </>
  );
}

export default Gallery;
