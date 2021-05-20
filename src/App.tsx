import Navbar from "./components/Navbar";
import {Route, Switch} from "react-router-dom";
import Hompeage from "./pages/Homepage";
import {Wrapper} from "./styles/Home.styled";
import Infopage from "./pages/Infopage";
import AllBooks from "./pages/books/AllBooks";
import AllCategories from "./pages/categories/AllCategories";
import CreateBook from "./pages/books/CreateBook";
import CreateCategory from "./pages/categories/CreateCategory";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/auth/ProfilePage";
import PrivateRoute from "./components/auth/PrivateRoute";
import ErrorPage from "./pages/ErrorPage";
import BorrowBook from "./pages/books/BorrowBook";

function App() {
  return (
    <Wrapper>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hompeage} />
          <Route exact path="/info" component={Infopage} />
          <Route exact path="/books" component={AllBooks} />
          <Route exact path="/categories" component={AllCategories} />
          <Route exact path="/createbook" component={CreateBook} />
          <Route exact path="/createcategory" component={CreateCategory} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/borrow" component={BorrowBook} />
          <PrivateRoute>
            <Route exact path="/profile" component={ProfilePage} />
          </PrivateRoute>
          <Route component={ErrorPage} />
        </Switch>
    </Wrapper>
  );
}

export default App;
