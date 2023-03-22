import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e: { target: { name: any; value: any } }) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <>
            <section>
                <h1>
                    <FaSignInAlt />
                    Login
                </h1>
                <p>Login and workout!</p>
            </section>

            <section>
                <form onSubmit={onSubmit}>
                    <div>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-block"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login
