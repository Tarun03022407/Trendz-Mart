import {Text, Image,Link} from "@chakra-ui/react"

const ConnectWithUs=()=>{
    return (
        <div>
           
                <div style={{display:"flex",gap:"20px",marginTop:"100px"}}>
                    <Text fontWeight="600" fontFamily="Montserrat,sansSerif" lineHeight="36px" marginLeft="40%" alignItems="center" justifyContent="center" >Connect With Us</Text>
                 <Link><Image 
                   src="	https://www.yoox.com/media/yoox16/icons/social/normal/Facebook@svg.svg"/></Link>  
                   <Link> <Image 
                   src="	https://www.yoox.com/media/yoox16/icons/social/normal/Twitter@svg.svg"/></Link>
                   <Link>
                    <Image 
                  
                  src="	https://www.yoox.com/media/yoox16/icons/social/normal/Instagram@svg.svg"/></Link>
                   
                   <Link> <Image 
                   src="	https://www.yoox.com/media/yoox16/icons/social/normal/Youtube@svg.svg"/></Link>
                   <Link href="https://www.pinterest.com">  <Image 
                   src="		https://www.yoox.com/media/yoox16/icons/social/normal/Pinterest@svg.svg"/></Link>
                  <Link href="https://www.tiktok.com">    <Image 
                   src="	https://www.yoox.com/media/yoox16/icons/social/normal/Tiktok@svg.svg"/></Link>
                </div>

                <div style={{width:"100%",height:"100px" ,backgroundColor:"#333" , color:"white",textAlign:"center",fontFamily:"Montserrat,sansSerif",fontSize:".778rem",alignItems:"center",alignContent:"center"}}>
                    <Text marginTop="40px">POWERED BY YOOX NET-A-PORTER GROUP - COPYRIGHT © 2000-2022 YOOX NET-A-PORTER GROUP S.P.A. - ALL RIGHTS RESERVED - SIAE LICENCE # 401/I/526</Text>
                    <div style={{display:"flex",gap:"40px",justifyContent:"center",marginTop:'40px'}}>
                    <Link>LEGAL AREA</Link>
                    <Link>PRIVACY POLICY</Link>

                </div>
         
                </div>
              
        </div>
    )
}
export default ConnectWithUs