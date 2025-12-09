import { StaticImageData } from "next/image";
import { ProjectDetailProps } from "@/features/projects/types/project-detail";

// Import all project detail images
import shipoperationContent from "@/shared/styles/assets/image/shipoperation-detail.png";
import dnmesContent from "@/shared/styles/assets/image/dnmes-detail.png";
import tigerContent from "@/shared/styles/assets/image/tiger-detail.png";
import tmsContent from "@/shared/styles/assets/image/tms-detail.png";
import portqmContent from "@/shared/styles/assets/image/portqm-detail.png";
import routinecareContent from "@/shared/styles/assets/image/routinecare-detail.png";
import diabetesContent from "@/shared/styles/assets/image/diabetesfree-detail.png";
import spinehealthContent from "@/shared/styles/assets/image/spinehealth-detail.png";
import smartshoesContent from "@/shared/styles/assets/image/smartshoes-detail.png";
// Import all project thumb images
import shipoperationThumb from "@/shared/styles/assets/image/shipoperation-thumb-1920.png";
import dnmesThumb from "@/shared/styles/assets/image/dnmes-thumb-1920.png";
import tigerThumb from "@/shared/styles/assets/image/tiger-thumb-1920.png";
import tmsThumb from "@/shared/styles/assets/image/tms-thumb-1920.png";
import portqmThumb from "@/shared/styles/assets/image/portqm-thumb-1920.png";
import routinecareThumb from "@/shared/styles/assets/image/routinecare-thumb-1920.png";
import diabetesThumb from "@/shared/styles/assets/image/diabetesfree-thumb-1920.png";
import spinehealthThumb from "@/shared/styles/assets/image/spinehealth-thumb-1920.png";
import smartshoesThumb from "@/shared/styles/assets/image/smartshoes-thumb-1920.png";
// Import all project thumb mobile images
import shipoperationThumbM from "@/shared/styles/assets/image/shipoperation-thumb-1080.png";
import dnmesThumbM from "@/shared/styles/assets/image/dnmes-thumb-1080.png";
import tigerThumbM from "@/shared/styles/assets/image/tiger-thumb-1080.png";
import tmsThumbM from "@/shared/styles/assets/image/tms-thumb-1080.png";
import portqmThumbM from "@/shared/styles/assets/image/portqm-thumb-1080.png";
import routinecareThumbM from "@/shared/styles/assets/image/routinecare-thumb-1080.png";
import diabetesThumbM from "@/shared/styles/assets/image/diabetesfree-thumb-1080.png";
import spinehealthThumbM from "@/shared/styles/assets/image/spinehealth-thumb-1080.png";
import smartshoesThumbM from "@/shared/styles/assets/image/smartshoes-thumb-1080.png";

export interface ProjectData extends ProjectDetailProps {
  slug: string;
}

