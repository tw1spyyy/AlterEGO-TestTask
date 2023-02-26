import React from "react";

import { AppRouter } from "./Components/AppRouter";
import { Header } from "./Components/Header";
import { ContextInterface } from "./utils/types";

import { useTranslation } from "react-i18next";

import { AppDispatch, RootState } from "./Redux/state";
import { useSelector, useDispatch } from "react-redux/es/exports";

import { fetchUsers } from "./Redux/slices/authSlice";
import { fetchNews } from "./Redux/slices/newsSlice";

import "./css/Main.css";

export const AppContext = React.createContext({} as ContextInterface);

function App() {
  let [newsLimit, setNewsLimit] = React.useState(0);
  let [isChecked, setIsChecked] = React.useState(false);

  const { t, i18n } = useTranslation();

  const onChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const { isAuth, error } = useSelector((state: RootState) => state.auth);
  const { news } = useSelector((state: RootState) => state.news);

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchNews(newsLimit));
  }, [newsLimit]);

  React.useMemo(() => {
    const lang = isChecked ? "ua" : "en";
    onChangeLang(lang);
  }, [isChecked]);

  return (
    <AppContext.Provider
      value={{
        isAuth,
        error,
        news,
        setNewsLimit,
        onChangeLang,
        setIsChecked,
        isChecked,
        t,
      }}
    >
      <Header />
      <AppRouter />
    </AppContext.Provider>
  );
}

export default App;
