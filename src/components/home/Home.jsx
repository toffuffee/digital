import { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Aos from "aos";
import Carouselcont from "../carousel/Carousel";
import { Paper, Button, Box } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  const ariaLabel = { "aria-label": "description" };
  return (
    <>
      <div className={styles.carousel}>
        <Carouselcont />
      </div>
      <div className={styles.containerMain}>
        <div
          className={styles.boxes}
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 5,
                maxWidth: 450,
                width: "100%",
                minHeight: 200,
              },
            }}
          >
            <Paper
              elevation={3}
              sx={{
                "@media (max-width: 1059px)": {
                  marginLeft: "auto!important",
                  marginRight: "auto!important",
                },
                "@media (max-width: 484px)": {
                  maxWidth: "300px!important",
                },
              }}
            >
              <div className={styles.paperText}>Let's start together!</div>
              <div className={styles.paperBtn}>
                <Link to="/sign-in">
                  <Button
                    sx={{
                      marginTop: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    variant="contained"
                    startIcon={<LoginIcon />}
                  >
                    Sign in
                  </Button>
                </Link>
              </div>
              <div className={styles.paperDesc}>
                Just log in or register if you don't have an account!
              </div>
            </Paper>
            <Paper
              elevation={3}
              sx={{
                "@media (max-width: 1059px)": {
                  marginLeft: "auto!important",
                  marginRight: "auto!important",
                },
                "@media (max-width: 484px)": {
                  maxWidth: "300px!important",
                },
              }}
            >
              <div className={styles.paperText}>Need help?</div>
              <div className={styles.paperBtn}>
                <Link to="/help">
                  <Button
                    sx={{
                      marginTop: "20px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    variant="contained"
                    startIcon={<ContactSupportIcon />}
                  >
                    Help
                  </Button>
                </Link>
              </div>
              <div className={styles.paperDesc}>
                Just write to us and we will definitely help you! Our support is
                always in touch
              </div>
            </Paper>
          </Box>
        </div>
        <div
          className={styles.boxesSecond}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={styles.boxesSecondBlock}>
            <div className={styles.paperImg}></div>
            <div className={styles.paperFullText}>
              <div className={styles.paperText} style={{ textAlign: "left" }}>
                Digital Infrastructure is the building block of a modern economy
              </div>
              <div className={styles.paperDesc} style={{ textAlign: "left" }}>
                Global digital economy in 2016 was worth $11.5 trillion, or
                15.5% of global GDP and expected to reach 25% in less than a
                decade. Emerging markets see the highest growth of digital
                economy, due in part to the young population with longest time
                using the internet. Digital economy also encourages inclusion by
                linking people separated by distance or social barriers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.contactBanner}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.contactBannerText}>
          If you have any questions, we can contact you! Just write to us!
        </div>
        <div className={styles.contactBannerBtn}>
          <Link to="/contact">
            <Button
              sx={{
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              variant="contained"
              startIcon={<ContactMailIcon />}
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.solutionsContainer}>
        <div
          className={styles.solutionsTitle}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Solutions that power digital transformation
        </div>
        <div className={styles.solutionsFlex}>
          <div
            className={styles.solutionsBlock}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.solutionsImgOne}></div>
            <div className={styles.solutionsText}>
              Connect to cloud service providers
            </div>
          </div>
          <div
            className={styles.solutionsBlock}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.solutionsImgTwo}></div>
            <div className={styles.solutionsText}>
              Connect your enterprise network
            </div>
          </div>
          <div
            className={styles.solutionsBlock}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className={styles.solutionsImgThree}></div>
            <div className={styles.solutionsText}>
              Connect the hybrid workforce
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
