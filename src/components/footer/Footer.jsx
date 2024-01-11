import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <a href="/" className={styles.linkLogo}></a>
        </div>
        <div className={styles.footerText}>
          <b>© 2024 DIGITAL</b> Technology Services Group Limited
        </div>
      </div>
    </div>
  );
}

export default Footer;
