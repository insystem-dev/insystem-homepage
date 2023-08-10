import React from 'react';
import AboutPage from '../../common/components/organisms/AboutPage';
import { PageHeader } from '../../common/components/organisms/PageHeader/index';

const About = () => {
    return (
        <>
            <PageHeader title="회사소개" subTitle="ABOUT US" variant="about" />
            <AboutPage />
        </>
    );
}

export default About;
