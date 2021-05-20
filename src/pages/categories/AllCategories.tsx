import "./AllCategories.css";
import {CategoryHeader} from "../../styles/Categories.styled";
import FetchCategories from "../../components/categories/FetchCategories";

function AllCategories() {
    return (
        <div className="all">
            <CategoryHeader>Všetky kategórie</CategoryHeader>
            <FetchCategories />
        </div>
    )
}

export default AllCategories
