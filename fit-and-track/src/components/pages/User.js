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

    async function logout() {
        const response = await fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

    return (
        <div id="User" class="intro">
            <h1 class="">User sign up or login</h1>
            <p></p>
            <div style={{ display: 'flex', justifyContent: "space-around" }}>
                <button onClick={() => setsignup(!signup)}>
                    {signup ? "Already Have an account?" : "Register for a new account"}
                </button>
            </div>
            <Userform signup = {signup}/>
        </div>


    )
}



// document.querySelector('#logout').addEventListener('click', logout);

// document.querySelector(".login-form").addEventListener("submit", loginFormHandler)

// document.querySelector(".signup-form").addEventListener("submit", signupFormHandler)

export default User