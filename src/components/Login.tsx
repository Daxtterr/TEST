const Login = () => {
  return (
    <div className="flex  h-screen items-center justify-center bg-slate-200">
      <div className=" w-9/12 lg:w-1/5 bg-white rounded-md shadow-md">
        <p className="mt-2 text-center font-bold">Login</p>
        <form className="mt-4 text-xs flex flex-col gap-4 p-2 ">
          <label>
            {"Email Address "}
            <input
              name="contactEmail"
              type="text"
              className="w-full block border-2 rounded-md p-1"
            />
          </label>

          <label>
            {"Password "}
            <input
              name="password"
              type="text"
              className="w-full block border-2 rounded-md p-1"
            />
          </label>
          <button className="bg-cyan-700 text-center w-[4rem] px-3 py-2 rounded-md text-white mx-auto ">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
