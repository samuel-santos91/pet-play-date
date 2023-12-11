const SignUp = () => {
  return (
    <>
      <form>
        <h2>SIGN UP</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="border-solid border-2 border-black"
            type="text"
            id="username"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            className="border-solid border-2 border-black"
            type="email"
            id="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="password"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="confirmPassword"
          />
        </div>
      </form>
    </>
  );
};

export default SignUp;
