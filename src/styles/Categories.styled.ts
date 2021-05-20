import styled from 'styled-components';

export const CategoryHeader = styled.h1`
    text-align: center;
    text-shadow: 2px 2px 2px #eee;
    font-size: 2.5rem;
    margin-top: 2rem;
`;

export const DivF = styled.div`
  margin-top: 2rem;
`;

export const Break = styled.br``;
export const Form = styled.form``;

export const CategoriesPage = styled.div`
  margin-top: 2rem !important;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.2em;
  text-align: center;
  scroll-behavior: smooth;

  @media (max-width: 1131px) {
    grid-gap: 2em;
  }

  @media (max-width: 1094px) {
    grid-gap: 1.9em;
  }


  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    scroll-behavior: smooth;
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(3, 1fr);
    scroll-behavior: smooth;
  }

  @media (max-width: 388px) {
    grid-template-columns: repeat(2, 1fr);
    scroll-behavior: smooth;
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(1, 1fr);
    scroll-behavior: smooth;
  }
`;

export const CategoryDiv = styled.div`
    flexGrow: 1;
`;

export const CategoryInfo = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
`;


export const CategoriesHomeHeader = styled.h1`
  text-align: center;
  margin-top: 2rem;
`;

export const CategoryButton = styled.button`
    background-color: #006699;
    color: #eee;
    cursor: pointer;
    padding: 2px;
    font-size: 1.4rem;
    border-radius: 10px;
    outline: none;
    margin-top: 2rem;
`;

export const CategoryP = styled.p`
  font-size: 1.4rem;
  margin-top: 1rem;
`;

export const FormWrapper = styled.div`
  text-align: center;
`;