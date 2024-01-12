import React, { useState, useRef, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "./Header.module.css";
import { useAuth } from "../authContext/AuthContext";
import Avatar from "@mui/material/Avatar";
import dataJson from "../../data.json";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

function Header() {
  const { isAuthenticated } = useAuth();
  const profileBtn = useRef();
  const loginBtn = useRef();
  useEffect(() => {
    // Если пользователь уже аутентифицирован, перенаправляем его на страницу профиля
    if (isAuthenticated) {
      profileBtn.current.style = "display: block; text-decoration: none;";
      loginBtn.current.style = "display: none;";
      console.log("авторизован");
    } else {
      profileBtn.current.style = "display: none;";
      loginBtn.current.style = "display: block;";
      console.log("неавторизован");
    }
  }, [isAuthenticated]);
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <Link to="/" className={styles.linkLogo}></Link>
        </div>
        <div className={styles.headerSecondCol}>
          <Link className={styles.linkItem} to="/">
            <Button
              className={styles.headerMainItem}
              size="small"
              sx={{
                display: "none",
                "@media (max-width: 678px)": {
                  display: "inline-flex",
                },
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
            >
              Main
            </Button>
          </Link>
          <Link className={styles.linkItem} to="/graph">
            <Button
              className={styles.headerItem}
              size="small"
              sx={{
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
            >
              Graph
            </Button>
          </Link>
          <Link className={styles.linkItem} to="/about">
            <Button
              className={styles.headerItem}
              size="small"
              sx={{
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
            >
              About
            </Button>
          </Link>
          <Link className={styles.linkItem} to="/contact">
            <Button
              sx={{
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
              className={styles.headerItem}
              size="small"
            >
              Contact
            </Button>
          </Link>
          <Link className={styles.linkItem} to="/help">
            <Button
              className={styles.headerItem}
              size="small"
              sx={{
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
            >
              Help
            </Button>
          </Link>
          <Link ref={profileBtn} to="/profile" style={{ display: "none" }}>
            <Avatar {...stringAvatar(dataJson.name)} />
          </Link>
          <Link className={styles.linkItem} ref={loginBtn} to="/sign-in">
            <Button
              className={styles.headerInfr}
              variant="outlined"
              sx={{
                "@media (max-width: 369px)": {
                  marginRight: "0!important",
                },
              }}
              size="small"
            >
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