export const projectsData: Record<string, ProjectData> = {
  "ship-operation": {
    slug: "ship-operation",
    contentImage: shipoperationContent,
    thumbImage: shipoperationThumb,
    thumbImageMobile: shipoperationThumbM,
    category: "해군/해경 함정 상태기반 정비지원 체계 서비스",
    title: "해군/해경 함정운용지원체계",
    subtitle: "",
    description:
      "함정 상태기반 정비지원 체계 서비스는 함정운용실황의 실시간 확인 및 내구연한이 초과되지 않은 장비의 실시간 상태이상 알람 모니터링을 통해 각 장비별로 필요한 사전정비가 가능해짐에 따라 상태기반 정비(CBM)을 지원함으로써 함정 정비 용이성 향상에 기여 가능한 시스템 입니다. 본 서비스는 각 장비별 모니터링 및 상태이상 수집건에 대한 조치보고, 기술문서 등의 절차장 문서작업의 디지털화를 지원합니다.",
    workScopes: [{ label: "개발" }],
    servicePlatforms: [
      {
        name: "해상/육상 선박관리 시스템(해군/해경)",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
  "dn-mes": {
    slug: "dn-mes",
    contentImage: dnmesContent,
    thumbImage: dnmesThumb,
    thumbImageMobile: dnmesThumbM,
    category: "MES",
    title: "DN솔루션즈 MES 개발",
    subtitle: "",
    description:
      "기존 MES와 연동한 Web App 방식의 어플리케이션 구축을 통하여 Mobile, Tablet PC, PC Web 환경 등 다양한 사용자 환경에서 MES 시스템 접근 및 활용이 가능하며, 각 생산단계에 따른 창고 내 실시간 재고관리 및 생산현장관리를 위한 전체 재고데이터의 수집 및 분석이 가능함에 따라 정확한 생산관리를 지원하는 시스템입니다.",
    workScopes: [{ label: "기획" }, { label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "생산/재고관리",
        platforms: [{ label: "Web(PC)" }, { label: "Mobile" }],
      },
      {
        name: "현황 대시보드",
        platforms: [{ label: "Web(PC)" }],
      },
    ],
  },
  "tiger-face": {
    slug: "tiger-face",
    contentImage: tigerContent,
    thumbImage: tigerThumb,
    thumbImageMobile: tigerThumbM,
    category: "항만 물류운송 관리",
    title: "물류운송관리시스템 (타이거페이스)",
    subtitle: "",
    description:
      "물류운송의 단계별 실시간 추적 및 화주, 포워더의 운송 등록/승인/배차를 Web/App을 통해 지원함으로써 하나의 플랫폼을 통한 실시간 운송흐름 모니터링이 가능하며, 물류운송 전반의 업무를 더욱 편리하고 효율적으로 관리할 수 있는 시스템 입니다.",
    workScopes: [{ label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "배차현황 및 데이터 관리",
        platforms: [{ label: "Responsive Web" }],
      },
      {
        name: "기사 배치 및 운송 현황",
        platforms: [{ label: "iOS" }, { label: "Android" }],
      },
    ],
  },
  tms: {
    slug: "tms",
    contentImage: tmsContent,
    thumbImage: tmsThumb,
    thumbImageMobile: tmsThumbM,
    category: "항만 물류운송 관리 시스템(TMS)",
    title: "TMS",
    subtitle: "",
    description:
      "기사단말(스마트폰)에서  발생하는GPS 기반 위치 데이터와 운송단계 이벤트를 실시간 수집 · 전송하여, 전체 운송 흐름을 실시간으로 모니터링 할 수 있도록 설계된 IoT 모빌리티 관제 랫폼입니다.운송 기사 별 이동 경로, 단계 별 운행상태, 배차 · 작업 · 정산 흐름을 실시간으로 관제 할 수 있으며, 각 운송 단계에서 발생하는 이벤트 데이터를 기반으로 실시간 가시화 · 알람 · 업무 처리 자동화가 가능하도록 구축되었습니다.",
    workScopes: [{ label: "기획" }, { label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "기사 배차 및 운송현황",
        platforms: [{ label: "iOS" }, { label: "Android" }],
      },
      {
        name: "운송 관리",
        platforms: [{ label: "Web" }],
      },
    ],
  },
  portqm: {
    slug: "portqm",
    contentImage: portqmContent,
    thumbImage: portqmThumb,
    thumbImageMobile: portqmThumbM,
    category: "ERP 전사지원관리",
    title: "항만 검역 관리 시스템",
    subtitle: "",
    description:
      "검역관리 시스템은 기존 아날로그 방식으로 처리되었던 포워딩 업무의 프로그램 전산화를 통해 인력의 실수로 인한 오류를 감소시키고, 서면상으로 진행되는 세관 업무 및 검역관리를 하나의 플랫폼을 통해 손쉽게 처리할 수 있도록 함으로써 검역에 필요한 데이터 및 서류 관리의 편의성 증대를 위해 개발되었습니다.",
    workScopes: [{ label: "기획" }, { label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "검역 관리 시스템",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
  "routine-care": {
    slug: "routine-care",
    contentImage: routinecareContent,
    thumbImage: routinecareThumb,
    thumbImageMobile: routinecareThumbM,
    category: "AI 활용 건강 루틴 기반 리워드 플랫폼",
    title: "루틴케어 ROUTINE CARE",
    subtitle: "",
    description:
      "루틴케어는 AI 기반 분석을 통해 식단·걷기·복약 등 일상 건강 루틴을 자동으로 수집·정량화하고, 이를 개인 맞춤 건강 점수와 피드백으로 제공하는 디지털 헬스케어 서비스입니다. 수집된 루틴은 일일 달성도와 연계되어 포인트 형태의 보상으로 교환되며, 사용자가 지속적인 건강 행동을 실천할 수 있도록 설계된 데이터 기반 건강관리 플랫폼입니다.",
    workScopes: [{ label: "기획" }, { label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "루틴케어 APP",
        platforms: [{ label: "Android" }],
      },
      {
        name: "관리자 페이지",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
  "diabetes-free": {
    slug: "diabetes-free",
    contentImage: diabetesContent,
    thumbImage: diabetesThumb,
    thumbImageMobile: diabetesThumbM,
    category: "AI기반 개인 맞춤형 당뇨병 예방 ・ 관리 플랫폼",
    title: "당뇨프리",
    subtitle: "",
    description:
      "[당뇨프리]는 일상 혈당 및 개인 식단, 운동, 건강지표 분석을 통해 개인 맞춤형 당뇨병 예방과 관리가 가능한 당뇨 분야 디지털 헬스케어 서비스 입니다. 건강보험공단에서 제공되는 건강검진 결과 연동을 통해 수집된 건강데이터 기반 나의 건강상태에 대한 간편 리포트를 제공하고, 손쉽고 간편하게 사용자 개인이 보유한 만성질환(당뇨) 위험요인 및 현재상태 모니터링이 가능합니다.",
    workScopes: [{ label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "당뇨프리 APP",
        platforms: [{ label: "iOS" }, { label: "Android" }],
      },
      {
        name: "관리자 페이지",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
  "spine-health": {
    slug: "spine-health",
    contentImage: spinehealthContent,
    thumbImage: spinehealthThumb,
    thumbImageMobile: spinehealthThumbM,
    category: "AI 기반 청소년 대상 척추 질환 조기 진단 및 건강관리 플랫폼",
    title: "청소년척추건강",
    subtitle: "",
    description:
      "청소년 척추건강관리 플랫폼은 AI 기반 근골격계 질환 조기 진단 기술과 맞춤형 건강관리 서비스를 통합한 디지털 헬스케어 플랫폼입니다. 스마트폰 촬영 이미지 분석을 통해 척추측만증 여부를 판단하고, 신체 데이터 기반 개인 맞춤 운동 프로그램과 건강 리워드(포인트) 시스템을 제공합니다. 블록체인 기반의 보상 시스템과 부모-자녀 교류 기능을 통해 청소년의 건강습관 형성을 지원합니다.",
    workScopes: [{ label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "척추 건강 관리",
        platforms: [{ label: "iOS" }, { label: "Android" }],
      },
      {
        name: "관리자 페이지",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
  "smart-shoes": {
    slug: "smart-shoes",
    contentImage: smartshoesContent,
    thumbImage: smartshoesThumb,
    thumbImageMobile: smartshoesThumbM,
    category: "스마트 슈즈를 활용한 건강토큰 서비스",
    title: "건강토큰",
    subtitle: "",
    description:
      "스마트 인솔 · 스마트 슈즈 디바이스에서 측정된 걸음수 · 활동량 · 보행패턴 등의 건강데이터를Bluetooth(BLE)로 모바일 앱에 실시간 연동하여 수집된 활동량을 건강토큰으로 자동 변환해 제공하는 블록체인 기반 리워드 서비스입니다.",
    workScopes: [{ label: "디자인" }, { label: "개발" }],
    servicePlatforms: [
      {
        name: "건강토큰 APP",
        platforms: [{ label: "Android" }],
      },
      {
        name: "관리자 페이지",
        platforms: [{ label: "Responsive Web" }],
      },
    ],
  },
};

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projectsData[slug];
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(projectsData);
}
