import Icon from "../asset/docker.svg";
import Home from "../asset/home1.svg";

export default function Navbar() {
  return (
    <nav className="bg-white sm:bg-slate-600 lg:bg-white">
      <div className="container mx-auto px-4 sm:px-16 flex justify-between items-center py-6">
        <figure className="order-1 flex  items-center">
          <img src={Icon} alt="" className="h-10 w-10 mr-3" />
           <h1 className="font-black">CUCI TRUS</h1>
        </figure>
        <div className="flex-grow flex justify-center order-2 ml-[-7.5rem]">
          <ul className="hidden lg:flex justify-center space-x-4">
            <li className="mx-4 bg-black text-center text-white rounded-full flex items-center justify-center px-4 py-1 ml-[0.1px]">
              <img src={Home} alt="" className="h-5 w-5 mr-1 ml-[-5px]" />
              <a href="" className="cursor-pointer">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
