import styled from 'styled-components';

export const BooksHeader = styled.h1`
    text-align: center;
    text-shadow: 2px 2px 2px #eee;
    font-size: 2.5rem;
    margin-top: 2rem;
`;

export const BookWrapper = styled.div`
  margin-top: 1.5rem;
`;

export const Form = styled.form``;
export const Break = styled.br``;
export const ModalD = styled.div``;

export const BookDiv = styled.div`
    text-align: center;
`;

export const BookButton = styled.button`
    background-color: #006699;
    color: #eee;
    cursor: pointer;
    padding: 2px;
    font-size: 1.4rem;
    border-radius: 10px;
    outline: none;
    margin-top: 2rem;
`;

export const BooksDiv = styled.div`
    flexGrow: 1
`;

export const CloseHref = styled.a`
  text-decoration: none;
  color: #eee;
`;

export const BookHead = styled.h1`
    margin-top: 1rem;
`;

export const BooksPages = styled.div`
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

export const BookImage = styled.img`
    width: 100%;
`;

export const BookDesc = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const BookModal = styled.h1`
  margin-top: 1rem;
  font-size: 1.4rem;
`;

export const BookP = styled.p`
  margin-top: 1rem;
  font-size: 1.4rem;
`;