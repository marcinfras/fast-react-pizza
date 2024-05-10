import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import { formatCurrency } from '../utils/helpers';
import EmptyCart from '../cart/EmptyCart';
import { useState } from 'react';
import { createOrder } from '../services/apiRestaurant';
import { store } from '../store';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function NewOrder() {
  const navigation = useNavigation();

  const [withPriority, setWithPriority] = useState(false);

  const cart = useSelector(getCart);
  const name = useSelector((state) => state.user.name);

  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  const errors = useActionData();

  if (totalCartPrice === 0) return <EmptyCart />;

  return (
    <div className="px-4 py-5 md:px-7 md:py-8">
      <h1 className="mb-7 text-xl font-bold text-stone-800 md:mb-10">
        Ready to order? Lets go!
      </h1>
      <Form method="POST" className="flex flex-col gap-5 sm:gap-7">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="w-40">First Name</label>
          <input
            type="text"
            className="input grow"
            name="customer"
            defaultValue={name}
            required
          />
        </div>
        <div className=" flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="w-40">Phone number</label>
          <div className="flex grow flex-col gap-2">
            <input type="tel" className="input " name="phone" required />
            {errors?.phone && (
              <div className="">
                <p className="bg-red-100 px-3 py-1 text-xs tracking-wide text-red-700">
                  {errors.phone}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
          <label className="w-40">Address</label>
          <input type="text" className="input grow" name="address" required />
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={() => setWithPriority((state) => !state)}
            className="block h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-300 focus:ring-offset-2"
          />
          <label htmlFor="priority" className="font-semibold text-stone-600">
            Want to yo give your order priority?
          </label>
        </div>
        <div className="mt-3">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary">
            {navigation.state === 'submitting'
              ? 'Placing order...'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = {};

  if (!isValidPhone(data.phone)) {
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you';
    return errors;
  }

  const order = {
    ...data,
    priority: data.priority === 'true',
    cart: JSON.parse(data.cart),
  };

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default NewOrder;
