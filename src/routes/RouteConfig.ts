import Home from "../pages/Home"
import Login from "../pages/Login"
import { RouteItem } from "../interfaces"

export const RouteConfig: RouteItem[] = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
]

export function getPathByName(name: string) {
  const route = RouteConfig.find((route) => route.name === name)
  return route ? route.path : "/"
}
