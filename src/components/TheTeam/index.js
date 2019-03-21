import React from "react";

import { BoxTeam, JobsButton } from "./styles";
import { SectionTitle, Paragraph } from "../../shared/typography/styles";

const TheTeam = () => {
  return (
    <BoxTeam>
      <SectionTitle>The Team</SectionTitle>
      <Paragraph>
        It's our mission to unleash the potential in every team, and we know
        that teams perform best when they are diverse and every team member
        feels that they belong.
      </Paragraph>
      <JobsButton>Browse all jobs</JobsButton>
    </BoxTeam>
  );
};

export default TheTeam;
