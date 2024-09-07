import React from 'react';
import logo1 from '../assets/icon.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 
import { LiaFlagUsaSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-[100px]">
      <div className="my-container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="flex flex-col items-start md:col-span-2 ">
        <div className="text-[20px] font-bold inline-flex items-center">
          <img src={logo1} alt="" className='h-[38px] w-[38px] me-[6px]' />
          Furni<span className="text-blue-500">Flex</span>
        </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4 ">About US</h3>
          <ul className="space-y-3 text-[#81859F] font-semibold">
            <li><Link to="#" className=" hover:text-white">Master Plan</Link></li>
            <li><Link to="#" className=" hover:text-white">Jobs</Link></li>
            <li><Link to="#" className=" hover:text-white">Invest</Link></li>
            <li><Link to="#" className=" hover:text-white">Pressroom</Link></li>
            <li><Link to="#" className=" hover:text-white">Blog</Link></li>
            <li><Link to="#" className=" hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Explore EEVE</h3>
          <ul className="space-y-3 text-[#81859F] font-semibold">
            <li><Link to="#" className=" hover:text-white">Unlock my Robot Power</Link></li>
            <li><Link to="#" className=" hover:text-white">Starlight</Link></li>
            <li><Link to="#" className=" hover:text-white">Robot Platform</Link></li>
            <li><Link to="#" className=" hover:text-white">EEVE Roadmap</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Community & Support</h3>
          <ul className="space-y-3 text-[#81859F] font-semibold">
            <li><Link to="#" className=" hover:text-white">Willow X Community</Link></li>
            <li><Link to="#" className=" hover:text-white">Developer & Maker Access</Link></li>
            <li><Link to="#" className=" hover:text-white">Special Cases</Link></li>
          </ul>
        </div>
      </div>
      <div className="my-container mx-auto mt-[100px] border-t border-gray-700 pt-4   text-[#81859F] font-semibold">
        <div className='md:flex justify-between items-center mt-10 '>
        <div className="inline-flex gap-4  ">
         <Link to="#" className="hover:text-white">
            <FaFacebookF />
         </Link>
         <Link to="#" className="hover:text-white">
            <FaInstagram />
         </Link>
         <Link to="#" className="hover:text-white">
            <FaTwitter />
         </Link>
         <Link to="#" className="hover:text-white">
            <FaLinkedinIn />
         </Link>
        </div>
        <div className="flex space-x-8 ">
          <Link to="#" className="hover:text-white">March22 Recap</Link>
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <Link to="#" className="hover:text-white">General Terms</Link>
          <Link to="#" className="hover:text-white">Contact</Link>
        </div>
        <div className="flex items-center space-x-2 ">
          <LiaFlagUsaSolid />
          <span>United States (English)</span>
        </div>
        </div>
          <div className="text-center text-[#323544] font-semibold mt-10">
          <span> EEVE&copy; 2024. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
