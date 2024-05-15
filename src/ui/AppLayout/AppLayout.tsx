import { Outlet, useNavigation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { CartOverview } from '../../cart/CartOverview';
import { Loader } from '../Loader/Loader';

export function AppLayout() {
  const navigation = useNavigation();

  return (
    <div className="min-h-screen bg-stone-100 pb-16">
      <Header />
      <main className="mx-auto max-w-3xl">
        {navigation.state === 'loading' ? <Loader /> : <Outlet />}
      </main>

      <CartOverview />
    </div>
  );
}
