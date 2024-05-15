import { Link } from 'react-router-dom';
import { SearchOrder } from '../../order/SearchOrder';
import { Username } from '../../user/Username';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 py-3 text-xs sm:text-base md:px-5 md:py-4">
      <Link className="uppercase tracking-widest text-stone-800" to="/">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
