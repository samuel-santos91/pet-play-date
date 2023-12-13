import { useForm } from "react-hook-form";
import { default as Cookies } from "js-cookie";

import { userExists } from "../services/api";
interface LogInInput {
  username: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit, reset } = useForm<LogInInput>();

  const formSubmit = async (data: LogInInput) => {
    try {
      await userExists(data).then((res) => {
        const jwtToken = res;
        Cookies.set("jwtToken", jwtToken, { expires: 1 / 24 });
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
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border-solid border-2 border-black"
            type="text"
            id="username"
            {...register("username")}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="password"
            {...register("password")}
          />
        </div>
        <button className="border-solid border-2 border-black">SUBMIT</button>
      </form>
    </>
  );
};

export default LogIn;
