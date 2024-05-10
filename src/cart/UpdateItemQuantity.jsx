import { useDispatch } from 'react-redux';
import Button from '../ui/Button';
import {
  decreasePizzaQuantity,
  deletePizza,
  increasePizzaQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex  items-center gap-6">
        <div className="flex items-center gap-2">
          <Button
            type="round"
            onClick={() =>
              currentQuantity > 1
                ? dispatch(decreasePizzaQuantity(pizzaId))
                : dispatch(deletePizza(pizzaId))
            }
          >
            -
          </Button>
          <span className="text-sm font-medium">{currentQuantity}</span>
          <Button
            type="round"
            onClick={() => dispatch(increasePizzaQuantity(pizzaId))}
          >
            +
          </Button>
        </div>

        <Button type="small" onClick={() => dispatch(deletePizza(pizzaId))}>
          Delete
        </Button>
      </div>
    </>
  );
}

export default UpdateItemQuantity;
