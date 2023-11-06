import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  }
]);

export default router;