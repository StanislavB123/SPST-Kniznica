import axios from "axios";
import { ICategory } from "../types";

const API = process.env.REACT_APP_BACKEND_URL;

export const getAllCategories = async () => {
    return await axios.get<ICategory[]>(`${API}categories/`);
}

export const createCategory = async (category: ICategory) => {
    return await axios.post(`${API}categories/create/`, category)
}

export const deleteCategory = async (id: number) => {
    return await axios.delete(`${API}categories/delete/${id}/`);
}

export const updateCategory = async (id: number, category: ICategory) => {
    return await axios.put(`${API}categories/update/${id}`, category)
}