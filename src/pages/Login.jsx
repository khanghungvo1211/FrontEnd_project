import loginImg from "../assets/Images/login.jpg"
import Template from "../Components/core/Auth/Template"
import { login } from "../services/operations/authAPI"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
    <Template
      title="Login"
      image={loginImg}
      formType="login"
    />
    </>
  )
}

export default Login