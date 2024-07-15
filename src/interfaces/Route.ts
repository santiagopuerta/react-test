import { ComponentType } from "react"

export interface RouteItem {
  name?: string
  path: string
  component: ComponentType
}
