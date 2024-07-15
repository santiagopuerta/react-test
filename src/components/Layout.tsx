import { LayoutProps } from "../types"

export function Layout({ children }: LayoutProps) {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">{children}</div>
      </div>
    </div>
  )
}

export default Layout
