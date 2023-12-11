const LogIn = () => {
  return (
    <>
      <form>
        <h2>LOG IN</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input className="border-solid border-2 border-black" type="text" id="username"/>
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            className="border-solid border-2 border-black"
            type="password"
            id="password"
          />
        </div>
      </form>
    </>
  );
};

export default LogIn;
