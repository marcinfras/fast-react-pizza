//JSX Version
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import { loader as menuLoader } from './menu/Menu';
// import { loader as orderLoader } from './order/Order';
// import { action as orderAction } from './order/NewOrder';
// import { action as updateOrderAction } from './order/UpdateOrder';

// import { AppLayout } from './ui/AppLayout/AppLayout';
// import { Home } from './ui/Home/Home';
// import { Menu } from './menu/Menu';
// import { Error } from './ui/Error/Error';
// import { Cart } from './cart/Cart';
// import { NewOrder } from './order/NewOrder';
// import { Order } from './order/Order';

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/menu',
//         element: <Menu />,
//         loader: menuLoader,
//         errorElement: <Error />,
//       },
//       {
//         path: '/cart',
//         element: <Cart />,
//       },
//       {
//         path: '/order/new',
//         element: <NewOrder />,
//         action: orderAction,
//       },
//       {
//         path: '/order/:orderId',
//         element: <Order />,
//         loader: orderLoader,
//         action: updateOrderAction,
//         errorElement: <Error />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;

//TSX Version
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { loader as menuLoader } from './menu/Menu';
import { loader as orderLoader } from './order/Order';
import { action as orderAction } from './order/NewOrder';
import { action as updateOrderAction } from './order/UpdateOrder';

import { AppLayout } from './ui/AppLayout/AppLayout';
import { Home } from './ui/Home/Home';
import { Menu } from './menu/Menu';
import { Error } from './ui/Error/Error';
import { Cart } from './cart/Cart';
import { NewOrder } from './order/NewOrder';
import { Order } from './order/Order';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <NewOrder />,
        action: orderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        action: updateOrderAction,
        errorElement: <Error />,
      },
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
