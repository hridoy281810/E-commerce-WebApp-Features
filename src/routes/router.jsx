
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import CartOverviewPage from '../pages/products/overview';
import ProtectedRoute from '../provider/protectedRoute'
import Blog from '../pages/blog/blog';
import Payment from '../pages/chackout/payment';

import SignUpPage from '../pages/auth/signUpPage';
import SignInPage from '../pages/auth/signInPage';

const router = createBrowserRouter([
  {
    path: '/',
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
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
]);

export default router;
