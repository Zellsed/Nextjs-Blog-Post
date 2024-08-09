import React from "react";
import styles from "./foot.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2024 Zellsed. All rights reserved.</div>
      <div>
        <div className={styles.social}>
          <Image
            src="/1.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Zellsed Dev Facebook Account"
          />
          <Image
            src="/2.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Zellsed Dev"
          />
          <Image
            src="/3.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Zellsed Dev"
          />
          <Image
            src="/4.png"
            width={15}
            height={15}
            className={styles.icon}
            alt="Zellsed Dev"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
