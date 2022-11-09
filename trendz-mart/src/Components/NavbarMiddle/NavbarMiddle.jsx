import Women from "./Women"
import Men from "./Men"
import Kids from "./Kids"
import DesignArt from "./DesignArt"

function NavbarMiddle(){
    return (
      <div style={{display:"flex",marginTop:"20px"}} >
<Women/>
<Men />
<Kids />
<DesignArt />
</div>
      
    )
}
export default NavbarMiddle