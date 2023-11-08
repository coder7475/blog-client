import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import AllBlogs from '../pages/AllBlogs';
import BlogDetailsPage from '../pages/BlogDetailsPage';
import KaTable from '../pages/KaTable';
import PrivateRoute from '../routes/PrivateRoute';
import Wishlist from '../pages/Wishlist';
import AddBlog from '../pages/AddBlog';
import UpdateBlog from '../pages/UpdateBlog';

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
      },
      {
        path: "/:id",
        element: <PrivateRoute><BlogDetailsPage/></PrivateRoute>
      },
      {
        path: "/featuredTable",
        element: <KaTable/>
      },
      {
        path: "/wishlist",
        element: 
        <PrivateRoute>
          <Wishlist/>
        </PrivateRoute>
          
      },
      {
        path: "/addBlog",
        element: 
        <PrivateRoute>
          <AddBlog/>
        </PrivateRoute>
      },
      {
        path: "/updateBlog/:id",
        element: 
        <PrivateRoute>
          <UpdateBlog/>
        </PrivateRoute>
      }
    ]
  }
]);

export default router;