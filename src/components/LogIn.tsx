import { useForm } from "react-hook-form";
import { default as Cookies } from "js-cookie";

import { userExists } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
interface LogInInput {
  username: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit, reset } = useForm<LogInInput>();
  const navigate = useNavigate();

  const formSubmit = async (data: LogInInput) => {
    try {
      await userExists(data).then((res) => {
        const jwtToken = res;
        Cookies.set("jwtToken", jwtToken, { expires: 1 / 24 });
        navigate("/main");
        console.log(res);
      });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <h2>LOG IN</h2>
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
          <label htmlFor="password">Password</label>
          <input
            className="input-main"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="btn-submit">SUBMIT</button>
      </form>

      <Link className="hover:text-blue-400" to="/signup">
        Register
      </Link>
    </>
  );
};

export default LogIn;
