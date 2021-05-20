import { Route, Redirect } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuth"
import {ToastContainer} from "react-toastify";

function PrivateRoute({
  children,
  ...rest
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const isAuthenticated = useAuthenticated();

  return (
    <>
      <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/profile",
              state: { from: location},
            }}
          />
        )
      }
    />
    <ToastContainer />
    </>
  );
}

export default PrivateRoute;