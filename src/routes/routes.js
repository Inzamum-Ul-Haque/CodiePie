import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blog from "../pages/Blog/Blog";
import Category from "../pages/Category/Category";
import Checkout from "../pages/Checkout/Checkout";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import SignIn from "../pages/SignIn/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
        loader: () => {
          return fetch("http://localhost:5000/categories");
        },
      },
      {
        path: "/category/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
        element: <Category />,
      },
      {
        path: "/course_details/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
        element: <CourseDetails />,
      },
      {
        path: "/course_checkout/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
        element: <Checkout />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

export default routes;
