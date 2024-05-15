//JSX Version
// import { getOrder } from '../services/apiRestaurant';
// import { useFetcher, useLoaderData } from 'react-router-dom';
// import { OrderItem } from './OrderItem';

// import { calcMinutesLeft, formatCurrency, formatDate } from '../utils/helpers';
// import UpdateOrder from './UpdateOrder';
// import { useEffect } from 'react';

// function Order() {
//   const fetcher = useFetcher();
//   const order = useLoaderData();
//   const {
//     id,
//     priority,
//     status,
//     estimatedDelivery,
//     cart,
//     priorityPrice,
//     orderPrice,
//   } = order;

//   useEffect(() => {
//     if (fetcher.state === 'idle' && !fetcher.data) {
//       fetcher.load('/menu');
//     }
//   }, [fetcher]);

//   // console.log(fetcher.data);

//   return (
//     <div className="px-4 py-5 md:px-7 md:py-8">
//       <div className="flex flex-wrap items-center justify-between gap-2">
//         <h1 className="text-xl font-semibold">Order #{id} status</h1>
//         <div className="b flex items-center gap-3 text-stone-50">
//           {priority && (
//             <p className="rounded-full bg-red-500 px-2 py-1 text-sm font-medium uppercase tracking-wider">
//               Priority
//             </p>
//           )}

//           <p className="rounded-full bg-green-500 px-2 py-1 text-sm font-medium uppercase tracking-wider ">
//             {status} order
//           </p>
//         </div>
//       </div>
//       <div className="my-7 flex flex-col gap-3 bg-stone-200 p-4 sm:my-9 sm:p-6">
//         <p className="font-semibold">
//           {calcMinutesLeft(estimatedDelivery) > 1
//             ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
//             : 'Order should have arrived'}
//         </p>
//         <p className="text-xs tracking-wide text-stone-500">
//           (Estimated delivery: {formatDate(estimatedDelivery)})
//         </p>
//       </div>
//       <div className="flex flex-col divide-y border-t">
//         {cart.map((pizza) => (
//           <OrderItem
//             key={pizza.pizzaId}
//             pizza={pizza}
//             ingredients={
//               fetcher?.data?.find((item) => item.id === pizza.pizzaId)
//                 .ingredients ?? []
//             }
//             isLoadingIng={fetcher.state === 'loading'}
//           />
//         ))}
//       </div>
//       <div className="my-7 flex flex-col gap-3 bg-stone-200 p-4 sm:my-9 sm:p-6">
//         <p className="text-sm text-stone-700">
//           Price pizza: {formatCurrency(orderPrice)}
//         </p>
//         {priority && (
//           <p className="text-sm text-stone-700">
//             Price priority: {formatCurrency(priorityPrice)}
//           </p>
//         )}
//         <p className="font-semibold">
//           To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
//         </p>
//       </div>
//       {!priority && <UpdateOrder />}
//     </div>
//   );
// }

// export async function loader({ params }) {
//   const order = await getOrder(params.orderId);
//   return order;
// }

// export default Order;

//TSX Version
import { getOrder } from '../services/apiRestaurant';
import {
  LoaderFunctionArgs,
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { OrderItem } from './OrderItem';

import { calcMinutesLeft, formatCurrency, formatDate } from '../utils/helpers';
import { UpdateOrder } from './UpdateOrder';
import { useEffect } from 'react';
import { MenuItemType, OrderType } from '../services/apiTypes';

export function Order() {
  const fetcher = useFetcher();
  const order = useLoaderData() as OrderType;
  const {
    id,
    priority,
    status,
    estimatedDelivery,
    cart,
    priorityPrice,
    orderPrice,
  } = order;

  useEffect(() => {
    if (fetcher.state === 'idle' && !fetcher.data) {
      fetcher.load('/menu');
    }
  }, [fetcher]);

  // console.log(fetcher.data);

  return (
    <div className="px-4 py-5 md:px-7 md:py-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-xl font-semibold">Order #{id} status</h1>
        <div className="b flex items-center gap-3 text-stone-50">
          {priority && (
            <p className="rounded-full bg-red-500 px-2 py-1 text-sm font-medium uppercase tracking-wider">
              Priority
            </p>
          )}

          <p className="rounded-full bg-green-500 px-2 py-1 text-sm font-medium uppercase tracking-wider ">
            {status} order
          </p>
        </div>
      </div>
      <div className="my-7 flex flex-col gap-3 bg-stone-200 p-4 sm:my-9 sm:p-6">
        <p className="font-semibold">
          {calcMinutesLeft(estimatedDelivery) > 1
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs tracking-wide text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <div className="flex flex-col divide-y border-t">
        {cart.map((pizza) => (
          <OrderItem
            key={pizza.pizzaId}
            pizza={pizza}
            ingredients={
              fetcher?.data?.find(
                (item: MenuItemType) => item.id === pizza.pizzaId,
              ).ingredients ?? []
            }
            isLoadingIng={fetcher.state === 'loading'}
          />
        ))}
      </div>
      <div className="my-7 flex flex-col gap-3 bg-stone-200 p-4 sm:my-9 sm:p-6">
        <p className="text-sm text-stone-700">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-700">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder />}
    </div>
  );
}

// type ParamsType = {
//   params: {
//     orderId: string;
//   };
// };

export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.orderId) return;
  const order = await getOrder(params.orderId);
  return order;
}
