import { Stack,Button } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"


function DesignArt(){
    return (
        <div style={{display:"flex"}} >
            <p style={{marginTop:"7px"}}>/</p>
        <Stack  >
           
   <Button   display= "inline-block"
maxWidth=" 108px"
whiteSpace= "nowrap"
overflow= "hidden"_hover={{backgroundColor:"#fffe94"}} marginLeft={"5px"} fontWeight={"bold"}   textOverflow= "ellipsis"  fontSize=".87rem" background="white" width={"110%"} size={2} mt={3}  >  


   Design+Art

</Button>


 </Stack  >

     <img  style={{marginLeft:"150px",width:"100px"}} src="https://www.yoox.com/media/yoox16/header/yoox-logo-p.svg" alt="" />
  <div style={{marginLeft:"200px",width:"100px"}}> <SearchIcon /></div>
  <div><img style={{width:"18px",marginTop:"5px",marginLeft:"25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZ-YAuWzBrjSY-iFZ6Kn8-ItMmC9A3CA86BEgAvA&s" alt="" /></div>

 </div>



 
 
    )
}
export default DesignArt