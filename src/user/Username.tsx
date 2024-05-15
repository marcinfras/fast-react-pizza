//JSX Version
// import { useSelector } from 'react-redux';

// function Username() {
//   const name = useSelector((state) => state.user.name);

//   if (!name) return null;

//   return <div className="hidden sm:block">{name}</div>;
// }

// export default Username;

//TSV Version
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export function Username() {
  const name = useSelector((state: RootState) => state.user.name);

  if (!name) return null;

  return <div className="hidden sm:block">{name}</div>;
}
