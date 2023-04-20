import React from "react";

function Footer() {
  return (
    <div className="cursor-pointer">
      <footer className="bg-neutral-700 p-5 flex justify-center items-center">
        <div>
          <img
            src="/images/favicon.ico"
            alt=""
            className="h-20 w-20 flex justify-center mb-3 ml-20"
          />
          <p className="text-lg font-ray text-white flex justify-center">
            <marquee height="50%">© 2023 Oxzy, all rights reserved</marquee>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
