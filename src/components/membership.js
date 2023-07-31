import React from "react";

function Membership() {
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-[2vw] font-bold">Are You a Member ?</h1>
          <p className="w-[16.7vw] text-xs text-gray-500">
            in the case you are, enter your CIN and we will enhance your study
            experience
          </p>
          <input
            placeholder="CIN"
            type="number"
            className="h-9 w-[30vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:w-[25vw] sm:text-sm lg:w-[18vw]"
          />
        </div>
        <button className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0">
          Confirm
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <div className="flex items-center space-x-24">
          <h1 className="text-[2vw] font-bold">Your Photo</h1>
          <div className="mx-auto flex w-[7vw] items-center overflow-hidden rounded-full">
            <img
              src="https://hubio-dev.web.app/member.02d8a8ef.png"
              alt="member"
              className="w-[7.5vw] mt-0"
            />
          </div>
        </div>
        <button className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0">
          Change your Photo
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <h1 className="text-[2vw] font-bold">update Password</h1>
        <div className="flex items-center justify-between w-[60%]">
          <input
            placeholder="New Password"
            type="password"
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <button className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
