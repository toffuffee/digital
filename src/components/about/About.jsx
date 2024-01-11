import { useEffect } from "react";
import styles from "./About.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import CustomizedAccordions from "../accordion/Accordion";
// import FullWidthTabs from "../tabs/Tabs";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import CategoryIcon from "@mui/icons-material/Category";
import LayersIcon from "@mui/icons-material/Layers";
import KeyIcon from "@mui/icons-material/Key";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.container}>
          <div
            className={styles.bannerImg}
            data-aos="fade-right"
            data-aos-duration="1000"
          ></div>
          <div
            className={styles.bannerText}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Typewriter
              options={{
                delay: 70,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Digital Infrastructure")
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(
                    "The new “bridges and roads” that support the economy, in particular the digital economy."
                  )
                  .pauseFor(3000)
                  .start();
              }}
            />
          </div>
        </div>
      </div>
      <div
        className={styles.ecosystem}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className={styles.digitalInfoTitle}
          style={{ lineHeight: "normal" }}
        >
          Overview of the Digital Infrastructure ecosystem
        </div>
        <div className={styles.ecosystemFlex}>
          <div className={styles.ecosystemFlexBlock}>
            <div className={styles.ecosystemBlockIcon}>
              <LooksOneIcon sx={{ fontSize: 50 }} />
            </div>
            <div className={styles.ecosystemBlockText}>
              Digital Infrastructure is 1 integrated system
            </div>
          </div>
          <div className={styles.ecosystemFlexBlock}>
            <div className={styles.ecosystemBlockIcon}>
              <CategoryIcon sx={{ fontSize: 50 }} />
            </div>
            <div className={styles.ecosystemBlockText}>
              Digital Infrastructure includes 2 categories: (hard) physical and
              (soft) non-physical
            </div>
          </div>
          <div className={styles.ecosystemFlexBlock}>
            <div className={styles.ecosystemBlockIcon}>
              <LayersIcon sx={{ fontSize: 50 }} />
            </div>
            <div className={styles.ecosystemBlockText}>
              Digital Infrastructure contains 4 components that work
              interactively
            </div>
          </div>
          <div className={styles.ecosystemFlexBlock}>
            <div className={styles.ecosystemBlockIcon}>
              <KeyIcon sx={{ fontSize: 50 }} />
            </div>
            <div className={styles.ecosystemBlockText}>
              Digital Infrastructure is the key foundation and enabler for the
              21st century economy
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.digitalInfo}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.digitalInfoTitle}>
          Dive into the Digital Infrastructure ecosystem
        </div>
        <CustomizedAccordions />
      </div>
    </>
  );
}

export default About;
