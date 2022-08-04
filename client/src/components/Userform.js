import { useState } from "react";
// import '../semantic/dist/components/grid.css';
// import '../semantic/dist/components/icon.css';


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

    async function formHandler(e) {
        e.preventDefault()
        const url = props.signup ? "/api/users/signup" : "/api/users/login"
        console.log(url)
        if (username && password) {
            const response = await fetch(url, {
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


    return (
        <div class="page-login">
            <div class="ui centered grid container">
            <div class="nine wide column">
                <div class="ui fluid card">
                <div class="content">
                <form class="ui form" method="POST" onSubmit={formHandler}>
                    <div class="field">
                    <label>User</label>
                    <input name="username" type="text" placeholder="Username" value={username} onChange={handleInput} />
                    </div>
                    <div class="field">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" value={password} onChange={handleInput} />
                    </div>
                    <div>
                        <button class="ui primary labeled icon button" type="submit">
                        <i class="unlock alternate icon"></i>
                        {props.signup ? "Sign Up" : "Login"}
                        </button>
                    </div>
                </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        
        
        
        
        
        // <form onSubmit={formHandler}>
        //     <input name="username" type="text" value={username} onChange={handleInput} />
        //     <input name="password" type="text" value={password} onChange={handleInput} />
        //     <button> {props.signup ? "Sign Up" : "Login"}</button>
        // </form>
    )

}

export default Userform