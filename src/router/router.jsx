import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Registration from '../pages/Registration';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/register",
        element: <Registration />
      }
    ]
  }
]);

export default router;