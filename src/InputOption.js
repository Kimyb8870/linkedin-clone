import React from "react";
import "./InputOption.css";

const InputOption = ({ title, Icon, color }) => {
  return (
    <div className="inputOption">
      <Icon className="inputOption__icon" style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOption;
