import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../../provider/authProvider";
import logo1 from "../../assets/icon.png";
import { useCart } from "../../provider/cartProvider";
import { FaUserCircle } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai"; // Import hamburger icon

const NavBar = () => {
  const { cart } = useCart();
  const { user, logout } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar

  const totalQuantity = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="bg-white border-b z-20 h-[118px]">
      <nav className="bg-white my-container mx-auto border-b p-4 flex justify-between items-center h-[118px]">
        <div className="flex items-center">
          <AiOutlineMenu
            onClick={() => setSidebarOpen(true)}
            className="text-2xl cursor-pointer md:hidden"
          />
         <div className="hidden md:flex items-center">
            <img src={logo1} alt="" className="h-[38px] w-[38px] me-[6px]" />
            <span className="text-[20px] font-bold">
              Furni<span className="text-blue-500">Flex</span>
            </span>
          </div>
        </div>
        <ul className="hidden md:flex md:flex-row space-x-8 text-gray-700 font-semibold">
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-2 px-5 rounded-[6px] cursor-pointer ${
                isActive ? "bg-[#F8F8F8] font-bold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `py-2 px-5 rounded-[6px] cursor-pointer ${
                isActive ? "bg-[#F8F8F8] font-bold" : ""
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-2 px-5 rounded-[6px] cursor-pointer ${
                isActive ? "bg-[#F8F8F8] font-bold" : ""
              }`
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-2 px-5 rounded-[6px] cursor-pointer ${
                isActive ? "bg-[#F8F8F8] font-bold" : ""
              }`
            }
          >
            Custom
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `py-2 px-5 rounded-[6px] cursor-pointer ${
                isActive ? "bg-[#F8F8F8] font-bold" : ""
              }`
            }
          >
            Blog
          </NavLink>
        </ul>
        <div className="flex space-x-4 relative">
          <Link to="/cart-overview">
            <button className="rounded-full p-2 relative">
              <FiShoppingCart className="w-6 h-6 text-gray-700" />
              {totalQuantity > 0 && (
                <span className="absolute bottom-1 right-1 bg-[#323232] text-white text-xs rounded-full px-1">
                  {totalQuantity}
                </span>
              )}
            </button>
          </Link>
          <div className="relative">
            {user ? (
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="rounded-full p-2 flex items-center"
              >
                <img
                  src={user.photoURL || "/path/to/default-avatar.png"}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </button>
            ) : (
              <Link to="/sign-in">
                <button className="rounded-full p-2 flex items-center">
                  <FaUserCircle className="w-8 h-8 text-gray-700" />
                  <span className="ml-2">Sign In</span>
                </button>
              </Link>
            )}
            {showMenu && user && (
              <div className="absolute top-full right-0 bg-white border rounded-md shadow-lg mt-2 p-2 w-48">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-red-500 w-full"
                >
                  <RiLogoutCircleRLine className="mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 z-30`}
      >
        <div className="p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-xl font-bold"
          >
            &times;
          </button>
          <ul className="mt-4 space-y-4">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-[#F8F8F8] font-bold" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-[#F8F8F8] font-bold" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-[#F8F8F8] font-bold" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              Categories
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-[#F8F8F8] font-bold" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              Custom
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-md ${
                  isActive ? "bg-[#F8F8F8] font-bold" : ""
                }`
              }
              onClick={() => setSidebarOpen(false)}
            >
              Blog
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
