import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Stack, styled, Switch, Typography } from "@mui/material";

import { AppContext } from "../App";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Redux/state";
import { leaveAccount } from "../Redux/slices/authSlice";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isAuth, setIsChecked, isChecked, t } = React.useContext(AppContext);

  const onLeave = () => {
    if (window.confirm("do u want to leave your account?")) {
      dispatch(leaveAccount());
    }
  };

  const onSwitchChange = () => {
    setIsChecked((value) => !value);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#71cfd3",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography>EN</Typography>
              <AntSwitch
                checked={isChecked}
                onChange={onSwitchChange}
                inputProps={{ "aria-label": "ant design" }}
              />
              <Typography>UA</Typography>
            </Stack>
          </Box>
          {isAuth ? (
            <Box>
              <NavLink to="/">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("home")}
                </Button>
              </NavLink>
              <NavLink to="/profile">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("profile")}
                </Button>
              </NavLink>
              <NavLink to="/news">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("news")}
                </Button>
              </NavLink>
              <NavLink to="/">
                <Button
                  onClick={onLeave}
                  sx={{ color: "#fff", textTransform: "none" }}
                >
                  {t("leave")}
                </Button>
              </NavLink>
            </Box>
          ) : (
            <Box>
              <NavLink to="/">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("home")}
                </Button>
              </NavLink>
              <NavLink to="/news">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("news")}
                </Button>
              </NavLink>
              <NavLink to="/login">
                <Button sx={{ color: "#fff", textTransform: "none" }}>
                  {t("login")}
                </Button>
              </NavLink>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
