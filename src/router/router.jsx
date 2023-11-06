import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      }
    ]
  }
]);

export default router;