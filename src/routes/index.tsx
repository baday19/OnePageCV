import { Navigate } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
// import Auth from "@/components/Auth"
import Resume from "@/pages/Resume"

export const routes = [
  {
    path: '/index',
    element: <Resume />,
  },
  {
    path: '/',
    element: <Navigate to={'/index'} />,
  },
] as {
  path: string,
  element: JSX.Element
}[]

export const RouterView = () => {
  return (
    <Routes>
      {
        routes.map((item, index) => {
          return <Route path={item.path} element={item.element} key={index} />
        })
      }
    </Routes>
  )
}