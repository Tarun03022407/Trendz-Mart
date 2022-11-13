import Women from "./Women"
import Men from "./Men"
import Kids from "./Kids"
import DesignArt from "./DesignArt"

function NavbarMiddle(){
    return (
      <div style={{display:"flex",marginTop:"20px",position:"sticky",top:"30px", zIndex:"99", backgroundColor:"white"}} >
<Women/>
<Men />
<Kids />
<DesignArt />
</div>
      
    )
}
export default NavbarMiddle