import { Navigate } from "react-router-dom"

const Auth = ({
  component,
}: {
  component: JSX.Element
}) => {

  // 鉴权条件
  if (window.localStorage.getItem("token")) {
    return component
  }
  return <Navigate to={'/index'} />
}

export default Auth