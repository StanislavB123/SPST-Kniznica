export interface IBook {
    name: string;
    description: string;
    genre: string;
    author: string;
    year: string;
    pages: string;
    image: string;
}

export interface ICategory {
    name: string;
    info: string;
}

export interface PROPS_AUTHEN {
    email: string;
    password: string;
}

export interface PROPS_PROFILE {
    id: number;
    name: string;
}

export interface PROPS_NAME {
    name: string;
}