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
      
            <div className="flex justify-start items-center w-[300px] bg-[#F0F0F0]">
            <FaSearchengin className="text-xl"/>
            <input placeholder="search item..."></input>


            </div>
        
        {/* cart */}
        <div className="flex items-center">
        <FaCartArrowDown />
        </div>

    </header>
  );
}
