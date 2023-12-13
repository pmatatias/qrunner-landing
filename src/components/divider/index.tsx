import React from "react";


const Divider = (props: any) => {
  const horizontalDiv = {
    borderTop: "1px solid #33333333",
    marginTop: props.marginTop || "0",
    marginBottom: props.marginBottom || "0",
    width: "100%",
  };

  return <div style={horizontalDiv}></div>;
};

export default Divider;
