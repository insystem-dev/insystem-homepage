import React from "react";
import AboutPage from "../../common/components/organisms/AboutPage";
import { PageHeader } from "../../shared/ui";

const About = () => {
  return (
    <>
      <PageHeader title="회사소개" subTitle="ABOUT US" variant="about" />
      <AboutPage />
    </>
  );
};

export default About;
