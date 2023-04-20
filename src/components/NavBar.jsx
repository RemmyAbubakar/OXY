import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

function NavBar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="py-0 sticky top-0 z-50 bg-neutral-700 shadow-2xl lg:rounded-2xl cursor-pointer lg:w-[95%] md:w-full sm:w-full lg:ml-9">
      <nav>
        <div className="flex justify-between items-center">
          <div className="flex justify-center mt-3 items-center mb-5">
            <Link to="/">
              <img
                src="./images/favicon.ico"
                alt=""
                className="lg:ml-14 md:ml-14 sm:ml-7 h-14 w-14 mt-3"
              />
            </Link>
          </div>

          <div className="text-white lg:mr-20 md:mr-6">
            <ul className="lg:flex md:flex sm:hidden text-sm font-thin lg:space-x-14 md:space-x-9 font-saf hover:underline-offset-2">
              <Link to="/">
                <li className=" hover:scale-110 hover:duration-150 hover:line-through">HOME</li>
              </Link>

              <Link to="/aboutus">
                <li className=" hover:scale-110 hover:duration-150 hover:line-through">
                  ABOUT US
                </li>
              </Link>

              <Link to="/projects">
                <li className=" hover:scale-110 hover:duration-150 hover:line-through">
                  PROJECTS
                </li>
              </Link>

              <Link to="/partners">
                <li className=" hover:scale-110 hover:duration-150 hover:line-through">
                  PARTNERS
                </li>
              </Link>

              <Link to="/contact">
                <li className=" hover:scale-110 hover:duration-150 hover:line-through">CONTACT</li>
              </Link>
            </ul>
          </div>

          <div className="mb-3 lg:mr-20 md:mr-16 sm:mr-7 mt-4 lg:hidden md:hidden sm:flex">
            <div className="flex">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                <div class="space-y-2">
                  <span class="block w-5 h-0.5 bg-white"></span>
                  <span class="block w-8 h-0.5 bg-white"></span>
                  <span class="block w-8 h-0.5 bg-white"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
