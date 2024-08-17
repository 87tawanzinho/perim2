import React from "react";

function Logo({
  classNameMainDiv,
  classNameImg,
  classNameH1,
  classNamePerim,
  classNameSuperM,
  aditionalText,
  classNameAditionalText,
}: {
  classNameMainDiv: string;
  classNameImg: string;
  classNamePerim: string;
  classNameSuperM: string;
  aditionalText?: string;
  classNameH1: string;
  classNameAditionalText?: string;
}) {
  return (
    <div>
      <div className={`${classNameMainDiv}`}>
        <img
          src="./images/logo_perim.webp"
          alt=""
          className={`${classNameImg}`}
        />
        <h1 className={`${classNameH1}`}>
          <span className={`${classNamePerim}`}>Perim</span>{" "}
          <span className={`${classNameSuperM}`}>Supermercados</span>
          <p className={`${classNameAditionalText}`}>
            {aditionalText ? aditionalText : null}
          </p>
        </h1>
      </div>
    </div>
  );
}

export default Logo;
