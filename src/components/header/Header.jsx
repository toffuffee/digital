import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLogo}>
          <a href="/" className={styles.linkLogo}></a>
        </div>
        <div className={styles.headerSecondCol}>
          <Button href="/about" className={styles.headerItem} size="small">
            About
          </Button>
          <Button href="/contact" className={styles.headerItem} size="small">
            Contact
          </Button>
          <Button href="/help" className={styles.headerItem} size="small">
            Help
          </Button>
          <Button
            href="/sign-in"
            className={styles.headerInfr}
            variant="outlined"
            size="small"
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
