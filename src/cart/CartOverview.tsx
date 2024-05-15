//JSX Version
// import { Link, useLocation } from 'react-router-dom';
// import { getCart, getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
// import { useSelector } from 'react-redux';
// import { formatCurrency } from '../utils/helpers';

// function CartOverview() {
//   const { pathname } = useLocation();
//   const cart = useSelector(getCart);
//   const totalCartQuantity = useSelector(getTotalCartQuantity);
//   const totalCartPrice = useSelector(getTotalCartPrice);

//   // console.log(cart);

//   if (pathname === '/cart') return null;

//   if (cart.length === 0) return null;

//   return (
//     <div className="align-center fixed bottom-0 flex w-full justify-between bg-stone-800 px-5 py-4 uppercase text-stone-50">
//       <p className="space-x-3">
//         <span>{totalCartQuantity} pizzas</span>
//         <span>{formatCurrency(totalCartPrice)}</span>
//       </p>
//       <Link className="text-base font-light tracking-wide" to="/cart">
//         Open cart &rarr;
//       </Link>
//     </div>
//   );
// }

// export default CartOverview;

//TSX Version
import { Link, useLocation } from 'react-router-dom';
import { getCart, getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/helpers';

export function CartOverview() {
  const { pathname } = useLocation();
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  // console.log(cart);

  if (pathname === '/cart') return null;

  if (cart.length === 0) return null;

  return (
    <div className="align-center fixed bottom-0 flex w-full justify-between bg-stone-800 px-5 py-4 uppercase text-stone-50">
      <p className="space-x-3">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link className="text-base font-light tracking-wide" to="/cart">
        Open cart &rarr;
      </Link>
    </div>
  );
}
