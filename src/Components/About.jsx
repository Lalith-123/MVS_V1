import React from "react";
import classes from "./About.module.css";
import servicesImage from "../Assets/camara_man.png";
import client_satisfaction from "../Assets/Clients_Satisfaction.png";
import clients from "../Assets/Clients.png";
import mrr from "../Assets/MRR.png";
import saas_clients from "../Assets/SAAS_Clients.png";
import videos_produced from "../Assets/Videos_produced.png";
import logo_Design from "../Assets/Logo_designs.png";

function Services() {
  return (
    <div className={classes.services}>
      {/* <div className={classes.heading}>
        <h1 className={classes.heading_h1}>
          About
        </h1>
      </div> */}
      <div className={classes.main_services}>
        <div className={classes.image}>
          <img
            src={servicesImage}
            alt="Services"
            className={classes.image_img}
          />
        </div>
        <div className={classes.stats}>
          <div className={classes.row_1}>
            <div className={classes.block}>
              <img src={videos_produced} className={classes.image_icon} />
              <h1 className={classes.icon_h2}>300+</h1>
              <p className={classes.icon_p}>Videos produced</p>
            </div>
            <div className={classes.block}>
              <img src={saas_clients} className={classes.image_icon} />
              <h1 className={classes.icon_h2}>6+</h1>
              <p className={classes.icon_p}>Saas Clients</p>
            </div>
            <div className={classes.block}>
              <img src={clients} className={classes.image_icon} />
              <h1 className={classes.icon_h2}>50+</h1>
              <p className={classes.icon_p}> Business Clients</p>
            </div>
          </div>
          <div className={classes.row_2}>
            <div className={classes.block}>
              <img src={mrr} className={classes.image_icon} />
              <h2 className={classes.icon_h2}>2x MRR</h2>
              <p className={classes.icon_p}>within 5 month's</p>
            </div>
            <div className={classes.block}>
              <img src={logo_Design} className={classes.image_icon} />
              <h1 className={classes.icon_h2}>20+</h1>
              <p className={classes.icon_p}>Logo Designs</p>
            </div>
            <div className={classes.block}>
              <img src={client_satisfaction} className={classes.image_icon} />
              <h1 className={classes.icon_h2}>100%</h1>
              <p className={classes.icon_p}>Client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
