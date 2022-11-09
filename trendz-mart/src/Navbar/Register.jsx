import { Stack,Button } from "@chakra-ui/react"
const Register=()=>{
    return (
        <div>
             <Stack  >
        <Button display= "inline-block"
    maxWidth=" 108px"
    whiteSpace= "nowrap"
    _hover={{ bg: "blue.500", color: " white"  }}
    overflow= "hidden" fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize="12px" background="white" width={"100px"} size={2} mt={3} >  🖊️<u >  Register</u>
   
      </Button>
      </Stack  >
        </div>
    )
}
export default Register