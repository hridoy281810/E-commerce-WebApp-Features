import React from 'react';
import { useCart } from '../../provider/cartProvider';
import NavBar from '../../components/navItem/navBar';
import image from '../../assets/image_125-removebg-preview 1.png';
import { FaMinus } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

const CartOverviewPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  // Calculate the subtotal
  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Format number to 2 decimal places
  const formatPrice = (price) => price.toFixed(2);

  return (
    <div>
      <NavBar />
      <div className="my-container mx-auto px-4 mt-5 md:flex md:space-x-8 gap-20">
      
        <div className="md:w-2/3">
          <h2 className="text-[28px] font-semibold mb-6">An overview of your order</h2>
          <div className="bg-[#FAFAFA] p-6">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((product) => (
                <div key={product.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center">
                    <div className="flex items-center border-[1px] border-[#DEDEDE] rounded-lg px-2 py-[10px]">
                      <button onClick={() => decreaseQuantity(product.id)} className="text-[#CFCFCF] font-bold">
                        <FaMinus />
                      </button>
                      <span className='mx-2 text-[20px] font-semibold'>{product.quantity}</span>
                      <button onClick={() => increaseQuantity(product.id)} className="text-[16px] font-light">
                        <LuPlus />
                      </button>
                    </div>
                    <div className='inline-flex'>
                      <div className='bg-[#EAEAEA] h-[88px] w-[88px] overflow-hidden border-[1px] border-[#DEDEDE] rounded-lg flex items-center justify-center mx-[12px]'>
                        <img src={image} alt={product.name} className="w-[88px] h-[88px]" />
                      </div>
                      <div className="mx-4">
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <button onClick={() => removeFromCart(product.id)} className="text-red-500 text-lg mb-8">
                      <RxCross2 />
                    </button>
                    <p className="text-[20px] font-semibold mt-8">€{formatPrice(product.price * product.quantity)}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="md:w-1/3 rounded-lg p-6 mt-6 md:mt-0">
          <h2 className="text-[28px] font-semibold mb-10">Order details</h2>
          <div className='bg-[#FAFAFA] border-[1px] border-[#DEDEDE] p-6 rounded-[12px] mb-6 text-[20px] text-[#656565]'>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>€{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimated Tax</span>
              <span>€-</span>
            </div>
            <hr className="my-4" />
            <div className="text-xl font-semibold flex justify-between mt-6">
              <span>Total</span>
              <span>€{formatPrice(subtotal)}</span>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 rounded text-[17px]"> <Link to="/payment">
          GO TO CHECKOUT
          </Link></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartOverviewPage;
