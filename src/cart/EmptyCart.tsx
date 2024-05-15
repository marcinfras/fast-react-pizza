import { Link } from 'react-router-dom';

export function EmptyCart() {
  return (
    <div className="px-4 py-5 md:px-5 ">
      <div className="mb-3 md:mb-6">
        <Link to="/menu" className=" text-sm text-blue-600">
          &larr; Back to menu
        </Link>
      </div>
      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}
