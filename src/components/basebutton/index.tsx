import React from "react";
import * as styles from "./styles.module.scss";
const BaseButton = (props: any) => {
  return (
    <>
      <div>
        <button
          className={`${styles.baseButton} ${props.className} ${
            props.isFullW ? styles.fullW : ""
          } ${props.isSecondary ? styles.secondary : ""} `}
          onClick={props.onClick}
        >
          <span> {props.label}</span>
        </button>
      </div>
    </>
  );
};

export default BaseButton;
