import { ChangeEvent, FormEvent, useState } from "react";
import "../../pages/books/CreateBook.css";
import { TextField } from "@material-ui/core";
import * as bookService from "../../api/services/BookService";
import { Form, Break, BookButton, BookDiv, BookWrapper } from "../../styles/Books.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function CreateBook() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [genre, setGenre] = useState("");
    const [author, setAuthor] = useState("");
    const [year, setYear] = useState("");
    const [pages, setPages] = useState("");
    const [image, setImage] = useState("");

    const successBook = () => toast.success("Kniha bola vytvorená");
    const errorBook = () => toast.error("Problém pri vytvorení knihy skontrolujte údaje");

    const onChangeName = (e: InputChange) => {
        setName(e.target.value);
    }

    const onChangeDescription = (e: InputChange) => {
        setDescription(e.target.value);
    }

    const onChangeGenre = (e: InputChange) => {
        setGenre(e.target.value);
    }

    const onChangeAuthor = (e: InputChange) => {
        setAuthor(e.target.value);
    }

    const onChangePages = (e: InputChange) => {
        setPages(e.target.value);
    }

    const onChangeYear = (e: InputChange) => {
        setYear(e.target.value);
    }

    const onChangeImages = (e: InputChange) => {
        setImage(e.target.value);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (name === "" || description === "" || genre === "" || author === "" || year === "" || pages === "" || image === "") {
            errorBook();
        }

        const data = {
            name,
            description,
            genre,
            author,
            year,
            pages,
            image
        }

        await bookService.createNewBook(data);
        successBook();
        setName("");
        setDescription("");
        setGenre("");
        setAuthor("");
        setYear("");
        setPages("");
        setImage("");
    }
    return (
        <BookWrapper>
            <Form onSubmit={handleSubmit}>
                <BookDiv>
                    <TextField className="bookForm" placeholder="Meno" value={name} onChange={onChangeName} /><Break />
                    <TextField className="bookForm" placeholder="Popis" value={description} onChange={onChangeDescription} /><Break />
                    <TextField className="bookForm" placeholder="Žáner" value={genre} onChange={onChangeGenre} /><Break />
                    <TextField className="bookForm" placeholder="Author" value={author} onChange={onChangeAuthor} /><Break />
                    <TextField className="bookForm" placeholder="Rok vydania" value={year} onChange={onChangeYear} /><Break />
                    <TextField className="bookForm" placeholder="Počet strán" value={pages} onChange={onChangePages} /><Break />
                    <TextField className="bookForm" placeholder="Obrázok" value={image} onChange={onChangeImages} /><Break />
                    <BookButton>Pridaj novú knihu</BookButton>
                    <ToastContainer />
                </BookDiv>
            </Form>
        </BookWrapper>
    )
}

export default CreateBook
