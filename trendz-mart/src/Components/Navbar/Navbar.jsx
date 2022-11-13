import Country from "./Country"
import CustomerCare from "./CustomerCare"
// import Register from "./Register"
import Login from "./Login"
import { NavLink } from "react-router-dom"
import { Button } from "@chakra-ui/react"
import {UnlockIcon} from "@chakra-ui/icons"

function Navbar(){

return (
< >

<div  style={{display:"flex", backgroundColor:"white", fontWeight:"bold",position:"sticky" ,top:"0px" ,zIndex:"99",    height: "30px",   borderBottom: "1px solid #f4f4f4",    width: "100%" ,    fontFamily: "Montserrat,sans-serif", }}>
<Country  />
<CustomerCare />
{/* <Register/> */}
{/* <Login /> */}

<div className='navbarr'> 
    {/* <NavLink to='/country'> */}
        {/* Country</NavLink>  */}
    {/* <NavLink to='/customerCare'>Customer Care</NavLink>  */}
         <NavLink to="/Login"> <Button marginRight="50px"  display= "inline-block"
maxWidth=" 108px"
whiteSpace= "nowrap"
_hover={{ bg: "blue.500", color: " white"  }}
overflow= "hidden" fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} >  <UnlockIcon/>      <u style={{marginLeft:"5px",marginTop:"5px"}} >Login</u>

 </Button></NavLink> 
 <NavLink to='/Register'><Button marginRight="50px"  display= "inline-block"
maxWidth=" 108px"
whiteSpace= "nowrap"
_hover={{ bg: "blue.500", color: " white"  }}
overflow= "hidden" fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} >       <u style={{marginLeft:"5px",marginTop:"5px"}} > 🖊️ Register</u>

 </Button></NavLink> 
  
</div> 

 </div> 
</>
)
}
export default Navbar