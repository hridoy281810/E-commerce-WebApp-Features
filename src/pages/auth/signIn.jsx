import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/icon.png';
import backgraoudImage from '../../assets/chris-lee-70l1tDAI6rM-unsplash 1.png';
import useAuth from "../../api/useAuth"; 
import Swal from "sweetalert2";
const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const navigate = useNavigate();
  const { signIn, googleLogin } = useAuth(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!termsChecked) {
      Swal.fire('You must agree to the terms and conditions!!');
      return;
    }

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/products'); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/products'); 
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen w-full flex ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">

        <div className="flex justify-center items-center bg-white">
          <div className="w-[500px] h-[618px] px-6 pt-6 pb-4 bg-[#F5F5F5] border-[#F5F5F5] rounded-[8px]">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <div className="py-8">
                  <h2 className="text-black text-[32px] font-semibold mb-[2px]">
                    Welcome Back!
                  </h2>
                  <p className="text-[#707070] font-semibold">
                    Enter your Credentials to access your account
                  </p>
                </div>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-3 top-[10px] transition-all duration-300 ${
                        email ? 'top-[2px] text-[#707070] text-[12px]' : 'top-1/2 text-[#707070]'
                      } peer-focus:top-[2px] peer-focus:left-3 peer-focus:text-[#707070] peer-focus:text-[12px]`}
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                      className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder=" "
                    />
                    <label
                      className={`absolute left-3 top-[10px] transition-all duration-300 ${
                        password ? 'top-[2px] text-[#707070] text-[12px]' : 'top-1/2 text-[#707070]'
                      } peer-focus:top-[2px] peer-focus:left-3 peer-focus:text-[#707070] peer-focus:text-[12px]`}
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      className="absolute right-3 top-[15px] text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>

                  <p className="text-right text-sm">
                    <Link to="/forgot-password" className="text-blue-600">
                      Forgot Password
                    </Link>
                  </p>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-[14px] w-[14px]"
                      onChange={handleTermsChange}
                    />
                    <span className="ml-2 text-small font-semibold">
                      I agree to the{" "}
                      <a href="#" className="text-small font-semibold underline">
                        Terms & Policy
                      </a>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white text-[17px] font-semibold py-3 mt-[20px] mb-[14px] rounded-md"
                  >
                    Sign In
                  </button>
                </form>

                {error && <p className='text-red-600'>{error}</p>}

                <div className="flex items-center mb-[14px]">
                  <hr className="w-full border-gray-300" />
                  <span className="px-3 text-gray-500">or</span>
                  <hr className="w-full border-gray-300" />
                </div>

                <div className="flex justify-between gap-4">
                  <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-1/2 text-[12px] font-semibold py-[14px] px-5 rounded-md border border-[#D9D9D9] mr-2"
                  >
                    <FcGoogle size={20} className="mr-2" />
                    Sign in with Google
                  </button>
                  <button className="flex items-center justify-center w-1/2 text-[12px] font-semibold py-[14px] px-5 rounded-md border border-[#D9D9D9] mr-2">
                    <FaApple size={20} className="mr-2" />
                    Sign in with Apple
                  </button>
                </div>

                <p className="text-center font-semibold text-small mt-4">
                Don not have an account?{" "}
                  <Link to="/sign-up" className="text-blue-600 underline">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex items-center justify-center p-8 relative overflow-hidden"
          style={{
            backgroundImage: `url(${backgraoudImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="p-8 rounded-lg text-center">
            <div className="flex justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-[89px] h-[85px] mb-[6px]"
              />
            </div>
            <h2 className="text-center text-[40px] font-bold text-white mb-[2px]">
              Furni<span className="text-blue-500">Flex</span>
            </h2>
            <p className="text-[#C8C4C4] font-semibold w-[445px]">
              Discover a seamless shopping experience with our curated
              collection of products. From fashion to electronics, we bring
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
