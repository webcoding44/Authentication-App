import { getsession } from "@/src/lib/auth";
import { redirect } from "next/navigation";







export const Landingpage = () => {

    const session = getsession();

    if(!session) {
        // Redirect to login page or show login form
        redirect("/homepage");
    }
  return (
    <div>
        <h1>Welcome to the Landing Page</h1>
    </div>
  )
}
