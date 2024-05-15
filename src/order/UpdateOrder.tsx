//JSX Version
// import { useFetcher } from 'react-router-dom';
// import { Button } from '../ui/Button/Button';
// import { updateOrder } from '../services/apiRestaurant';
// import { Loader } from '../ui/Loader/Loader';

// function UpdateOrder() {
//   const fetcher = useFetcher();
//   // console.log(fetcher);
//   if (fetcher.state === 'submitting' || fetcher.state === 'loading')
//     return <Loader />;

//   return (
//     <fetcher.Form method="PATCH" className="text-right">
//       <Button type="primary">Make priority</Button>1
//     </fetcher.Form>
//   );
// }

// export async function action({ params }) {
//   const data = { priority: true };

//   await updateOrder(params.orderId, data);

//   return null;
// }

// export default UpdateOrder;

//TSX Version
import { ActionFunctionArgs, useFetcher } from 'react-router-dom';
import { Button } from '../ui/Button/Button';
import { updateOrder } from '../services/apiRestaurant';
import { Loader } from '../ui/Loader/Loader';

export function UpdateOrder() {
  const fetcher = useFetcher();
  // console.log(fetcher);
  if (fetcher.state === 'submitting' || fetcher.state === 'loading')
    return <Loader />;

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>1
    </fetcher.Form>
  );
}

type ParamsType = {
  params: {
    orderId: number;
  };
};

export async function action({ params }: ActionFunctionArgs) {
  if (!params.orderId) return;
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
