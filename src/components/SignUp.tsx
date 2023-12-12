import { useForm } from "react-hook-form";

interface SignUpInput {
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { register, handleSubmit } = useForm<SignUpInput>();

  const formSubmit = (data: SignUpInput) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(formSubmit)}>
        <h2>SIGN UP</h2>
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
          <label htmlFor="email">Email</label>
          <input
            className="border-solid border-2 border-black"
            type="email"
            id="email"
            {...register("email")}
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

        {/* <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="confirmPassword"
          />
        </div> */}

        <button className="border-solid border-2 border-black">SUBMIT</button>
      </form>
    </>
  );
};

export default SignUp;
