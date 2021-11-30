import React from "react";
import styles from "./Tag.module.css";

type TagProps = {
  tagName: string;
  value: string;
};

export default function Tag({ tagName, value }: TagProps) {
  return (
    <>
      <input className={styles.radio} type="radio" id="input" value={value} />
      <label htmlFor="input" className={styles.label}>
        {tagName}
      </label>
    </>
  );
}
