import { useState } from "react"

function Userform(props) {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    function handleInput(e) {
        if (e.target.name === "username") {
            setusername(e.target.value)
        }
        else {
            setpassword(e.target.value)
        }
    }

    async function signupFormHandler(e) {
        e.preventDefault()
        console.log(e.target)

            if (username && password) {
                const response = await fetch("/api/users/signup", {
                    method: "post",
                    body: JSON.stringify({
                        username,
                        // email,
                        password,
                    }),
                    headers: { "Content-Type": "application/json" },
                })

                if (response.ok) {
                    document.location.replace("/dashboard/")
                } else {
                    alert(response.statusText)
                }
            }
    }

    async function loginFormHandler(event) {
            event.preventDefault()



            if (username && password) {
                const response = await fetch("/api/users/login", {
                    method: "post",
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                    headers: { "Content-Type": "application/json" },
                })

                if (response.ok) {
                    document.location.replace("/dashboard/")
                } else {
                    alert(response.statusText)
                }
            }
    }

    return (
        <form onSubmit={signupFormHandler}>
            <input name="username" type="text" value={username} onChange={handleInput} />
            <input name="password" type="text" value={password} onChange={handleInput} />
            <button> {props.signup ? "Sign Up" : "Login"}</button>
        </form>
    )

}

export default Userform