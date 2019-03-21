import React from "react";

import { JobCard, JobTitle, JobLocation } from "./styles";

const Job = props => {
  const { position, location, color } = props.data;
  return (
    <JobCard color={color}>
      <JobTitle>{position}</JobTitle>
      <JobLocation>{location}</JobLocation>
    </JobCard>
  );
};

export default Job;
