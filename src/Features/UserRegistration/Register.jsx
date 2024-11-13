import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="min-h-screen bg-cover font-poppins bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Algriculture-background2.jpg')" }}>
      {/* Container to keep both sections aligned */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl">
        
        {/* Left side - Register With Farm Ease text */}
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-start px-6 lg:px-16">
          <div className="text-white p-6 lg:p-10">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Register With Farm Ease</h1>
            <p className="text-lg lg:text-xl">
              Your journey starts here! Whether you're buying or selling, Farm Ease is here to support you.
              Simple. Transparent. Together, let's connect the agriculture industry and make a difference.
              Join us today!
            </p>
          </div>
        </div>

        {/* Right side - Registration form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center lg:justify-end px-6 lg:px-16">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-center">Register</h2>
            <p className="text-center text-gray-600 mb-6">
              Do you have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
              <Link to="/Login" className="text-blue-500 hover:underline">
              Login Now
            </Link>
              
              </a>
            </p>
            <p className="text-center text-gray-600 mb-4">
              or register as a{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Supplier
              </a>
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="first-name">
                  First Name*
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="E.g. John"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="last-name">
                  Last Name*
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="E.g. Doe"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email*
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password*
                </label>
                <input
                  id="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                  Confirm Password*
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Confirm your password"
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 leading-tight" />
                  <span className="text-sm text-gray-700">I agree to the Terms and Conditions.</span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Register
              </button>

              <p className="mt-4 text-center">
                <span className="text-gray-600">or register with</span> <br />
                <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                  Google
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

