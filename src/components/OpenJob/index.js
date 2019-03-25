import React from "react";

import SectionHeader from "../SectionHeader";
import { JobSection, JobWrapper, TabWrapper } from "./styles";
import Job from "./Job";

import data from "./constants.json";

class OpenJob extends React.Component {
  state = {
    tabActive: "all"
  };

  handleClick = e => {
    const tabActive = e.target.id;
    this.setState({ tabActive });
  };

  tabMenu = () => {
    return [
      { id: "all", label: "All Position" },
      { id: "engineering", label: "Engineering" },
      { id: "design", label: "Design" },
      { id: "product", label: "Product" },
      { id: "marketing", label: "Marketing" },
      { id: "support", label: "Support" }
    ];
  };

  render() {
    const { jobs } = data;
    const { tabActive } = this.state;
    const tabMenu = this.tabMenu();

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
            {tabMenu.map(tab => {
              let tabOpen = tab.id === tabActive ? true : false;
              return (
                <li
                  id={tab.id}
                  onClick={this.handleClick}
                  key={tab.id}
                  active={tabOpen ? 1 : 0}
                >
                  {tab.label}
                </li>
              );
            })}
          </TabWrapper>
          {jobs
            .filter(job =>
              tabActive === "all"
                ? true
                : tabActive === job.category
                ? true
                : false
            )
            .map((job, idx) => (
              <Job data={job} key={idx} />
            ))}
        </JobWrapper>
      </JobSection>
    );
  }
}

export default OpenJob;
