import React from "react"
import {Image ,Text} from "@chakra-ui/react"
function HomeCarts(){
    return (
        <div style={{display:"flex", gap:"30px" ,marginTop:"100px"}}>
            <div style={{marginTop:"30px" ,marginLeft:"10px",cursor:"pointer"}}> 
            <Image
            src="https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_W.jpg?634485886639412096#width=473&height=660"
            />
            <Text  display="block"
   fontFamily= "PlayfairDisplay,sansSerif"
    fontSize= "24px"
    fontWeight= "700"
    marginBottom= "12px"
    marginTop="10px">HUGO</Text>
            <Text display=" block"
    fontSize= "16px"
    fontWeight= "300"
    lineHeight="19px">Express yourself</Text>

            </div>
            <div style={{cursor:"pointer"}}>
            <Image height="650px"
            src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886639412096#width=473&height=660"
            />
            
            <Text  display="block"
    fontFamily= "PlayfairDisplay,sansSerif"
    fontSize= "24px"
    fontWeight= "700"
    marginBottom= "12px"
    marginTop="10px">MONTEBLANK</Text>
            <Text display=" block"
    fontSize= "16px"
    fontWeight= "300"
    lineHeight="19px">It's gifting season</Text>

            </div>
             <div  style={{marginTop:"30px",marginRight:"10px",cursor:"pointer"}}>
            <Image 
            src="https://www.yoox.com/images/yoox80/banners/6825_5_Furla_W_Tris.jpg?634485886639412096#width=473&height=660"
            />
            <Text     display="block"
      fontFamily= "PlayfairDisplay,sansSerif"
    fontSize= "24px"
    fontWeight= "700"
    marginBottom= "12px"
    marginTop="10px">FULRA</Text>
            <Text     display=" block"
    fontSize= "16px"
    fontWeight= "300"
    lineHeight="19px">Autumn/Winter 2022 Collection</Text>
            </div>
          
            
        </div>
    )
}
export default HomeCarts