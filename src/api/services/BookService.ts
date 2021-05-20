import axios from "axios";
import { IBook } from "../types/globalTypes";

const API = process.env.REACT_APP_BACKEND_BOOKS_URL;

export const getAllBooks = async () => {
    return await axios.get<IBook[]>(`${API}`);
}

export const getOneBook = async (id: number) => {
    return await axios.get<IBook>(`${API}${id}`);
}

export const createNewBook = async (book: IBook) => {
    return await axios.post(`${API}create/`, book);
}

export const deleteBook = async (id: number) => {
    return await axios.delete(`${API}delete/${id}/`)
}

export const updateBook = async (id: number, book: IBook) => {
    return await axios.put(`${API}update/${id}`, book)
}