import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import AllBlogs from '../pages/AllBlogs';

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
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/allBlogs",
        element: <AllBlogs/>
      }
    ]
  }
]);

export default router;