import { CategoryHeader } from "../../styles/Categories.styled";
import "./CreateCategory.css";
import CreateCategoryForm from "../../components/categories/CreateCategoryForm";

function CreateCategory() {
    return (
        <div className="all">
            <CategoryHeader>Vytvor novú kategóriu</CategoryHeader>
            <CreateCategoryForm />
        </div>
    )
}

export default CreateCategory
