import { TFunction } from "i18next";

export interface Data {
    login: string;
    password: string;
}

export interface User {
    login: string,
    password: string
}

export interface AuthState {
    users: User[]
    isAuth: boolean
    error: string
}

export interface INew {
    userId: number,
    id:number,
    title: string,
    body: string
}

export interface NewsState {
    news : INew[]
}

export interface ContextInterface {
    isAuth: boolean;
    error: string;
    news: INew[];
    setNewsLimit: React.Dispatch<React.SetStateAction<number>>;
    onChangeLang: (lang: string) => void;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    isChecked: boolean;
    t: TFunction<"translation", undefined, "translation">;
  }
  