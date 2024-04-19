import React from 'react'
import google from "../assets/Google Logo.svg";
function OAuth() {

  return (
    <div className="flex justify-center">
            <button type='button' className="flex items-center text-xs md:text-sm justify-center gap-3 align-middle  font-medium bg-[#E06C2E] md:pl-9 md:pr-9 p-5 pt-2 pb-2 mb-6 mt-4 rounded-full text-white text-center transition duration-300 ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E06C2E]">
              <img src={google} alt="" />
              Login with google
            </button>
          </div>
  )
}

export default OAuth