import React from 'react';
import AskSection from '../../organisms/AskSection/askSection';
import BannerSection from '../../organisms/BannerSection';
import AboutSection from '../../organisms/AboutSection/aboutSection';
import BusinessSection from '../../organisms/BusinessSection/businessSection';
import NoticeSection from '../../organisms/NoticeSection/index';

export default function Main() {
  return (
    <section>
      <BannerSection />
      <AskSection />
      <AboutSection />
      <BusinessSection />
      <NoticeSection />
    </section>
  )
}