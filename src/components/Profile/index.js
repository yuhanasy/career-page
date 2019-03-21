import React from "react";

import { SectionTitle, Paragraph } from "../../shared/typography/styles";
import { Section } from "../../shared/layout/styles";
import { ProfileTitle, ProfileGrid } from "./styles";
import ProfileDesc from "../ProfileDesc";

import data from "./constants.json";

const Profile = () => {
  const { profileData } = data;

  profileData.map(profile => console.log(profile.title));

  return (
    <Section>
      <ProfileTitle>
        <SectionTitle color="#3e396b">This is Nodeflux</SectionTitle>
        <Paragraph color="#ae90cb">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo
          vel tempore rem alias.
        </Paragraph>
      </ProfileTitle>
      <ProfileGrid>
        {profileData.map((profile, idx) => (
          <ProfileDesc title={profile.title} desc={profile.desc} key={idx} />
        ))}
      </ProfileGrid>
    </Section>
  );
};

export default Profile;
