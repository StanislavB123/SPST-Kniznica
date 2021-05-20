import "./Homepage.css";
import {Buttons, HomepageHeader, HomepageSubheader, LoginButton, LoginButtonLink, SchollButton, SchollButtonLink} from "../styles/Home.styled";

function Homepage() {
    return (
        <div className="home">
            <HomepageHeader>SPŠT Knižnica</HomepageHeader>
            <HomepageSubheader>Dnes objednaj zajtra vyzdvihni</HomepageSubheader>
            <Buttons>
                <LoginButton>
                    <LoginButtonLink>Chcem sa prihlásiť</LoginButtonLink>
                </LoginButton>
                <SchollButton>
                    <SchollButtonLink>Návrat na školskú stránku</SchollButtonLink>
                </SchollButton>
            </Buttons>
        </div>
    )
}

export default Homepage
