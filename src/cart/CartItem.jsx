import { formatCurrency } from '../utils/helpers';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ pizza }) {
  const { pizzaId, name, quantity, totalPrice } = pizza;

  return (
    <li className="px-1  py-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-2 md:py-4">
      <div className="space-x-2">
        <span>{quantity}x</span>
        <span>{name}</span>
      </div>
      <div className="flex grow items-center justify-between gap-2 sm:justify-end sm:gap-7 ">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity} />
      </div>
    </li>
  );
}

export default CartItem;
