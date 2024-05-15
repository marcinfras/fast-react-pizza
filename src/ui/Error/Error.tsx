import { useRouteError } from 'react-router-dom';

export function Error() {
  const error = useRouteError();

  return (
    <p className="my-7 text-center text-xl font-semibold">
      {(error as Error).message}😥
    </p>
  );
}
