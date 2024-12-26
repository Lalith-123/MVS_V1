import React from "react";
import classes from "./Services.module.css";
// import servicesImage from "../Assets/camara_man.png";

function Services() {
  return (
    <div className={classes.services}>
          <div className={classes.absolute}>
      <div className={classes.heading}>
        <h1 className={classes.heading_h1}>
          Services with which we can
          <br />
          support you
        </h1>
      </div>
      <div className={classes.main_services}>
        <div className={classes.row}>
          <div className={classes.sub_services_div}>
            {/* <h2 className={classes.card_h2}>Corporate Video</h2> */}
            <div className={`${classes.btn} ${classes.btn1}`}>
              <a href="#">
                <b>Corporate Video</b>
              </a>
            </div>
            <p className={classes.card_p}>
              Corporate videos are a powerful tool for businesses to communicate
              their brand message, showcase their products or services, and
              engage with their audience.
            </p>
          </div>
          <div className={classes.sub_services_div}>
            {/* <h2 className={classes.card_h2}>Product Demo</h2> */}
            <div className={`${classes.btn} ${classes.btn2}`}>
              <a href="#">
                <b>Product Demo</b>
              </a>
            </div>
            <p className={classes.card_p}>
              Product demo videos showcase your product's features,
              functionality, and benefits in action, providing potential
              customers with a clear understanding and building trust to boost
              conversions.
            </p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.sub_services_div}>
            {/* <h2 className={classes.card_h2}>Commercial</h2> */}
            <div className={`${classes.btn} ${classes.btn3}`}>
              <a href="#">
                <b>Commercial</b>
              </a>
            </div>
            <p className={classes.card_p}>
              Commercial videos are crafted to promote and market products or
              services directly, grabbing attention with engaging visuals,
              storytelling, and a compelling call to action to drive sales or
              awareness.
            </p>
          </div>
          <div className={classes.sub_services_div}>
            {/* <h2 className={classes.card_h2}>Motion Graphics</h2> */}
            <div className={`${classes.btn} ${classes.btn4}`}>
              <a href="#">
                <b>Motion Graphics</b>
              </a>
            </div>
            <p className={classes.card_p}>
              Motion graphics combine visual design and animation to create
              dynamic and captivating content, perfect for explaining ideas,
              storytelling, or adding a modern edge to any video production.
            </p>
          </div>
        </div></div>
      </div>
    </div>
  );
}

export default Services;
