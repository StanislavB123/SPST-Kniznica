import "./CreateBook.css";
import {BooksHeader} from "../../styles/Books.styled";
import CreateBookForm from "../../components/books/CreateBookForm";

function CreateBook() {
    return (
        <div className="create">
            <BooksHeader>Vytvorenie novej knihy</BooksHeader>
            <CreateBookForm />
        </div>
    )
}

export default CreateBook
