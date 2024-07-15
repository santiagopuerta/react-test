import { Layout } from "../interfaces"
import NavBar from "./Navbar"

export function Layout({ children }: Layout) {
  return (
    <>
      <NavBar></NavBar>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8">{children}</div>
        </div>
      </div>
    </>
  )
}

export default Layout
