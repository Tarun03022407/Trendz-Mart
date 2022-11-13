
import ImageCard from "../ImageCard/ImageCard"
import Designer from "../Designers/Designers"
import NewArrivals from "../NewArrivals/NewArrivals"
import HomeCarts from "../HomeCarts/HomeCarts"
import OneOfAKind from "../OneOfAKind/OneOfAKind"
import EightByYoox from "../EightByYoox/EightByYoox"
import ConnectWithUs from "../ConnectWiithUs/ConnectWithUs"
import FooterCards from "../FooterCads/FooterCards"

import Footer from "../Footer/footer"

function Home(){
    return (
<>
   <ImageCard />
   <Designer />
   <NewArrivals />
   <HomeCarts />
   <OneOfAKind />
   <EightByYoox />
  
   <FooterCards />
   <Footer />
   <ConnectWithUs />
</>
    )
}
export default Home