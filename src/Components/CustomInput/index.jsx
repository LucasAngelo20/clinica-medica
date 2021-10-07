import React from "react";

const CustomInput = ({ icon, iconSize, ...rest }) => {
  return (
    <div
      style={{
        width: 250,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        padding: "15px 10px 15px 6px",
        justifyContent: "space-between",
        backgroundColor: "#ddd",
        marginTop: 20,
        color: "#fff",
      }}
    >
      <input
        style={{
          border: "none",
          width: "100%",
          backgroundColor: "#ddd",
          color: "#fff",
        }}
        {...rest}
      />
      <img
        src={icon}
        style={{
          width: iconSize ? iconSize : 20,
          height: iconSize ? iconSize : 20,
          border: "none",
        }}
      />
    </div>
  );
};

export default CustomInput;
