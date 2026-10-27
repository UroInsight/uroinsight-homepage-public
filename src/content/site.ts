import type {
  Company,
  ContactContent,
  FeatureItem,
  HeroContent,
  LeaderItem,
  LinkItem,
  SectionContent,
  SolutionsContent,
} from "./types";

const leaders = {
  ceo: {
    name: "이종수",
    role: "CEO",
    affiliation: "세브란스병원 비뇨의학과 교수",
    career: [
      "기계공학 학사",
      "의학 석사, 박사 수료",
      "전문분야: 전립선·신장암, 신장기증자, 전립선 조직검사",
    ],
    image: "/images/ljs-prof.png",
  },
  cto: {
    name: "윤종진",
    role: "CTO",
    affiliation: "세브란스병원 영상의학과 교수",
    career: [
      "생명공학 학사",
      "의학 석사, 박사",
      "의사과학자",
      "전문분야: 비뇨영상의학, 의료영상 AI, Radiomics",
    ],
    image: "/images/yjj-prof.png",
  },
  cso: {
    name: "한현호",
    role: "CSO",
    affiliation: "세브란스병원 비뇨의학과 교수",
    career: [
      "의학 학사, 석사, 박사",
      "의사과학자",
      "미국 MD Anderson 암센터 박사후 과정",
      "전문분야: 다기관 임상시험 설계, 종양 생물학 및 유전학",
    ],
    image: "/images/hhh-prof.png",
  },
} satisfies Record<string, LeaderItem>;

export const company: Company = {
  name: "(주)유로인사이트",
  nameEn: "UroInsight",
  ceo: leaders.ceo.name,
  businessNumber: "764-81-04002",
  address: "서울 서대문구 신촌역로 29, 405호",
  addressEn: "405, 29 Sinchonyeok-ro, Seodaemun-gu, Seoul, Republic of Korea",
  email: "uroinsight@gmail.com",
  copyrightYear: 2026,
};

export const siteMetadata = {
  title: company.name,
  description: "이미 촬영된 CT·MRI를 인공지능으로 다시 읽는 의료 AI 기업, 유로인사이트",
};

// 메뉴 링크와 각 영역의 id가 같은 값을 쓰도록 여기서만 정의
export const sectionIds = {
  hero: "hero",
  about: "about",
  solutions: "solutions",
  technology: "technology",
  leadership: "leadership",
  contact: "contact",
} as const;

export type SectionId = (typeof sectionIds)[keyof typeof sectionIds];

export const navItems: LinkItem[] = [
  { label: "회사소개", href: `#${sectionIds.about}` },
  { label: "솔루션", href: `#${sectionIds.solutions}` },
  { label: "기술", href: `#${sectionIds.technology}` },
  { label: "임원진", href: `#${sectionIds.leadership}` },
];

export const contactLink: LinkItem = {
  label: "문의하기",
  href: `#${sectionIds.contact}`,
};

export const uiText = {
  openMenu: "메뉴 열기",
  closeMenu: "메뉴 닫기",
  prevSlide: "이전",
  nextSlide: "다음",
};

export const hero: HeroContent = {
  eyebrow: "UroInsight",
  title: "From Image\nto Insight.",
  description: "의료 영상의 잠재력을 가치로 전환하여\n더 정확하고 효율적인 진료 환경을 만듭니다.",
  cta: contactLink,
  backgroundImage: "/images/web-bg.jpg",
};

export const about: SectionContent<FeatureItem> = {
  heading: {
    label: "About",
    title: "이미 촬영된 영상을 다시 읽어\n추가 검사를 줄입니다",
    description:
      "(주)유로인사이트는 이미 촬영된 CT·MRI를 인공지능으로 재분석하는 의료 AI를 개발하고 있습니다.\n전립선 질환의 검진과 진단 과정에서 아래 문제를 해결하고자 합니다.",
  },
  items: [
    {
      title: "전립선 용적 측정",
      description:
        "경직장 초음파 검사는 불편하고 비용 부담이 큽니다. 복부 CT에 이미 담긴 전립선 정보는 대부분 활용되지 않고 있습니다.",
    },
    {
      title: "전립선 MRI 판독",
      description:
        "병원과 판독자에 따라 결과에 차이가 있고, 환자 증가로 영상의학 전문의의 업무 부담이 커지고 있습니다.",
    },
    {
      title: "유전자 검사",
      description:
        "전이성 전립선암 치료제 선택에 필요한 유전자 검사는 비용과 시간이 많이 들어, 실제 검사로 이어지는 경우가 적습니다.",
    },
  ],
};

