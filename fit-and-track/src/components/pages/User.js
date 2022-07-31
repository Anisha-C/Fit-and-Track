import { useState, useEffect } from "react"
import Userform from "../Userform"


function User() {
    const [signup, setsignup] = useState(true)
    async function signupFormHandler(event) {
        event.preventDefault()

        //     if (username && email && password) {
        //         const response = await fetch("/api/users/signup", {
        //             method: "post",
        //             body: JSON.stringify({
        //                 username,
        //                 email,
        //                 password,
        //             }),
        //             headers: { "Content-Type": "application/json" },
        //         })

        //         if (response.ok) {
        //             document.location.replace("/dashboard/")
        //         } else {
        //             alert(response.statusText)
        //         }
        //     }
    }


    async function loginFormHandler(event) {
        //     event.preventDefault()



        //     if (email && password) {
        //         const response = await fetch("/api/users/login", {
        //             method: "post",
        //             body: JSON.stringify({
        //                 email,
        //                 password,
        //             }),
        //             headers: { "Content-Type": "application/json" },
        //         })

        //         if (response.ok) {
        //             document.location.replace("/dashboard/")
        //         } else {
        //             alert(response.statusText)
        //         }
        //     }
    }

   

    return (
        <div id="User" className='ui centered grid'>
            <h1 className="five wide column">Create a New Account or Log In!</h1>
            <p></p>
            <div className="six wide coulmn">
                <Userform signup = {signup}/>
            </div>
            <div style={{ display: 'flex', justifyContent: "space-around" }} className="three wide column">
                <button onClick={() => setsignup(!signup)} className="ui primary button">
                    {signup ? "Already Have an account?" : "Register for a new account"}
                </button>
            </div>
        </div>


    )
}



// document.querySelector('#logout').addEventListener('click', logout);

// document.querySelector(".login-form").addEventListener("submit", loginFormHandler)

// document.querySelector(".signup-form").addEventListener("submit", signupFormHandler)

export default User