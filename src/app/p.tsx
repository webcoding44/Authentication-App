import { redirect } from "next/navigation";
import { getsession } from "../lib/auth";



function p() {

        const session = getsession();
    
        if(!session) {
            // Redirect to login page or show login form
            redirect("/homepage");
        }

  return (
    <div>

        <h1>Create Acounte</h1>
      
    </div>
  )
}

export default p
