import axios from "axios";
import { ICategory } from "../types/globalTypes";

const API = process.env.REACT_APP_BACKEND_CATEGORIES_URL;

export const getAllCategories = async () => {
    return await axios.get<ICategory[]>(`${API}`);
}

export const createCategory = async (category: ICategory) => {
    return await axios.post(`${API}create/`, category)
}

export const deleteCategory = async (id: number) => {
    return await axios.delete(`${API}delete/${id}/`);
}

export const updateCategory = async (id: number, category: ICategory) => {
    return await axios.put(`${API}update/${id}`, category)
}