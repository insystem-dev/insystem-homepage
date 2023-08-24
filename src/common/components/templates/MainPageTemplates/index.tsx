import * as S from "./mainPageTemplate.style";
import AskSection from "../../organisms/AskSection/askSection";
import BannerSection from "../../organisms/BannerSection";
import AboutSection from "../../organisms/AboutSection/aboutSection";
import BusinessSection from "../../organisms/BusinessSection";
import NoticeSection from "../../organisms/NoticeSection/index";

export default function Main() {
  return (
    <S.MainTemplate>
      <BannerSection />
      <AskSection />
      <AboutSection />
      <BusinessSection />
      <NoticeSection />
    </S.MainTemplate>
  );
}
