import React, { useContext, useState } from "react";
import { AuthContext } from "../../UserContext/AuthProvider";
import { toast } from "react-hot-toast";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { forgetPassword } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    forgetPassword(email)
      .then(() => {
        
        toast.success("Check your email please");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
