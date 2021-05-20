import axios from "axios";
import { IBook } from "../types";

const API = process.env.REACT_APP_BACKEND_URL;

export const getAllBooks = async () => {
    return await axios.get<IBook[]>(`${API}books/`);
}

export const getOneBook = async (id: number) => {
    return await axios.get<IBook>(`${API}books/${id}`);
}

export const createNewBook = async (book: IBook) => {
    return await axios.post(`${API}books/create/`, book);
}

export const deleteBook = async (id: number) => {
    return await axios.delete(`${API}books/delete/${id}/`)
}

export const updateBook = async (id: number, book: IBook) => {
    return await axios.put(`${API}books/update/${id}`, book)
}