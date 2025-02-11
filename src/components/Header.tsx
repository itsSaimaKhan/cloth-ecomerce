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
            <li>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}></Link>
                <Link href={""}></Link>
                <Link href={""}></Link>
            </li>
        </ul>
        {/* search input */}
      
            <div className="flex justify-start items-center">
            <FaSearchengin />
            <input placeholder="search item..."></input>


            </div>
        
        {/* cart */}
        <div className="flex items-center">
        <FaCartArrowDown />
        </div>

    </header>
  );
}
