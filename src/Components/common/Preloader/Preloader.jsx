import React from 'react';
import s from "./Preloader.module.css";
import preloader from "../../../Assets/Images/preloader.svg";

let Preloader = (props) => {
  return (
    <div className={s.preloader}>
      <img src={preloader} />
    </div>
  );
}

export default Preloader
