import signupImg from "../assets/Images/signup.jpg"
import Template from "../Components/core/Auth/Template"
import { useSelector } from "react-redux";

function Signup() {
  const {loading} = useSelector((state)=>state.auth);
  return (
    loading?(<div className=" h-[100vh] flex justify-center items-center"><div class="custom-loader"></div></div>):(
    <Template
      title="Sign Up"
      image={signupImg}
      formType="signup"
    />
    )
  )
}

export default Signup