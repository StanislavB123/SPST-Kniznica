import "./ProfilePage.css";
import {useUsername} from "../../hooks/useAuth";
import {logOut} from "../../redux/actions/authActions";
import {useDispatch} from "react-redux";
import {LogoutLink, Profile, UserHeader, CategoryLink, AuthHeader, AuthWrapper, Break, LoginWrapper, BookLink} from "../../styles/Auth.styled";

function ProfilePage() {
    const username = useUsername();
    const dispatch = useDispatch();
    return (
        <div className="profile">
           <Profile>
                <AuthHeader>Vitaj: {username}</AuthHeader>
                <Break />
                <LogoutLink className="link" onClick={() => dispatch(logOut())}>
                Chcem sa odhlásiť
                </LogoutLink>

                <LoginWrapper>
                    <UserHeader>Chcem</UserHeader>
                    <Break />
                    <Break />
                    <AuthWrapper>
                        <BookLink href="/createbook">Vytvoriť novú knihu</BookLink>
                        <CategoryLink href="/createcategory">Vytvoriť novú kategóriu</CategoryLink>
                    </AuthWrapper>
                </LoginWrapper>

           </Profile>
        </div>
    )
}

export default ProfilePage
