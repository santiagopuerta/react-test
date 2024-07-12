import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import RouteConfig from "./RouteConfig"
import { RouteItem } from "../types"
import NotFound from "../pages/404"

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        {RouteConfig.map((route: RouteItem, index: number) => {
          const Component = route.component
          return <Route key={index} path={route.path} element={<Component />} />
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
