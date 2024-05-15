//JS Version
// import { useSelector } from 'react-redux';
// import { CreateUser } from '../user/CreateUser';
// import { Button } from './Button/Button';

// function Home() {
//   const name = useSelector((state) => state.user.name);

//   return (
//     <div className="flex flex-col gap-1 px-5 py-[50px] text-center md:gap-2 md:px-8 md:py-[60px]">
//       <h1 className="text-3xl font-bold text-stone-700 ">The best pizza</h1>
//       <h2 className="text-xl font-bold text-yellow-500 md:text-2xl">
//         Straight out of the oven, straight to you.
//       </h2>
//       {name ? (
//         <div className="mt-4">
//           <Button to="/menu" type="primary">
//             Continue ordering, {name}
//           </Button>
//         </div>
//       ) : (
//         <CreateUser />
//       )}
//     </div>
//   );
// }

// export default Home;

//TSX Version
import { useSelector } from 'react-redux';
import { CreateUser } from '../../user/CreateUser';
import { Button } from '../Button/Button';
import { RootState } from '../../store';

export function Home() {
  const name = useSelector((state: RootState) => state.user.name);

  return (
    <div className="flex flex-col gap-1 px-5 py-[50px] text-center md:gap-2 md:px-8 md:py-[60px]">
      <h1 className="text-3xl font-bold text-stone-700 ">The best pizza</h1>
      <h2 className="text-xl font-bold text-yellow-500 md:text-2xl">
        Straight out of the oven, straight to you.
      </h2>
      {name ? (
        <div className="mt-4">
          <Button to="/menu" type="primary">
            Continue ordering, {name}
          </Button>
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}
