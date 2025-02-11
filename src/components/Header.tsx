import Link from "next/link";
import { FaSearchengin } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";





export default function Header () {
  return (
    <header>
        {/* left */}
        <div>
        <h1>SHOP.CO</h1>
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
        <div>
            <div>
            <FaSearchengin />
            <input placeholder="search item..."></input>


            </div>
        </div>
        {/* cart */}
        <FaCartArrowDown />

    </header>
  );
}
