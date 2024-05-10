import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { formatCurrency } from '../utils/helpers';
import { addToCart, getCurrentQuantityById } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, imageUrl, name, ingredients, soldOut, unitPrice } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };

    dispatch(addToCart(item));
  };

  return (
    <li className="flex gap-3 py-2">
      <img className="h-24 " src={imageUrl} />
      <div className="flex grow flex-col justify-center gap-1 py-1 md:gap-2">
        <p className="font-medium text-stone-700">{name}</p>
        <p className="text-sm capitalize italic">{ingredients.join(', ')}</p>

        <div className="flex items-center justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {isInCart && (
            <UpdateItemQuantity
              pizzaId={id}
              currentQuantity={currentQuantity}
            />
          )}
          {!isInCart && !soldOut && (
            <Button type="small" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
