import React from "react";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen bg-cover font-poppins bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Algricuture-background.jpg')" }}>
     
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl">

      <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start px-6 lg:px-16">
          <div className="text-white p-6 lg:p-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome Back</h1>
            <p className="text-lg lg:text-xl">
            Access your account and continue your journey with Farm Ease! Whether you're buying or selling, we're here to support you. Simple. Transparent. Together, let's connect the agriculture industry and make a difference. Sign in now!
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end px-6 lg:px-16">



      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md" >
        <h2 className="text-3xl font-bold mb-4 text-center"
        >Login</h2>
        <p className="text-gray-600 mb-8 text-center">Sign in to your Farm Ease account</p>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <label className="block text-gray-700 text-sm">
              <input type="checkbox" className="mr-2 leading-tight" />
              Remember Me
            </label>

            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
            
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            <span className="text-gray-600">Or login with</span> <br />
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
              Google
            </button>
          </p>
        </form>

        <p className="mt-8 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">

          <Link to="/register" className="text-blue-500 hover:underline">
              Register Now
            </Link>
            
          </a>
         </p>
        </div>
      </div>
    </div>
   </div>
  );
}

export default App;
