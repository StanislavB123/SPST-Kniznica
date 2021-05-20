import "./LoginPage.css";
import {AuthHeader} from "../../styles/Auth.styled";
import LoginForm from "../../components/auth/LoginForm";

function LoginPage() {
    return (
        <div className="auth">
            <AuthHeader>Prihlásenie</AuthHeader>
            <LoginForm />
        </div>
    )
}

export default LoginPage
