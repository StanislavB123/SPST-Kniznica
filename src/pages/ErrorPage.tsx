import { ErrorHeader, Break, ErrorLink } from "../styles/Home.styled";
import "./ErrorPage.css";

function ErrorPage() {
    return (
        <div className="error">
            <ErrorHeader>Stránka nenájdená</ErrorHeader>
            <Break />
            <ErrorLink href="/">Návrat na domovskú stránku</ErrorLink>
        </div>
    )
}

export default ErrorPage
