import { Route, Redirect } from "react-router-dom";
import { useAuthenticated } from "../../hooks/useAuth"
import {LoginError} from "../../hooks/useErrors";
import {ToastContainer} from "react-toastify";

function PrivateRoute({
  children,
  ...rest
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const isAuthenticated = useAuthenticated();
  const error = LoginError();

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
              state: { from: location, error },
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