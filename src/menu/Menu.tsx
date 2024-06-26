//JSX Version
// import { useLoaderData } from 'react-router-dom';
// import { getMenu } from '../services/apiRestaurant';
// import MenuItem from './MenuItem';

// function Menu() {
//   const menu = useLoaderData();

//   return (
//     <ul className="divide-y px-4 py-3">
//       {menu.map((pizza) => (
//         <MenuItem key={pizza.id} pizza={pizza} />
//       ))}
//     </ul>
//   );
// }

// export async function loader() {
//   const menu = await getMenu();

//   return menu;
// }

// export default Menu;

//TSX Version
import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../services/apiRestaurant';
import { MenuItem } from './MenuItem';
import { MenuItemType } from '../services/apiTypes';

export function Menu() {
  const menu = useLoaderData() as MenuItemType[];

  return (
    <ul className="divide-y px-4 py-3">
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();

  return menu;
}
