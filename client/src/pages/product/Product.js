import ProductNav from './ProductNav' 
import ProductBody from './ProductBody'  
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav'; 
import { useEffect ,useState} from 'react';
import MainNavSmall from '../../components/MainNavSmall'; 
import {useLocation} from 'react-router-dom'
import { getProperties } from '../../actions/properties';
import { useDispatch } from 'react-redux';


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
function Product() { 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProperties)
  })
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
    <MainNav comp={'Product'}/>:  
    <MainNavSmall  /> }
    <ProductBody/>
    <Footer/>
    </>
  );
}

export default Product   ;
