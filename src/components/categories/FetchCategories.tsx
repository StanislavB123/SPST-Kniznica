import { useEffect, useState } from "react";
import { ICategory } from "../../api/types/globalTypes";
import * as categoriesService from "../../api/services/CategoriesService";
import {CategoriesPage, CategoryDiv} from "../../styles/Categories.styled";
import {Grid, Paper} from "@material-ui/core";
import "../../pages/categories/AllCategories.css";

function FetchCategories() {
    const [categories, setCategories] = useState<ICategory[]>([]);

    const loadCategories = async () => {
        const res = await categoriesService.getAllCategories();
        setCategories(res.data);
    }

    useEffect(() => {
        loadCategories();
    }, [])
    return (
        <CategoriesPage>
            {categories.map((category) => {
                return (
                    <CategoryDiv>
                        <Grid item xs>
                            <Paper className="papercategory" elevation={3}>
                            <h1>{category.name}</h1>
                        <p>{category.info}</p>
                            </Paper>
                        </Grid>
                    </CategoryDiv>
                )
            })}
        </CategoriesPage>
    )
}

export default FetchCategories;
