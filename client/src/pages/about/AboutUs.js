import Header from './Header';
import Navbar from './Navbar' 
import Body from './Body'  
import Footer from '../../components/Footer';
import MainNav from '../../components/MainNav'

function Home() { 
  return (
    <> 
    <MainNav comp={'About'}/>
    {/* <Navbar/> */}
    <Header/> 
    <Body/>
    <Footer/>
    </>
  );
}

export default Home;
