import React from "react";
import styles from "./Tag.module.css";

type TagProps = {
  tagName: string;
  value: string;
  name: string;
};

export default function Tag({ tagName, value, name }: TagProps) {
  return (
    <>
      <input
        name={name}
        className={styles.radio}
        type="radio"
        id={value}
        value={value}
      />
      <label htmlFor={value} className={styles.label}>
        {tagName}
      </label>
    </>
  );
}
