import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import "./HeaderOption.css";
import { useSelector } from "react-redux";

const HeaderOption = ({ onClick, avatar, Icon, title }) => {
  const user = useSelector(selectUser);

  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar className="headerOption__icon">{user.email[0]}</Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
