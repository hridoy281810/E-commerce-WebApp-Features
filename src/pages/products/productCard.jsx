// ProductCard.jsx
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';  
import { useCart } from '../../provider/cartProvider';
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-[277px] h-[530px] bg-white border border-[#F1F1F1] rounded-[16px]  p-4 flex flex-col ">
      <div className="w-[245px] h-[236px] bg-[#F2F2F2] rounded-[8px] flex justify-center items-center px-5 py-4 mb-8">
        <img src={product.image} alt={product.name} className="w-[205px] h-[205px] object-cover" />
      </div>
      <div className='mb-8'>
        <h3 className="text-left text-lg font-semibold mb-4">{product.name}</h3>
        <div className="flex gap-2 text-gray-500 text-[18px] mb-4">
          <span className="text-black font-bold">€{product.price}</span>
          <span className="text-gray-400 line-through">€{product.oldPrice}</span> 
          <span className="text-[#B92E2E] font-semibold ">30% OFF</span>
        </div>
        <p className='text-sm text-[#838383]'>High Back Rocking Side Pocket Portable Folding Outdoor Camping Chairs</p>
      </div>
      <button
        className="w-full flex items-center justify-center bg-black text-white py-4 rounded-md font-barlow font-bold text-md leading-[19.2px]"
        onClick={() => addToCart(product)}
      >
        <FaShoppingCart className="mr-2" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
