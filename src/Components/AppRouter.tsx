import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "../App";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { News } from "../Pages/News";
import { Profile } from "../Pages/Profile";

export const AppRouter = () => {
  const { isAuth } = React.useContext(AppContext);

  return (
    <div className="content">
      {isAuth ? (
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/profile" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </div>
  );
};
