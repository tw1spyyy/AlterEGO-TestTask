import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AppDispatch } from "../Redux/state";
import { formSubmit } from "../Redux/slices/authSlice";
import { useForm } from "react-hook-form";
import { AppContext } from "../App";
import { Data } from "../utils/types";

export const AuthForm: React.FC = () => {
  const { register, handleSubmit } = useForm<Data>();

  let { error } = React.useContext(AppContext);

  const dispatch = useDispatch<AppDispatch>();

  const onFormSubmit = (data: Data) => {
    setTimeout(() => {
      dispatch(formSubmit(data));
    }, 500);
  };

  return (
    <div className="auth-form">
      <Typography variant="h4" component="div">
        Увійдіть
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className="auth-form__subtitle"
      >
        Щоб отримати доступ
      </Typography>
      <form className="auth-form__form">
        <TextField
          {...register("login", {
            required: "Введіть логін",
          })}
          label="Логин"
          fullWidth={true}
          size="small"
          margin="normal"
          className="auth-form__input"
        />
        <TextField
          {...register("password", {
            required: "Введіть пароль",
          })}
          label="Пароль"
          fullWidth={true}
          size="small"
          margin="normal"
          type="password"
          className="auth-form__input"
        />
        {error ? <div className="error">{error}</div> : ""}

        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
          onClick={handleSubmit(onFormSubmit)}
        >
          Войти
        </Button>
      </form>
    </div>
  );
};
