import { useEffect, useState } from "react";
import { IBook } from "../../api/types/globalTypes";
import * as bookService from "../../api/services/BookService";
import { BookDiv, BooksPages, BookImage, BooksHeader, BookButton, BookP, BookHead } from "../../styles/Books.styled";
import { Grid, Paper, Button } from "@material-ui/core";
import "../../pages/books/AllBooks.css";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

function FetchBooks() {
    const [books, setBooks] = useState<IBook[]>([]);
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loadBooks = async () => {
        const res = await bookService.getAllBooks();
        setBooks(res.data);
    }

    useEffect(() => {
        loadBooks();
    }, [])

    return (
        <BooksPages>
            {books.map((book) => {
                return (
                    <Grid item xs>
                        <Paper className="papercategory" elevation={3}>
                            <BookDiv>
                                <BookImage src={book.image} alt={book.name} />
                                <BooksHeader>{book.name}</BooksHeader>
                                <BookButton onClick={handleClickOpen}>Detail</BookButton>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <BookHead>Detail o knihe: {book.name}</BookHead>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            <BookP>Krátke info: {book.description}</BookP>
                                            <BookP>Žáner: {book.genre}</BookP>
                                            <BookP>Author/ka je: {book.author}</BookP>
                                            <BookP>Rok vydania: {book.year}</BookP>
                                            <BookP>Počet strán: {book.pages}</BookP>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button className="closeBtn" onClick={handleClose} color="primary">
                                            Zavrieť dialóg
                                        </Button>
                                        <Button className="borrowBtn" onClick={handleClose} color="primary" autoFocus>
                                            Požičiať
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </BookDiv>
                        </Paper>
                    </Grid>
                )
            })}
        </BooksPages>
    )
}

export default FetchBooks
