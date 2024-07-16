import { FormEvent, useState } from "react"
import { Layout } from "../components/Layout"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserEmail } from "../store/reducers/userSlice"
import { getPathByName } from "../routes/RouteConfig"

export function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!email.trim()) {
      setError("Email cannot be empty")
      return
    }

    localStorage.setItem("email", email)
    dispatch(setUserEmail(email))

    setEmail("")
    setPassword("")
    setError("")

    navigate(getPathByName("home"))
  }

  return (
    <Layout>
      <div className="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} data-testid="login-form">
          <div className="form-group mt-3">
            <label htmlFor="email">Email:</label>
            <input
              data-testid="email-input"
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
    </Layout>
  )
}

export default Login
