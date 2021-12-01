import React from "react";

type LogoSmallProps = {
  className: string;
};

export default function LogoSmall({ className }: LogoSmallProps) {
  return (
    <svg
      className={className}
      width="auto"
      height="76"
      viewBox="0 0 479 76"
      fill="none"
    >
      <path
        d="M479 74H473.533H448.543H401.686L414.978 60.0438C416.826 58.1025 417.998 55.6153 418.317 52.9535L418.47 51.6779C419.017 47.1077 416.567 42.7029 412.395 40.7579V40.7579C407.708 38.5725 402.128 40.0704 399.165 44.3094L395.178 50.0143L389.654 43.4278C386.518 39.6888 381.163 38.7148 376.911 41.11V41.11C373.722 42.9064 371.749 46.2822 371.749 49.9422V51.4558C371.749 55.0228 373.246 58.426 375.875 60.8366L390.232 74H331.358L328.821 45.3374H326.283L321.843 1L317.719 45.3374H314.864L313.596 61.0123L312.327 45.3374H309.472L306.935 1L301.859 45.3374H298.688L297.102 74H251.743H233H0"
        stroke="#E05263"
        strokeWidth="4"
      />
    </svg>
  );
}
