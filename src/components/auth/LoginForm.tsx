import {useState} from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/actions/authActions";
import { Credentials, getToken } from "../../api/auth";
import { useAuthenticated } from "../../hooks/useAuth";
import "../../pages/auth/LoginPage.css";
import { Profile, Form, LoginWrapper, Break, LoginButton} from "../../styles/Auth.styled";
import {TextField} from "@material-ui/core";

function LoginForm() {
    const dispatch = useDispatch();
    const isAuthenticated = useAuthenticated();
    const [error, setError] = useState<string>("");
    const [credentials, setCredentials] = useState<Credentials>({
      username: "",
      password: "",
    });
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const token = await getToken(credentials);
        dispatch(logIn(token, credentials.username));
      } catch (e: any) {
        setError(e.message);
      }
    };

    if (isAuthenticated) return <Redirect to="/profile" />;


    return (
        <LoginWrapper>
         <Profile>
         {error.length !== 0 && <p style={{ color: "red" }}>{error}</p>}
          <Form onSubmit={handleSubmit}>
            <TextField
              type="text"
              id="username"
              className="loginForm"
              onChange={(event) =>
                setCredentials({ ...credentials, username: event.target.value })
              }
            />
            <Break />
            <TextField
              type="password"
              className="loginForm"
              id="password"
              onChange={(event) =>
                setCredentials({ ...credentials, password: event.target.value })
              }
            />
            <Break />
            <LoginButton type="submit">Prihlásenie</LoginButton>
          </Form>
         </Profile>
      </LoginWrapper>
    )
}

export default LoginForm;