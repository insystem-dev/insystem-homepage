import Business1 from "../../styles/assets/image/business/business-1.png";
import Business2 from "../../styles/assets/image/business/business-2.png";
import Business3 from "../../styles/assets/image/business/business-3.png";
import AboutIcon1 from "../../styles/assets/image/aboutus/about-icon01.png";
import AboutIcon2 from "../../styles/assets/image/aboutus/about-icon02.png";
import AboutIcon3 from "../../styles/assets/image/aboutus/about-icon03.png";

const data = {
  menus: [
    {
      id: 1,
      label: "회사소개",
      path: "/about",
      offset: "80",
    },
    {
      id: 2,
      label: "사업분야",
      path: "/service/healthcare",
      offset: "67",
    },
    {
      id: 3,
      label: "공지사항",
      path: "/notice",
      offset: "67",
    },
    {
      id: 4,
      label: "문의하기",
      path: "/inquiry",
      offset: "67",
    },
  ],
  features: [
    {
      id: 1,
      class: "CS",
      path: "/about",
      title: "CUSTOM SERVICE",
      description:
        "(주)인시스템은 고객의 니즈와 작업환경에 맞춤 시스템 기획 및 설계, 디자인, 퍼블리싱 및 개발 과정을 거쳐 고객이 원하는 최상의 디지털 플랫폼을 만들어 냅니다.",
    },
    {
      id: 2,
      class: "EM",
      title: "",
      description: "",
    },
    {
      id: 3,
      class: "PF",
      path: "/about",
      title: "GLOBAL\nPLATFORM",
      description:
        "(주)인시스템은 디지털에 대한 창의력과 열정으로 최신 트렌드를 연구하여\n세계와 소통할 수 있는\n서비스를 창출합니다.",
    },
    {
      id: 4,
      class: "SL",
      path: "/about",
      title: "SOLUTION",
      description:
        "(주)인시스템은 자체 개발한 솔루션에 고객의 비즈니스 모델을 더해 더욱 안정적이고 효율적으로 서비스를 공급할 수 있도록 지속적인 업데이트를 제공합니다.",
    },
  ],
  business: [
    {
      id: 1,
      part: "디지털 헬스케어 서비스",
      sub: "",
      part_end: "",
      path: "/service/healthcare",
      description:
        "하나의 플랫폼을 통해 내 몸의 전반적인 건강관리가 가능한 토탈 디지털 헬스케어 서비스",
      part_icon: Business1,
    },
    {
      id: 2,
      part: "물류운송관리시스템",
      sub: "(항만)",
      part_end: "",
      path: "/service/port",
      description:
        "항만과 항만 사이를 오고가는 물류의 운송상태 관리를 더욱더 편리하게 도와주는 운송관리 시스템",
      part_icon: Business2,
    },
    {
      id: 3,
      part: "디지털 유통 서비스",
      sub: "",
      part_end: "",
      path: "/service/distribution",
      description: "중소형 유통매장 기반 스마트 리테일 운영관리 시스템",
      part_icon: Business3,
    },
  ],
};

const menuData = {
  about: [
    {
      id: 1,
      label: "회사소개",
      path: "/about",
    },
  ],
  services: [
    {
      id: 2,
      label: "디지털 헬스케어",
      path: "/service/healthcare",
    },
    {
      id: 3,
      label: "물류운송관리",
      path: "/service/port",
    },
    {
      id: 4,
      label: "디지털 유통",
      path: "/service/distribution",
    },
  ],
  notice: [
    {
      id: 5,
      label: "공지사항",
      path: "/notice",
    },
  ],
  inquiry: [
    {
      id: 6,
      label: "문의하기",
      path: "/inquiry",
    },
  ],
};

const notice = [
  {
    id: 1,
    username: "관리자",
    user_id: "admin",
    title: "22년 하계휴가 공지(7/27~7/29)",
    content: "2022년 하계휴가로 인한 휴무일정 안내 드립니다.",
    insert_date: "2022-07-30 13:12:00",
    views: "0",
    fixed: false,
  },
];

const aboutPageData = {
  about: [
    {
      id: 1,
      title: "about01",
      content_b: "",
      content_h: "행복의 가치",
      content_a: "를 추구하는 기업",
    },
    {
      id: 2,
      title: "about02",
      content_b: "세상을 더",
      content_h: " 편리하고 유용하게 ",
      content_a: "만드는 IT기업",
    },
    {
      id: 3,
      title: "about03",
      content_b: "",
      content_h: "도전적이며 혁신적인 ",
      content_a: "연구개발에 투자를 아끼지 않는 창의적인 기업",
    },
  ],
  source: [
    {
      id: 1,
      title: "DESIGN",
      label: "Custom Service",
      content:
        "목적에 맞는 유용한 디자인을 통해 고객의 니즈에 맞춘 최상의 커스텀 플랫폼 제작을 추구합니다.",
      icons: AboutIcon1,
    },
    {
      id: 2,
      title: "VALUE",
      label: "Global E-Platform",
      content:
        "고객의 가치 극대화를 위한 최신 트랜드 연구를 통해 세계와 소통할 수 있는 글로벌 서비스를 창출합니다.",
      icons: AboutIcon2,
    },
    {
      id: 3,
      title: "TECHNIQUE",
      label: "Solution",
      content:
        "신기술을 응용한 자체 개발 솔루션을 통해 안정적이고 효율적인 서비스 공급과 지속적인 업데이트를 보장합니다.",
      icons: AboutIcon3,
    },
  ],
};

export { data, menuData, notice, aboutPageData };
