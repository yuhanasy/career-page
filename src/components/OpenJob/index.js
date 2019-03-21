import React from "react";

import SectionHeader from "../SectionHeader";
import { JobSection, JobWrapper, TabWrapper } from "./styles";
import Job from "./Job";

import data from "./constants.json";

const OpenJob = () => {
  const { jobs } = data;
  return (
    <JobSection>
      <SectionHeader
        title="Find the Perfect Fit"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nihil quaerat recusandae perferendis fuga qui inventore laborum, mollitia."
        titleColor="#3e396b"
        descColor="#ae90cb"
        center
      />
      <JobWrapper>
        <TabWrapper>
          <li>All Position</li>
          <li>Engineering</li>
          <li>Design</li>
          <li>Product</li>
          <li>Marketing</li>
          <li>Support</li>
        </TabWrapper>
        {jobs.map((job, idx) => (
          <Job data={job} key={idx} />
        ))}
      </JobWrapper>
    </JobSection>
  );
};

export default OpenJob;
