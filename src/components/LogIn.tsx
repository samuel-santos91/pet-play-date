import { useForm } from "react-hook-form";

interface LogInInput {
  username: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit } = useForm<LogInInput>();

  const formSubmit = (data: LogInInput) => {
    console.log(data)
  }

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
