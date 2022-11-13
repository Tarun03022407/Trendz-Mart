import { Stack,Button } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { UnlockIcon } from "@chakra-ui/icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const Register=()=>{
    const [email, setEmail] = useState(""); 
    const[name,setName]=useState("") 
    const[last,setLast]=useState("") 
    const[number,setNumber]=useState("") 
    const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 
  const handleSubmit = (e) => { 
          e.preventDefault(); 
          setLoading(true); 
          console.log(name); 
          if(name!=="" && email!=="" && last!=="" && number!==""){ 
            alert("SignUp succssfull") 
          }else{ 
            alert('Fill details'); 
          } 
        }; 
    return (
        <div>
    
  
        <div>
 <div className="login-page" style={{width:"40%",height:"350px" ,margin:"auto",margin:"100px 0px 50px 400px",gap:"50px",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}> 
      <form onSubmit={handleSubmit} className="form" data-testid="login-form" style={{gap:"50px"}}> 
        
        <div style={{width:"90%",heigth:"850px",margin:"auto"}}>  
       <div> 
          <h2>Register New Account</h2> 
          <label> 
       <h5 style={{marginRight:"70%"}}>First Name</h5> 
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              // data-testid="email-input" 
              type="text" 
              placeholder="Name" style={{width:"480px",height:"30px"}} 
            /> 
          </label> 
        </div> 
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}>Last Name</h5> 
 
            <input 
              value={last} 
              onChange={(e) => setLast(e.target.value)} 
              // data-testid="email-input" 
              type="text" 
              placeholder="Last  name" style={{width:"480px",height:"30px"}} 
            /> 
          </label> 
        </div> 
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}>Email Address</h5> 
 
                 
               <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              // data-testid="email-input" 
              type="email" 
              placeholder="email" style={{width:"480px",height:"30px"}} 
            /> 
          </label> 
        </div> 
        
        <div> 
          <label> 
          <h5 style={{marginRight:"70%"}}> Phone Number</h5> 
 
            <input 
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
              // data-testid="email-input" 
              type="number" 
              placeholder="Phone Number" style={{width:"480px",height:"30px"}} 
            /> 
            <p style={{color:"grey"}}>Your mobile number will be used avail benefits such as joi Mart Cashback and ROne points</p> 
          </label> 
        </div> 
          </div> 
         
 
        
        
        <div> 
          <button disabled={loading} data-testid="form-submit" type="submit"> 
            SUBMIT 
          </button> 
          <p>AllReady Account?<a href="Login">LOGIN</a></p> 
        </div> 
      </form> 
       
    </div> 
    </div>
        </div>
    )
}
export default Register


// import { Button,Stack } from "@chakra-ui/react"

// const Login=()=>{
//     return (
//         <div>
//         <Stack  >
//    <Button marginRight="50px"  display= "inline-block"
// maxWidth=" 108px"
// whiteSpace= "nowrap"
// _hover={{ bg: "blue.500", color: " white"  }}
// overflow= "hidden" fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} >  <UnlockIcon/>      <u style={{marginLeft:"5px",marginTop:"5px"}} >Login</u>

//  </Button>
//  </Stack  >
//    </div>
//     )
// }
// // export default Login
// import { useContext } from "react"; 
// import { useState } from "react"; 
// import { Link, useNavigate } from "react-router-dom"; 
 
// function Register() { 
//   const [email, setEmail] = useState(""); 
//   const[name,setName]=useState("") 
//   const[last,setLast]=useState("") 
//   const[number,setNumber]=useState("") 
//   const [loading, setLoading] = useState(false); 
//   // const { loginUser, authState } = useContext(AppContext); 
//   const navigate = useNavigate(); 
//   const handleSubmit = (e) => { 
//     e.preventDefault(); 
//     setLoading(true); 
//     console.log(name); 
//     if(name!=="" && email!=="" && last!=="" && number!==""){ 
//       alert("SignUp succssfull") 
//     }else{ 
//       alert('Fill details'); 
//     } 
//   }; 
//   return ( 
//     <div className="login-page" style={{width:"40%",height:"350px" ,margin:"auto",margin:"100px 0px 50px 400px",gap:"50px",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}}> 
//       <form onSubmit={handleSubmit} className="form" data-testid="login-form" style={{gap:"50px"}}> 
        
//         <div style={{width:"90%",heigth:"850px",margin:"auto"}}>  
//        <div> 
//           <h2>Register New Account</h2> 
//           <label> 
//           <h5 style={{marginRight:"70%"}}>First Name</h5> 
//             <input 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               // data-testid="email-input" 
//               type="text" 
//               placeholder="Name" style={{width:"480px",height:"30px"}} 
//             /> 
//           </label> 
//         </div> 
//         <div> 
//           <label> 
//           <h5 style={{marginRight:"70%"}}>Last Name</h5> 
 
//             <input 
//               value={last} 
//               onChange={(e) => setLast(e.target.value)} 
//               // data-testid="email-input" 
//               type="text" 
//               placeholder="Last  name" style={{width:"480px",height:"30px"}} 
//             /> 
//           </label> 
//         </div> 
//         <div> 
//           <label> 
//           <h5 style={{marginRight:"70%"}}>Email Address</h5> 
 
                 
//                <input 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               // data-testid="email-input" 
//               type="email" 
//               placeholder="email" style={{width:"480px",height:"30px"}} 
//             /> 
//           </label> 
//         </div> 
        
//         <div> 
//           <label> 
//           <h5 style={{marginRight:"70%"}}> Phone Number</h5> 
 
//             <input 
//               value={number} 
//               onChange={(e) => setNumber(e.target.value)} 
//               // data-testid="email-input" 
//               type="number" 
//               placeholder="Phone Number" style={{width:"480px",height:"30px"}} 
//             /> 
//             <p style={{color:"grey"}}>Your mobile number will be used avail benefits such as joi Mart Cashback and ROne points</p> 
//           </label> 
//         </div> 
//           </div> 
         
 
        
        
//         <div> 
//           <button disabled={loading} data-testid="form-submit" type="submit"> 
//             SUBMIT 
//           </button> 
//           <p>AllReady Account?<a href="Login">LOGIN</a></p> 
//         </div> 
//       </form> 
       
//     </div> 
//   ); 
// } 
// export default Register;
