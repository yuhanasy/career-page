import React from "react";

import { SectionTitle, Paragraph } from "../../shared/typography/styles";
import { SectionHeaderWrapper } from "./styles";

const SectionHeader = ({ title, desc, titleColor, descColor, center }) => {
  return (
    <SectionHeaderWrapper center={center}>
      <SectionTitle color={titleColor}>{title}</SectionTitle>
      <Paragraph color={descColor}>{desc}</Paragraph>
    </SectionHeaderWrapper>
  );
};

export default SectionHeader;
