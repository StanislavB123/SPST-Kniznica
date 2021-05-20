import "./AllBooks.css";
import {BooksHeader} from "../../styles/Books.styled"
import FetchBooks from "../../components/books/FetchBooks";

function AllBooks() {
    return (
        <div className="all">
            <BooksHeader>Všetky knihy</BooksHeader>
            <FetchBooks />
        </div>
    )
}

export default AllBooks
