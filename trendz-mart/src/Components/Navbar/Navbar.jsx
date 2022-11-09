import Country from "./Country"
import CustomerCare from "./CustomerCare"
import Register from "./Register"
import Login from "./Login"

function Navbar(){

return (
< >
<div  style={{display:"flex",fontWeight:"bold",position:"500" ,    height: "30px",zIndex:"200",    borderBottom: "1px solid #f4f4f4",    width: "100%" ,    fontFamily: "Montserrat,sans-serif", }}>
<Country  />
<CustomerCare />
<Register/>
<Login />


</div>
</>
)
}
export default Navbar