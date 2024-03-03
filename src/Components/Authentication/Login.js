import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../UserContext/AuthProvider";
import signinimg from "../imagess/signin.avif";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loginError, setLoginError, setLoading] = useState("");
  const { signIn, forgetPassword } = useContext(AuthContext);
  const [loginemail, setLoginemail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        setLoginemail(data.email);
        if (user.emailVerified) {
          navigate("/");
          setLoading(false);
        } else {
          toast.error("Please verify email");
          setLoading(false);
        }
      })
      .catch((error) => {
        // console.log(error.message)
        // setLoading(false);
        setLoginError(error.message);
        setLoading(false);
      });
  };

  const handleforgetPassword = (data) => {
    forgetPassword(data.email)
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
    <div className="flex justify-center">
      <div className="lg:grid hidden">
        <img src={signinimg} alt="" srcset="" />
      </div>
      <div className="h-[800px] text-black flex justify-center items-center">
        <div className="w-96 p-7">
          <h2 className="text-xl text-center">Login</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input text-black input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  message: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input text-black input-bordered w-full max-w-xs"
              />

              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn bg-blue-700 text-white w-full my-4"
              value="Login"
              type="submit"
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <Link to="/forgetpassword">Forget Password?</Link>
          <p className="text-blue-900">
            New here?{" "}
            <Link className="text-blue-700" to="/register">
              Create new Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
