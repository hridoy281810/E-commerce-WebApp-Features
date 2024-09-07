
import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import App from '../App';
import CartOverviewPage from '../pages/products/overview';
import ProtectedRoute from '../provider/protectedRoute'
import Blog from '../pages/blog/blog';
import Payment from '../pages/chackout/payment';

const router = createBrowserRouter([
  {
    path: '/products',
    element: <ProtectedRoute element={App} />,
  },
  {
    path: '/cart-overview',
    element: <ProtectedRoute element={CartOverviewPage} />,
  },
  {
    path: '/payment',
    element: <ProtectedRoute element={Payment} />,
  },
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

export default router;
