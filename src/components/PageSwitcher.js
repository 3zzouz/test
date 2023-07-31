import React from "react";

function PageSwitcher() {
  return (
    <div className='z-100 mx-auto my-16 flex h-14 w-72 cursor-pointer justify-between rounded-2xl bg-[#fe3052] font-["Lato"] text-xl font-medium'>
      <button className="my-auto ml-1 h-[90%] w-[50%] rounded-xl bg-white px-2 text-[#f23c4c]">
        <a href="\">Hubio Study</a>
      </button>
      <button className="mx-auto text-white">
        <a href="\space">Hubio Space</a>
      </button>
    </div>
  );
}

export default PageSwitcher;
