const Login = () => {
  return (
    <>
      <div className="h-full flex flex-row w-[50%]">
        <div className="h-full flex grow flex-col justify-center py-12 bg-white shadow-lg">
          <div className="mx-auto w-full max-w-sm">
            {/* <img className="mx-auto h-15 w-auto" src="https://static.vecteezy.com/system/resources/previews/019/879/196/non_2x/passage-of-time-icon-on-transparent-background-free-png.png" alt="Timelyfy Login" /> */}
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 mx-auto w-full max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    type="username"
                    name="username"
                    id="username"
                    required
                    className="username block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-red-800 hover:text-red-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>

                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="password
                                    block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1"
                  />

                  <div className="flex mt-4">
                    <input
                      type="checkbox"
                      className="CheckBox mt-0.5 border-gray-200 rounded-sm text-blue-600"
                      onclick="passToggle()"
                    />
                    <label className="text-sm text-gray-500 ms-2">
                      Show password
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-800 hover:bg-red-600 py-1.5 text-sm/6 font-semibold text-white shadow-xs cursor-pointer"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              No account yet?
              <a
                href="#"
                className="font-semibold text-red-800 hover:text-red-600 hover:underline"
              >
                {" "}
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
