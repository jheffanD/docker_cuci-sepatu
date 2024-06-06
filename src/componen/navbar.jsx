import Icon from "../asset/docker.svg";
import Home from "../asset/home1.svg";
import { useState } from "react";

export default function Navbar() {
  const [toggel, settoggel] = useState(false);

  return (
    <>
      <nav className="bg-white sm:bg-slate-600 lg:bg-white">
        <div className="container mx-auto px-4 sm:16 flex justify-between items-center py-[22px]">
          <figure className="order-1">
            <img src={Icon} alt="" className="h-10 w-10" />
          </figure>
          <div className="flex-grow flex justify-center order-2">
            <div className="hidden lg:block py-[10px]">
              <ul className="flex justify-center border-2 border-black rounded-full  ">
                <li className="mx-4 bg-black text-center text-white rounded-full flex items-center justify-center px-4 py-1 ml-[0.1px]">
                  <img src={Home} alt="" className="h-5 w-5 mr-1 ml-[-5px]" />
                  <a href="#" className="cursor-pointer">
                    Home
                  </a>
                </li>
                <li className="text-center h-8 w-16 pt-1">
                  <a href="#" className="cursor-pointer">
                    List
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
