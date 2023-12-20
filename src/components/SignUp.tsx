import { useForm } from "react-hook-form";
import { default as Cookies } from "js-cookie";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import { registerUser } from "../services/api";

interface SignUpInput {
  username: string;
  email: string;
  password: string;
}
 
const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<SignUpInput>();
  const navigate = useNavigate();

  const formSubmit = async (data: SignUpInput) => {
    try {
      await registerUser(data).then((res) => {
        const jwtToken = res;
        Cookies.set("jwtToken", jwtToken, { expires: 1 / 24 });

        const decodedToken = jwtDecode(jwtToken);
        navigate(`/main/${decodedToken.sub}`)
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <h2>SIGN UP</h2>
        <div className="flex flex-col items-center">
          <label htmlFor="username">Username</label>
          <input
            className="input-main"
            type="text"
            id="username"
            {...register("username")}
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="email">Email</label>
          <input
            className="input-main"
            type="email"
            id="email"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col items-center">
          <label htmlFor="password">Password</label>
          <input
            className="input-main"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>

        {/* <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="confirmPassword"
          />
        </div> */}

        <button className="btn-submit">SUBMIT</button>
      </form>
    </>
  );
};

export default SignUp;
