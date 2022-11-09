import { UnlockIcon } from "@chakra-ui/icons"
import { Button,Stack } from "@chakra-ui/react"

const Login=()=>{
    return (
        <div>
        <Stack  >
   <Button marginRight="50px"  display= "inline-block"
maxWidth=" 108px"
whiteSpace= "nowrap"
_hover={{ bg: "blue.500", color: " white"  }}
overflow= "hidden" fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} >  <UnlockIcon/>      <u style={{marginLeft:"5px",marginTop:"5px"}} >Login</u>

 </Button>
 </Stack  >
   </div>
    )
}
export default Login