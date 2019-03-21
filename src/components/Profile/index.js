import React from "react";

import { Section } from "../../shared/layout/styles";
import { ProfileGrid } from "./styles";
import ProfileDesc from "../ProfileDesc";
import SectionHeader from "../SectionHeader";

import data from "./constants.json";

const Profile = () => {
  const { profileData } = data;

  return (
    <Section>
      <SectionHeader
        title="This is Nodeflux"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo
          vel tempore rem alias."
        titleColor="#3e396b"
        descColor="#ae90cb"
      />
      <ProfileGrid>
        {profileData.map((profile, idx) => (
          <ProfileDesc title={profile.title} desc={profile.desc} key={idx} />
        ))}
      </ProfileGrid>
    </Section>
  );
};

export default Profile;
