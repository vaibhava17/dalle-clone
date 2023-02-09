import Home from "../pages/Home";
import CreatePost from "../pages/CreatePost";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/create-post",
    component: CreatePost,
    exact: true,
  },
];

export default routes;