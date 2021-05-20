import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Break = styled.br``;

export const SuspenseHead = styled.h1`
    font-size: 1.4rem;
    color: #333;
    text-align: center;
`;

export const HomepageHeader = styled.h1`
    text-align: center;
    margin-top: 13rem;
    color: #eee;
    font-size: 4.3rem;
    text-shadow: 4px 4px 4px #333;

    @media (max-width: 454px) {
        font-size: 3.5rem;
    }

    @media (max-width: 246px) {
        font-size: 3rem;
    }

    @media(max-width: 208px) {
        font-size: 2.5rem
    }
`;

export const HomepageSubheader = styled.p`
    text-align: center;
    margin-top: 2.5rem;
    color: #eee;
    font-size: 1.9rem;
    text-shadow: 4px 4px 4px #333;
`;

export const Buttons = styled.div`
    margin-top: 2.2rem;
    text-align: center;
`;

export const LoginButton = styled.button`
    background-color: orange;
    letter-spacing: 0.1rem;
    border-radius: 10px;
    outline: none;
    padding: 2px;

    @media (max-width:626px) {
        margin-top: 2rem;
    }

    @media(max-width: 584px) {
        margin-top: 2rem;
    }

    @media(max-width:230px) {
        margin-right: 2rem;
    }

    @media(max-width:218px) {
        margin-right: 2rem;
    }

    @media(max-width:208px) {
        margin-right: 2rem;
    }
`;

export const LoginButtonLink = styled.a`
    color: #eee;
    text-shadow: 2px 2px 2px #333;
    font-size: 1.5rem;
    text-decoration: none;

    :hover {
        color: #eee;
    }

    @media (max-width:390px) {
        font-size: 1.3rem;
    }

    @media(max-width: 374px) {
        font-size: 1.4rem;
    }


    @media(max-width: 350px) {
        font-size: 1.4rem;
    }

    @media(max-width: 258px) {
        font-size: 1.4rem;
    }
`;

export const SchollButton = styled.button`
    margin-left: 2rem;
    background-color: #006699;
    letter-spacing: 0.1rem;
    border-radius: 10px;
    outline: none;
    padding: 2px;

    @media (max-width:626px) {
        margin-top: 2rem;
    }

    @media(max-width: 584px) {
        margin-top: 2rem;
    }

    @media(max-width: 278px) {
        margin-right: 2rem;
    }

    @media(max-width:230px) {
        margin-right: 2rem;
    }

    @media(max-width:218px) {
        margin-right: 2rem;
    }

    @media(max-width:208px) {
        margin-right: 2rem;
    }
`;

export const SchollButtonLink = styled.a`
    color: #eee;
    text-shadow: 2px 2px 2px #333;
    font-size: 1.5rem;
    text-decoration: none;

    :hover {
        color: #eee;
    }

    @media (max-width:390px) {
        font-size: 1.3rem;
    }

    @media(max-width: 374px) {
        font-size: 1.2rem;
    }

    @media(max-width: 350px) {
        font-size: 1.2rem;
    }

    @media(max-width: 258px) {
        font-size: 1rem;
    }
`;

export const ErrorHeader = styled.h1`
    margin-top: 2rem;
    text-align: center;
    font-size: 2rem;
    text-shadow: 2px 2px 2px #eee;
`;

export const ErrorLink = styled.a`
    margin-top: 2rem;
    color: #333;
    text-decoration: none;
    font-size: 1.4rem;

    :hover {
        color: #333;
        text-decoration: none;
        font-size: 1.4rem;
    
    }
`;