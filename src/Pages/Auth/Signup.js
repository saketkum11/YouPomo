import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth/Auth-Context";

const Signup = () => {
  const { signUp } = useAuth();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const handleSignUpForm = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };
  const handleForm = () => {
    signUp(userForm.email, userForm.password);
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Signup
            </h2>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleForm();
            }}
            className="mt-8 space-y-6"
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  onChange={(e) => handleSignUpForm(e)}
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={userForm.email}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={(e) => handleSignUpForm(e)}
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={userForm.password}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-3"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Signup
              </button>
              <Link
                to="/login"
                className=" border-gray-400 group relative w-full flex justify-center py-2 px-4 border  text-sm font-medium rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export { Signup };
