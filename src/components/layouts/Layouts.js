import React from "react";
import classes from "./Layouts.module.css";
import MainNavigation from "./MainNavigation";

const Layouts = props => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layouts;
