import React from "react";

import { InfoTitle } from "../../shared/typography/styles";
import { ProfileParagraph } from "./styles";

import thumbnail from "../../images/thumbnail.png";

const ProfileDesc = ({ title, desc }) => {
  return (
    <div>
      <img src={thumbnail} width={80} alt="nodeflux" />
      <InfoTitle color="#3e396b">{title}</InfoTitle>
      <ProfileParagraph color="#ae90cb">{desc}</ProfileParagraph>
    </div>
  );
};

export default ProfileDesc;
