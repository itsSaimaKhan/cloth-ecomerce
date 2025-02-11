import Link from "next/link";
import { FaSearchengin } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";





export default function Header () {
  return (
    <header className=" w-full h-[60px] flex justify-between items-center ">
        {/* left */}
        <div>
        <h1 className="text-xl sm:text-3xl font-bold">SHOP.CO</h1>
        </div>
        {/* navbar */}
        <ul>
            <li className="space-x-5">
                <Link href={""}>Shop</Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
            </li>
        </ul>
        {/* search input */}
      
            <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
            <FaSearchengin className="text-xl ml-2"/>
            <input placeholder="search item..." className="w-full ml-2 outline-none h-full  rounded-[62px] bg-[#F0F0F0]"></input>


            </div>
        
        {/* cart */}
        <div className="flex items-center mr-7 space-x-5">
        <FaCartArrowDown  className="text-2xl"/>
        </div>

    </header>
  );
}
