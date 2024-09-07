import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/icon.png";
import backgraoudImage from "../../assets/chris-lee-70l1tDAI6rM-unsplash 1.png";
import { useForm } from "react-hook-form";
import useAuth from "../../api/useAuth";
import Swal from "sweetalert2";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createUser ,updateUserProfile,googleLogin} = useAuth();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHasValue((prev) => ({ ...prev, [name]: value.length > 0 }));
  };
  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };
  const onSubmit = (data) => {
    if (!termsChecked) {
      Swal.fire('You must agree to the terms and conditions!!');
      return;
    }

    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        return updateUserProfile(`${data.firstName} ${data.lastName}`, data.photoURL);
      })
      .then(() => {
        console.log("Profile updated");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile updated successfully",
          showConfirmButton: false,
          timer: 1500
        });

        const saveUser = {
          name: data.firstName+" " + data.lastName,
          email: data.email,
        };
        fetch(`https://assignment-twelve-server-h2dn6nmgs-hridoy281810s-projects.vercel.app/auth-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User registration successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/sign-in');
            }
          })
          .catch(error => {
            console.log('Error saving user:', error);
          });
      })
      .catch(error => {
        console.log('Error updating profile:', error);
        setError(error.message);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        const loggedUser = result.user;
    
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Login successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch(error => {
        const errorM = error.message;
        setError(errorM)
      })
  }

  return (
    <div className="min-h-screen w-full flex ">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex justify-center items-center bg-white">
          <div className="w-[500px] h-[618px] px-6 pt-6 pb-4 bg-[#F5F5F5] border-[#F5F5F5] rounded-[8px]">
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-center text-black text-2xl font-semibold mb-[6px]">
                  Welcome To
                </h2>
                <h2 className="text-center text-[40px] font-bold text-black mb-[2px]">
                  Furni<span className="text-blue-500">Flex</span>
                </h2>
                <p className="text-center text-gray-500 mb-[14px]">
                  Signup for purchase your desire products
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-2 gap-[14px]">
                    {/* First Name Field */}
                    <div className="relative">
                      <input
                        type="text"
                        {...register("firstName", { required: false })}
                        className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                        placeholder=" "
                        onChange={handleInputChange}
                        name="firstName"
                      />
                      <label
                        className={`absolute left-3 top-[2px] transition-all duration-300 
                          ${hasValue.firstName
                            ? "top-[2px] text-[12px] text-[#707070]"
                            : "top-[4px] text-[16px] text-[#707070]"}
                        `}
                      >
                        First name (optional)
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        {...register("lastName", { required: false })}
                        className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                        placeholder=" "
                        onChange={handleInputChange}
                        name="lastName"
                      />
                      <label
                       className={`absolute left-3 top-[2px] transition-all duration-300 
                        ${hasValue.lastName
                          ? "top-[2px] text-[12px] text-[#707070]"
                          : "top-[4px] text-[16px] text-[#707070]"}
                      `}
                      >
                        Last name (optional)
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder=" "
                      onChange={handleInputChange}
                      name="email"
                    />
                    {errors.email && <span className='text-red-600 mt-2'>This field is required</span>}
                    <label
                      className={`absolute left-3 top-[2px] transition-all duration-300 
                        ${hasValue.email
                          ? "top-[2px] text-[12px] text-[#707070]"
                          : "top-[4px] text-[16px] text-[#707070]"}
                      `}
                    >
                      Email address
                    </label>
                  </div>

                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true, minLength: 6 })}
                      className="peer w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                      placeholder=" "
                      onChange={handleInputChange}
                      name="password"
                    />
                    <label
                     className={`absolute left-3 top-[2px] transition-all duration-300 
                      ${hasValue.password
                        ? "top-[2px] text-[12px] text-[#707070]"
                        : "top-[4px] text-[16px] text-[#707070]"}
                        `}
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
                      {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}

                  <div className="flex items-center">
                  <input
                      type="checkbox"
                      className="form-checkbox h-[14px] w-[14px]"
                      onChange={handleTermsChange}
                    />
                    <span className="ml-2 text-small font-semibold">
                      I agree to the{" "}
                      <Link to="/" className="text-small font-semibold underline">
                        Terms & Policy
                      </Link>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white text-[17px] font-semibold py-3 mt-[20px] mb-[14px] rounded-md"
                  >
                    Signup
                  </button>
                </form>

                {error && <p className='text-red-600'>{error}</p>}

                <div className="flex items-center mb-[14px]">
                  <hr className="w-full border-gray-300" />
                  <span className="px-3 text-gray-500">or</span>
                  <hr className="w-full border-gray-300" />
                </div>

                <div className="flex justify-between gap-4">
                  <button onClick={handleGoogleLogin} className="flex items-center justify-center w-1/2 text-[12px] font-semibold py-[14px] px-5 rounded-md border border-[#D9D9D9] mr-2">
                    <FcGoogle size={20} className="mr-2" />
                    Sign in with Google
                  </button>
                  <button className="flex items-center justify-center w-1/2 text-[12px] font-semibold py-[14px] px-5 rounded-md border border-[#D9D9D9] mr-2">
                    <FaApple size={20} className="mr-2" />
                    Sign in with Apple
                  </button>
                </div>
                <p className="text-center font-semibold text-small mt-4">
                  Have an account?{" "}
                  <Link to="/sign-in" className="text-blue-600 underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex items-center justify-center p-8 relative"
          style={{
            backgroundImage: `url(${backgraoudImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
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
              Discover a seamless shopping experience with our curated collection
              of products. From fashion to electronics, we bring quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
