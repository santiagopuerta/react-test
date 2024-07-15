import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import { RouteConfig } from "./RouteConfig"
import { RouteItem } from "../types"
import NotFound from "../pages/404"
import { getPathByName } from "./RouteConfig"
import { setUserEmail } from "../store/reducers/userSlice"
import { RootState } from "../store/configStore"

export function AppRoutes() {
  const dispatch = useDispatch()
  const userEmail = useSelector((state: RootState) =>
    state.userState ? state.userState.userEmail : null,
  )

  useEffect(() => {
    const emailFromLS = localStorage.getItem("email")

    if (emailFromLS) {
      dispatch(setUserEmail(emailFromLS))
    }
  }, [dispatch])

  const isAuthenticated = userEmail !== null

  return (
    <Router>
      <Routes>
        {RouteConfig.map((route: RouteItem, index: number) => {
          const Component = route.component

          // Redirect to home if user is authenticated
          if (route.path === "/login" && isAuthenticated) {
            return (
              <Route
                key={index}
                path="/login"
                element={<Navigate to={getPathByName("home")} />}
              />
            )
          }

          return <Route key={index} path={route.path} element={<Component />} />
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
