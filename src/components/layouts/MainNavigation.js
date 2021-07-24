import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouriteContext from "../../store/FavouriteContext";

const MainNavigation = () => {
  const { header, logo, badge } = classes;
  const favConsumer = useContext(FavouriteContext);
  return (
    <header className={header}>
      <div className={logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
            <span className={badge}>{favConsumer.totalFav}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
