import './App.css';
import {Route, Routes,useLocation   } from "react-router-dom";
import Home from './pages/Home';
import Categories from './pages/Categories';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  let { url } = useLocation ();
  console.log(url);
  return (
    <div>
       <Navbar/>
       <Routes>
        <Route path='/'                     element={<Home/>}></Route>
        <Route path='/Categories' element={<Categories/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes> 
       <Footer/>
    </div>
  );
}

export default App;
