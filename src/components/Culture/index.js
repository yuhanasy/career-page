import React from "react";

import { CultureSection, CultureBackground, PhotoCollage } from "./styles";
import SectionHeader from "../SectionHeader";

import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import photo5 from "../../images/photo5.png";

const NodefluxCulture = () => {
  return (
    <CultureSection>
      <CultureBackground viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1b0347" />
            <stop offset="100%" stopColor="#683d83" />
          </linearGradient>
        </defs>
        <rect
          x="-6"
          y="10"
          width="112"
          height="80"
          rx="5"
          transform="rotate(8 50 50)"
          fill="url(#grad1)"
        />
      </CultureBackground>
      <SectionHeader
        title="Live at Nodeflux"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ea possimus unde. Autem ex cum consequatur illo sequi ratione consectetur."
        titleColor="white"
        descColor="#ae90cb"
        center
      />
      <PhotoCollage>
        <img src={photo1} alt="nodeflux" />
        <PhotoCollage>
          <img src={photo2} alt="nodeflux" />
          <img src={photo3} alt="nodeflux" />
          <img src={photo4} alt="nodeflux" />
          <img src={photo5} alt="nodeflux" />
        </PhotoCollage>
      </PhotoCollage>
    </CultureSection>
  );
};

export default NodefluxCulture;
