import Men from "./men";
import Women from "./women";

var isrole="men"

function Condition(){
    return (
        <>
        {isrole=="men"?<Men/>:<Women/>}
        
        </>
    )
}
export default Condition;