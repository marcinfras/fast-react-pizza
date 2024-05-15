//JSX Version
// import { Link } from 'react-router-dom';
// import { Button } from '../ui/Button/Button';
// import { CartItem } from './CartItem';
// import { useDispatch, useSelector } from 'react-redux';
// import { clearCart, getCart } from './cartSlice';
// import { EmptyCart } from './EmptyCart';

// function Cart() {
//   const cart = useSelector(getCart);
//   const name = useSelector((state) => state.user.name);
//   const dispatch = useDispatch();

//   if (cart.length === 0) return <EmptyCart />;

//   return (
//     <div className="px-4 py-5 md:px-5 ">
//       <div className="mb-3 md:mb-6">
//         <Link to="/menu" className=" text-sm text-blue-600">
//           &larr; Back to menu
//         </Link>
//       </div>
//       {cart.length > 0 && (
//         <>
//           <h1 className="font-semibold md:text-lg">Your cart, {name}</h1>
//           <ul className=" mt-4  divide-y">
//             {cart.map((pizza) => (
//               <CartItem key={pizza.pizzaId} pizza={pizza} />
//             ))}
//           </ul>
//           <div className="mt-5 flex gap-3">
//             <Button type="primary" to="/order/new">
//               Order pizzas
//             </Button>
//             <Button type="secondary" onClick={() => dispatch(clearCart())}>
//               Clear cart
//             </Button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default Cart;

//TSX Version
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { CartItem } from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { EmptyCart } from './EmptyCart';
import { RootState } from '../store';

export function Cart() {
  const cart = useSelector(getCart);
  const name = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-5 md:px-5 ">
      <div className="mb-3 md:mb-6">
        <Link to="/menu" className=" text-sm text-blue-600">
          &larr; Back to menu
        </Link>
      </div>
      {cart.length > 0 && (
        <>
          <h1 className="font-semibold md:text-lg">Your cart, {name}</h1>
          <ul className=" mt-4  divide-y">
            {cart.map((pizza) => (
              <CartItem key={pizza.pizzaId} pizza={pizza} />
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <Button type="primary" to="/order/new">
              Order pizzas
            </Button>
            <Button type="secondary" onClick={() => dispatch(clearCart())}>
              Clear cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
