import { ChangeEvent, FormEvent, useState } from "react";
import "../../pages/categories/CreateCategory.css";
import { TextField } from "@material-ui/core";
import { Break, CategoryButton, DivF, FormWrapper, Form } from "../../styles/Categories.styled";
import * as categoryService from "../../api/services/CategoriesService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function CreateCategory() {
    const [name, setName] = useState("");
    const [info, setInfo] = useState("");

    const successCategory = () => toast.success("Kategória bola uspešne vytvorená");
    const errorCategory = () => toast.error("Problém pri vytvorení kategórie, skontrolujte údaje");

    const onChangeName = (e: InputChange) => {
        setName(e.target.value);
    }

    const onChangeInfo = (e: InputChange) => {
        setInfo(e.target.value);
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if(name === "" || info === "") {
            errorCategory();
        }

        const data = {
            name,
            info
        }

        await categoryService.createCategory(data);
        successCategory();
        setName("");
        setInfo("");
    }

    return (
        <DivF>
          <FormWrapper>
              <Form onSubmit={handleSubmit}>
                  <TextField placeholder="Meno" className="categoryForm" value={name} onChange={onChangeName} /><Break />
                  <TextField placeholder="Info" className="categoryForm" value={info} onChange={onChangeInfo} /><Break />
                  <CategoryButton type="submit">Pridaj novú kategóriu</CategoryButton>
              </Form>
              <ToastContainer />
          </FormWrapper>
      </DivF>
    )
}

export default CreateCategory;