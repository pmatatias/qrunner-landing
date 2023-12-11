import React from "react";
import * as styles from "./styles.module.scss";
const BaseButton = (props: any) => {
  const horizontalDiv = {
    borderTop: "1px solid #33333333",
    marginTop: props.marginTop || "0",
    marginBottom: props.marginBottom || "0",
    width: "100%",
  };

  return (
    <>
      <div>
        <button
          className={`${styles.baseButton} ${props.className}`}
          onClick={props.onClick}
        >
          <span> {props.label}</span>
        </button>
      </div>
    </>
  );
};

export default BaseButton;
