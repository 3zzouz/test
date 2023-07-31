import React from "react";
import '../index.css'
function Header(prop) {
  return (
    <>
      <div className="mx-auto py-10 px-14 flex justify-between items-center " >
        <h1 className="mx-auto text-white font-bold uppercase text-[2rem] sm:ml-0 z-[100]" >
          <a href="\">Hubio</a>
        </h1>
        <nav className="hidden sm:flex space-x-4 z-[100]">
          <button 
          className=
          "rounded-xl w-24 h-12 drop-shadow-2xl text-white text-base bg-rose-400 border-white border" >
            <a href="\join">Join Us</a>
          </button>
          <button className=
          "w-24 h-12 drop-shadow-2xl text-rose-400 bg-white rounded-xl" >
            <a href="\login">Login</a>
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;
