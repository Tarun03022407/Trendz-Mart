import { Stack,Button,Text,Link,Image, Input  ,Checkbox,CheckboxGroup} from "@chakra-ui/react"
import { useContext } from "react"; 
import { useState } from "react"; 
import {  useNavigate } from "react-router-dom"; 




const Register=()=>{
      const [email, setEmail] = useState(""); 
  const[name,setName]=useState("") 
  const[last,setLast]=useState("") 
  const[password,setPassword]=useState("")
  const[number,setNumber]=useState("") 
  const [loading, setLoading] = useState(false); 
  
//    const { loginUser, authState } = useContext(AppContext); 
   const navigate = useNavigate(); 
   const handleSubmit = (e) => { 
        e.preventDefault(); 
        setLoading(true); 
        console.log(name); 
        if(name!=="" && email!=="" && last!=="" && number!==""){ 
          alert("SignUp succssfull") 
          navigate("/login")
        }else{ 
          alert('Fill details'); 
        } 
      }; 
    return (
        <div>
             <Stack  >
        <Text fontFamily="Montserrat,sansSerif" fontWeight="700" fontSize="1.125rem" marginBlockStart="0.83em" marginBlockEnd="0.83em" wordBreak="break-word"> MYTRENDZ</Text>
        <Text marginBottom="10px" fontWeight="500" fontFamily="Montserrat,sansSerif" fontSize="0.825rem" >REGISTRATION</Text>

        <Text fontFamily="Montserrat,sansSerif"  >REGISTER WITH YOUR SOCIAL MEDIA ACCOUNT</Text>

        <div style={{height:"46px",margin:"auto" , marginTop:"30px",  textAlign:"center",color:"white", width:"400px", background:"#3b5998" }} > <Link href="https://www.facebook.com"> <Text fontSize="30px">f</Text></Link></div>
        <div style={{height:"46px",margin:"auto",marginTop:"30px", width:"400px" ,  alignItems:"center" ,justifyContent:"center",boxShadow:"1px 1px 1px 1px" }} >   <Link href="https://www.google.com"> <Image marginTop="10px" marginLeft="47%" src="https://www.yoox.com/media/yoox16/icons/google_24.png" /></Link></div>
       
<div style={{margin:"46px 0 8px",width:"40%",justifyContent:"center",margin:"auto",marginTop:"50px",gap:"30px"}}>
<Text fontSize=".875rem" fontWeight="500" fontFamily="Montserrat,sansSerif" >OR WITH YOUR EMAIL</Text>
        <Input   value={name}  onChange={(e) => setName(e.target.value)}  marginTop="20px"  placeholder="FIRST NAME*" />
        <Input value={last}   onChange={(e)=>setLast(e.target.value)}  marginTop="20px"  placeholder="SECOND NAME*" />
        <Input value={email} type="email"  onChange={(e)=>setEmail(e.target.value)} marginTop="20px"  placeholder="E-MAIL*" />
        <Input value={password} type="password"  onChange={(e)=>setPassword(e.target.value)} marginTop="20px"  placeholder="PASSWORD*" />
        </div>

        <Text fontSize=".875rem" fontWeight="500" fontFamily="Montserrat,sansSerif" style={{marginTop:"30px",marginRight:"270px"}} >Personalise your Shopping experience</Text>

<div style={{marginLeft:"30%"}}>
<CheckboxGroup colorScheme='blackAlpha' defaultValue={['naruto', 'kakashi']}>
  <Stack spacing={[1, 5]} direction={['column', 'row']}>
    <Checkbox value='MALE'>MALE</Checkbox>
    <Checkbox value='FEMALE'>FEMALE</Checkbox>

  </Stack>
</CheckboxGroup>
</div>
<Text style={{marginTop:"30px"}} fontSize=".75rem"  fontFamily= "SourceSansPro,sans-serif">If you are over 18 years old , celebrate your birthday with us : WE have a surprise for you.</Text>

<div style={{margin:"46px 0 8px",width:"40%",justifyContent:"center",margin:"auto",gap:"30px"}}>
<Input  placeholder="DATE OF BIRTH (DD/MM/YYYY)" />
</div>

<Text style={{marginRight:"400px",marginBottom:"0px", marginTop:"30px" }} fontSize=".678rem" fontFamily="Montserrat,sansSerif">CELL PHONE</Text>
<div style={{width:"40%",justifyContent:"center",margin:"auto",gap:"30px"}}><Input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder= "CONTACT NUMBER" /></div>
<Text   fontSize="14px"  color="#999" fontFamily= "SourceSansProItalic,sansSerif">By entering your phone number,you agree to be contacted by SMS for marketing and promotional purposes</Text>

<Text style={{marginTop:"30px"}} fontFamily= "SourceSansProItalic,sansSerif" fontSize="12px" >I declare that i have read and accepted the <Link>MYTRENDZ Terms and Conditions of Use</Link></Text>


<div style={{ marginTop:"30px",fontSize:"14px"}}>
<Checkbox><Text fontSize="12px" >I agree to the use of my personal data in order to be updated on new arrivals, informed about exclusive items and contacted as part of targeted marketing initiatives related to services offered by YOOX.
By analyzing my personal data, order history and browsing habits, YOOX can improve my shopping experience with suggestions that correspond to my interests.
For further information, please consult the Privacy Policy.</Text></Checkbox></div>

<div style={{marginTop:"30px", width:"40%",margin:"auto"}}><Button   onClick={handleSubmit} marginTop={"30px"}  >REGISTER</Button></div>




<div style={{width:"100%",height:"100px" ,backgroundColor:"#333" , marginTop:"80px", color:"white",textAlign:"center",fontFamily:"Montserrat,sansSerif",fontSize:".778rem",alignItems:"center",alignContent:"center"}}>
                    <Text marginTop="40px">POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</Text>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",marginTop:'40px'}}>
                    <Link>LEGAL AREA</Link>
                    <Link>PRIVACY POLICY</Link>

                </div>
         
                </div>

      </Stack  >
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

//  <Footer />
//  </Stack  >
//    </div>
//     )
// }
// export default Login
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
