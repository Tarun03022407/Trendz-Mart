
import './App.css';

import NavbarMiddle from "./Components/NavbarMiddle/NavbarMiddle"
import Navbar from "./Components/Navbar/Navbar"
import Home from './Components/Home/Home';
import Country from './Components/Navbar/Country';
import CustomerCare from './Components/Navbar/CustomerCare';
import Register from './Components/Navbar/Register';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Navbar/Login';
import DownNavbar from "./Components/DownNavbar/DownNavbar"
import SingleProduct from "./Components/OneOfAKind/oneofakindsingle"
import OneOfAKind from './Components/OneOfAKind/OneOfAKind';


function App() {
  return (
    <div className="App">
   
<Navbar />
<NavbarMiddle />
<DownNavbar />
   <Routes> 
   
         
        <Route path='/'  element={<Home/>} /> 
        <Route path='/Country'  element={<Country/>} /> 
      
        <Route path='/Contact' element={<h1>Cart</h1>} /> 
        {/* <Route path='/Pin' element={<Pin/>} />  */}
        {/* <Route path='/Cart' element={<h1>Cart</h1>} />  */}
        <Route path='/Register' element={<Register />} /> 
        <Route path='/Login' element={<Login />} /> 
        {/* <Route path='*' element={<Error/>} />  */}
        <Route path="/products" element={<SingleProduct/>}/>
        <Route path="/products/:id" element={<OneOfAKind />}/>
 
      </Routes>


  

    </div>
  );
}

export default App;
