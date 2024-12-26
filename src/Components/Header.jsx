import React from "react";
import classes from "./Header.module.css";
import UP2U from "../Assets/UP2U_logo.png"

function Header({
  scrollToHome,
  scrollToAbout,
  scrollToMyWorks,
  scrollToServices,
  scrollToContact,
  scrollToBrands,
}) {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={UP2U} />
      </div>
      <div className={classes.menu}>
        <button className={classes.button} onClick={scrollToHome}>
          Home
        </button>
        <button className={classes.button} onClick={scrollToBrands}>
          Brands
        </button>
        <button className={classes.button} onClick={scrollToAbout}>
          About
        </button>
        <button className={classes.button} onClick={scrollToMyWorks}>
          My Works
        </button>
        <button className={classes.button} onClick={scrollToServices}>
          Services
        </button>
        <button className={classes.button} onClick={scrollToContact}>
          Contact
        </button>
      </div>
    </div>
  );
}

export default Header;
