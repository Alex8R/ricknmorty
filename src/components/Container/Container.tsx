import { FC } from 'react'
import "./Container.css"

export const Container: FC = ({ children, ...props }) => (
  <div className="container">{children}</div>
)
