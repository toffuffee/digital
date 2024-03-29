import React from "react";
import Carousel from "react-material-ui-carousel";
import styles from "./Carousel.module.css";
import { Link } from "react-router-dom";
import { Paper, Button } from "@mui/material";

function Carouselcont(props) {
  function Item(props) {
    return (
      <Paper
        sx={{ boxShadow: "none;", height: "100%", backgroundColor: "#f8f8f8" }}
      >
        {props.item.block}
      </Paper>
    );
  }
  var items = [
    {
      block: (
        <div className={styles.carouselBlock}>
          <div className={styles.carouselBlockItem}>
            <div className={styles.carouselText}>
              <b>
                Connect more. <br />
                Do more. <br />
              </b>
            </div>
            <div className={styles.carouselDesc}>
              We offer you more digital infrastructure solutions to help grow
              your business, all with the same extraordinary customer
              experience.
            </div>
            <Link to="/about">
              <Button
                sx={{ marginTop: "30px" }}
                variant="contained"
                className={styles.aboutButton}
              >
                About
              </Button>
            </Link>
          </div>
          <div className={styles.carouselBlockItemOne}>
            <div className={styles.carouselBlockOneImg}></div>
          </div>
        </div>
      ),
    },
    {
      block: (
        <div className={styles.carouselBlock}>
          <div className={styles.carouselBlockItem}>
            <div className={styles.carouselText}>
              <b>The Intelligent Digital Infrastructure Report 2024</b>
            </div>
            <div className={styles.carouselDesc}>
              We offer you more digital infrastructure solutions to help grow
              your business, all with the same extraordinary customer
              experience.
            </div>
            <Link to="/contact">
              <Button
                sx={{ marginTop: "30px" }}
                variant="contained"
                className={styles.contactButton}
              >
                Contact
              </Button>
            </Link>
          </div>
          <div className={styles.carouselBlockItemTwo}>
            <div className={styles.carouselBlockTwoImg}></div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Carousel
      className={styles.carouselMain}
      navButtonsAlwaysVisible={true}
      indicators={false}
      duration={700}
      height={"70vh"}
    >
      {items.map((item, i) => (
        <Item sx={{ height: "100%" }} key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Carouselcont;
