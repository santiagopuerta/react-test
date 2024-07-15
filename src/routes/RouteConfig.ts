import Home from "../pages/Home"
import Login from "../pages/Login"
import { RouteItem } from "../types"

const RouteConfig: RouteItem[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
]

export default RouteConfig
