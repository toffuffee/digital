import { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import CustomizedAccordions from "../accordion/Accordion";
import FullWidthTabs from "../tabs/Tabs";
import "aos/dist/aos.css";

function Home() {
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
        className={styles.digitalInfo}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.digitalInfoTitle}>
          Dive into the Digital Infrastructure ecosystem
        </div>
        <CustomizedAccordions />
      </div>
      <div className={styles.tabs} data-aos="fade-up" data-aos-duration="1000">
        TITLE TEXT
        <FullWidthTabs />
      </div>
    </>
  );
}

export default Home;
