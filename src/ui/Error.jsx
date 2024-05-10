import { useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  return (
    <p className="my-7 text-center text-xl font-semibold">{error.message}😥</p>
  );
}

export default Error;
