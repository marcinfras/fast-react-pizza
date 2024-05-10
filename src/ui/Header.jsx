import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 text-xs sm:text-base py-3 px-4 flex items-center justify-between md:py-4 md:px-5">
      <Link className="tracking-widest uppercase text-stone-800" to="/">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
