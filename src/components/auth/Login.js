import React, { useRef } from "react"
import { useHistory } from "react-router-dom"

// Login Working
const Login = props => {
    let props_reference = props.auth
    const login = props_reference.login

    const email = useRef()
    const password = useRef()
    
    // Handle the come back to the last page before login
    let history = useHistory();
    let back = () => {
        history.goBack();
    }

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()
        const credentials = {
            "email": email.current.value,
            "password": password.current.value
        }


        login(credentials)
            .then(() => {
                back()
            })
    }

    return (
        <main style={{textAlign:"center"}}>
            <form className="form--login" onSubmit={handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <fieldset>
                    <label htmlFor="inputEmail"> Email </label>
                    <input ref={email} type="email"
                        className="form-control"
                        placeholder="Email"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Sign in
                    </button>
                </fieldset>
            </form>
        </main>
    )
}
 export default Login