import { createBrowserRouter } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Initial from '../pages/Initial';

const Router = createBrowserRouter([
    {
      path: "/", 
      element: <Initial/>
    },
    {
      path: "/login", 
      element: <Login/>
    },
    {
      path: "/signup", 
      element: <Signup/>
    },
    {
      path: "/home",
      element: <Home/>
    }
  ]);

export default Router;