import { Button,Text } from "@chakra-ui/react"

function DownNavbar(){
    return (
  
        <div  style={{width:"100%", height:"40px",backgroundColor:"#333",marginTop:"30px"}}>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white"  fontSize='xs'>NEW ARRIVALS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"} ><Text color="white" fontSize='xs'>DESIGNERS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>CLOTHING</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>SHOES</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>ACCESORIES & BAGS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>8 BY TRENDZ</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>TRENDZYGEN</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>COLLABORATION</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundColor={"#333"}><Text color="white" fontSize='xs'>BEST DEALS</Text></Button>
            <Button colorScheme={"blackAlpha"} backgroundImage={"https://www.yoox.com/media/yoox16/gift/2022_gift_menu_desktop.gif"} ><Text color="white" fontSize='xs'>GIFT GUIDE</Text></Button>




        </div>
            
      
    )
}
export default DownNavbar