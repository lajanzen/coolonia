import React from "react";
import styles from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={styles.container}>
      <svg
        className={styles.logo}
        width="428"
        height="145"
        viewBox="0 0 428 145"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M460.5 141H450H402H312L337.533 114.231C341.082 110.511 343.331 105.741 343.944 100.636L344.233 98.2252C345.287 89.4411 340.575 80.9747 332.555 77.2409V77.2409C323.557 73.0526 312.852 75.9257 307.161 84.0559L299.5 95L288.886 82.3638C282.862 75.1934 272.589 73.3252 264.427 77.9162V77.9162C258.295 81.3654 254.5 87.8539 254.5 94.8894V97.7628C254.5 104.604 257.374 111.131 262.42 115.75L290 141H176.92L172.046 86.0307H167.172L158.643 1L150.723 86.0307H145.24L142.803 116.092L140.366 86.0307H134.882L130.008 1L120.26 86.0307H114.168L111.122 141H24H-12"
          stroke="#E05263"
          strokeWidth="8"
        />
      </svg>

      <h1 className={styles.title}>Coolonia</h1>
    </div>
  );
}