export const solutions: SolutionsContent = {
  heading: {
    label: "Solutions",
    title: "AI 영상 재분석 기반\n검진–진단–유전자예측 통합 플랫폼",
    description:
      "추가 촬영과 침습적 검사를 줄이는 것을 목표로 합니다.\nUroInsight는 이미 촬영된 CT·MRI를 AI로 다시 읽는 모듈들을 개발하고 있습니다.",
  },
  video: {
    src: "/videos/provision.mp4",
    label: "UroInsight 구동 영상",
  },
  modulesLabel: "솔루션 모듈",
  items: [
    {
      id: "m1",
      code: "M1",
      name: "CT 기반 전립선 용적 측정",
      description:
        "건강검진 복부 CT에서 전립선 용적과 석회화를 측정하고 PSA 밀도를 계산하는 AI를 개발하고 있습니다. 추가 초음파 검사 없이 남성 건강 정보를 제공하는 것이 목표입니다.",
      tags: ["건강검진 CT", "전립선 용적", "PSA 밀도"],
    },
    {
      id: "m2",
      code: "M2",
      name: "MRI 판독 보조",
      description:
        "전립선 MRI에서 전립선 영역을 자동으로 분할하고, 병변 탐지와 악성도 예측으로 영상의학 전문의의 판독을 보조하는 AI를 개발하고 있습니다.",
      tags: ["전립선 MRI", "판독 보조"],
    },
    {
      id: "m3",
      code: "M3",
      name: "BRCA 유전자 변이 예측",
      description:
        "전립선 MRI의 영상 특징으로 BRCA 유전자 변이 가능성을 비침습적으로 예측하는 AI를 개발하고 있습니다. 유전자 검사 전 선별 단계에서 활용하는 것이 목표입니다.",
      tags: ["전립선 MRI", "BRCA", "비침습"],
    },
    {
      id: "m4",
      code: "M4",
      name: "대동맥 석회화·체성분·골밀도 측정",
      description:
        "한 번의 건강검진 CT에서 대동맥 석회화, 내장지방과 골격근, 골밀도를 함께 측정하는 AI를 개발하고 있습니다. 활용되지 않던 영상 정보를 건강 정보로 바꾸는 것이 목표입니다.",
      tags: ["건강검진 CT", "체성분", "골밀도"],
    },
  ],
};

export const technology: SectionContent<FeatureItem> = {
  heading: {
    label: "Technology",
    title: "핵심 기술",
    description: "From Image to Insight. 의료 영상을 정량화하고 해석하는 기술을 연구하고 있습니다.",
  },
  items: [
    {
      title: "AI 자동 분할·정량화",
      description: "CT·MRI에서 전립선과 세부 구조를 자동으로 분할하고 3D 부피를 계산합니다.",
    },
    {
      title: "라디오믹스 분석",
      description:
        "영상에서 1,400여 개의 정량적 특징을 추출해 병변과 유전자 변이 예측에 활용합니다.",
    },
    {
      title: "해석 가능한 AI",
      description: "AI가 어떤 영상 특징을 근거로 판단했는지 분석해 결과의 해석 가능성을 높입니다.",
    },
    {
      title: "통합 리포트",
      description: "여러 분석 결과를 한 장의 리포트로 정리하고, 병원 PACS 연동을 목표로 합니다.",
    },
  ],
};

export const leadership: SectionContent<LeaderItem> = {
  heading: {
    label: "Leadership",
    title: "임원진",
  },
  items: Object.values(leaders),
};

export const contact: ContactContent = {
  heading: {
    label: "Contact",
    title: "문의하기",
  },
  groups: [
    {
      title: "주소 / Address",
      items: [{ value: company.address }, { value: company.addressEn }],
    },
    {
      title: "연락처 / Contact",
      items: [{ label: "E-mail", value: company.email }],
    },
  ],
};

export const footer = {
  // 바깥 배열 하나가 한 줄이다. 한 줄에 여러 항목을 넣으면 나란히 보임
  companyInfo: [
    [{ label: "대표:", value: company.ceo }],
    [{ label: "사업자등록번호:", value: company.businessNumber }],
    [{ label: "주소:", value: company.address }],
    [{ label: "E-mail:", value: company.email }],
  ],
  copyright: `© ${company.copyrightYear} ${company.nameEn}. All rights reserved.`,
};
