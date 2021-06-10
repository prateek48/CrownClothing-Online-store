import React from "react"
import SignIn from "../signIn/signIn"
import SignUp from "../signup/signup.component"
import "./sign-in-and-out.styles.scss"

function SignInOut()
{
    return(
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
            
        </div>
    );
}
export default SignInOut;