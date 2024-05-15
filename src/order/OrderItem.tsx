import { PizzaType } from '../cart/CartItem';
import { formatCurrency } from '../utils/helpers';

type Props = {
  pizza: PizzaType;
  ingredients: string[];
  isLoadingIng: boolean;
};

export function OrderItem({ pizza, ingredients, isLoadingIng }: Props) {
  const { quantity, name, totalPrice } = pizza;

  return (
    <div className="flex flex-col gap-1 px-1 py-2 ">
      <div className="flex justify-between text-sm sm:text-base">
        <p className="space-x-2">
          <span className="font-semibold">{quantity}x</span>
          <span className="text-stone-800">{name}</span>
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-xs capitalize italic tracking-wide text-stone-500 sm:text-sm">
        {isLoadingIng && 'Loading...'}
        {ingredients && ingredients?.join(', ')}
      </p>
    </div>
  );
}
