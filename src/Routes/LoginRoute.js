import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const LoginRoute = ({ children }) => {
  if (Cookies.get("token") === undefined) {
    return <Navigate to={"/login"} />;
  } else if (Cookies.get("token") !== undefined) {
    return children;
  }
};

export default LoginRoute;
