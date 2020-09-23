import React, { useRef } from "react"
import { withRouter } from "react-router-dom"


const Register = props => {
    const email = useRef()
    const firstName = useRef()
    const lastName = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    
    
    const register = props.auth.register

    const handleRegister = (e) => {
        e.preventDefault()
        const newUser = {
            "first_name": firstName.current.value,
            "last_name": lastName.current.value,
            "email": email.current.value,
            "password": password.current.value,
        }

        register(newUser).then(() => {
            console.log(newUser)
            props.history.push({
                pathname: "/"
            })
        })
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register to use Accontaboddies</h1>
                <fieldset>
                    <label htmlFor="inputEmail"> Email</label>
                    <input ref={email} type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required  autoFocus/>
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
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
export default withRouter(Register)