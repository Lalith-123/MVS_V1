// import React from "react";
// import classes from "./Brands.module.css";
// import bracea_and_roots from "../Assets/Bracea_and_roots.png";
// import chartur_disha from "../Assets/chathur_disha.png";
// import css_logo from "../Assets/css_logo.png";
// import decathlon from "../Assets/decathlon_logo.png";
// import film_planet from "../Assets/film_planet.png";
// import glam_studios from "../Assets/glam_studios.png";
// import kritunga from "../Assets/kritunga.png";

// function Brands() {
//   return (
//     <div className={classes.brands_page}>
//           <div className={classes.brands}>
//               <img src={bracea_and_roots} alt="Bracea and Roots"  className={classes.brands_logos}/>
//               <img src={chartur_disha} alt="Chartur Disha" className={classes.brands_logos}/>
//               <img src={css_logo} alt="CSS Logo" className={classes.brands_logos}/>
//               <img src={decathlon} alt="Decathlon Logo" className={classes.brands_logos}/>
//               <img src={film_planet} alt="Film Planet" className={classes.brands_logos}/>
//               <img src={glam_studios} alt="Glam Studios" className={classes.brands_logos}/>
//               <img src={kritunga} alt="Kritunga" className={classes.brands_logos} />
//       </div>
//     </div>
//   );
// }

// export default Brands;
import React, { useEffect } from "react";
import classes from "./Brands.module.css";
import bracea_and_roots from "../Assets/Bracea_and_roots.png";
import chartur_disha from "../Assets/chathur_disha.png";
// import css_logo from "../Assets/css_logo.png";
import decathlon from "../Assets/decathlon_logo.png";
import film_planet from "../Assets/film_planet.png";
import glam_studios from "../Assets/glam_studios.png";
import kritunga from "../Assets/kritunga.png";
import brands_1 from "../Assets/bRANDS_1.png";
import brands_2 from "../Assets/bRANDS_2.png";

function Brands() {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector(
      `.${classes["marquee-content"]}`
    );

    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
    }
  }, []);

  return (
    <div className={classes.brands_page}>
      <div className={classes.marquee}>
        <ul className={classes["marquee-content"]}>
          {/* <li><img src={bracea_and_roots} alt="Bracea and Roots" /></li>
          <li><img src={chartur_disha} alt="Chartur Disha" /></li>
          <li><img src={css_logo} alt="CSS Logo" /></li>
          <li><img src={decathlon} alt="Decathlon Logo" /></li>
          <li><img src={film_planet} alt="Film Planet" /></li>
          <li><img src={glam_studios} alt="Glam Studios" /></li>
          <li><img src={kritunga} alt="Kritunga" /></li> */}
          <li>
            <img src={brands_1} alt="Kritunga" />
          </li>
          <li>
            <img src={brands_2} alt="Kritunga" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Brands;
