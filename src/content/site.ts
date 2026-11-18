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
    cv: [
      {
        title: "경력",
        items: [
          "연세대 의대 비뇨의학교실 임상조교수 (2020–2024)",
          "연세대 의대 비뇨의학교실 임상연구조교수 (2019–2020)",
          "연세대 의대 비뇨의학교실 임상강사 (2018–2019)",
          "세브란스병원 비뇨의학과 전공의 (2014–2018)",
        ],
      },
      {
        title: "학회 활동",
        items: [
          "대한비뇨의학회(KUA) 부총무, 수련교육위원회·홍보위원회 위원",
          "대한비뇨기로봇내시경학회(KSER) 부총무",
          "대한전립선학회(KPS) 부총무",
        ],
      },
      {
        title: "연구·성과",
        items: [
          "중소벤처기업부 TIPS: AI 기반 전립선 질환 다중모듈 의료영상 플랫폼 개발, 연구책임자 (2026–2028)",
          "한국보건산업진흥원: CT/MRI 분석과 유전 특성 예측을 통합한 AI 전립선 진단 플랫폼, 연구책임자 (2026–2028)",
          "MRI/초음파 융합 표적 전립선 생검 다기관 전향 연구, 주관 연구책임자 (2021–2025)",
          "논문 58편 (J Urol, Ann Surg Oncol, World J Urol 등)",
        ],
      },
      {
        title: "수상",
        items: [
          "SIU Annual Meeting Best Poster Award (2018)",
          "대한전립선학회 최우수논문상 (2019)",
          "연세의료원 최우수논문상 (2017)",
          "Investigative and Clinical Urology Reviewer of the Month (2022)",
        ],
      },
    ],
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
    cv: [
      {
        title: "경력",
        items: [
          "세브란스병원 비뇨생식기영상 임상강사 (2023–2024)",
          "세브란스병원 영상의학과 전공의 (2020–2023)",
          "영상의학과 전문의 (2023)",
        ],
      },
      {
        title: "학회 활동",
        items: [
          "대한초음파의학회 교육위원",
          "대한영상의학회지 편집위원",
          "Korean Journal of Radiology, Ultrasonography 심사위원",
          "RSNA · ESR · ISMRM 정회원",
        ],
      },
      {
        title: "연구·성과",
        items: [
          "과학기술정보통신부: 전립선 세부구조 검출·부피 측정과 임상적으로 유의한 전립선암 판별, 연구책임자",
          "창업진흥원: AI 전립선 영상 분석 솔루션 ProVista, 연구책임자",
          "AI 의료영상 특허 출원 5건 (전립선 영상 분석, BRCA 변이 예측 등)",
          "원저 논문 19편",
          "RSNA · ISMRM · ECR · EAU 등 국제학회 발표 다수",
        ],
      },
      {
        title: "수상",
        items: [
          "대한비뇨생식기영상의학회(KSUR) 연구초록 최우수상 (2025)",
          "제11회 실험실창업페스티벌 경연 우수상, 과학기술정보통신부 (2025)",
        ],
      },
    ],
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
    cv: [
      {
        title: "경력",
        items: [
          "세브란스병원 임상혁신센터 제1부센터장 (현재)",
          "연세대 의대 비뇨의학교실 임상조교수 (2021–2025)",
          "연세대 의대 비뇨의학교실 임상연구조교수 (2020–2021)",
          "연세대 의대 병리학교실 연구원 (2013–2018)",
          "세브란스병원 비뇨의학과 전공의 (2009–2013)",
        ],
      },
      {
        title: "학회 활동",
        items: [
          "대한비뇨기종양학회(KUOS) 진료지침이사",
          "대한비뇨의학회 연구위원회 부위원장, 기초비뇨의학연구회 총무",
          "한국유전체학회(KOGO) 학술위원",
        ],
      },
      {
        title: "연구·성과",
        items: [
          "한국연구재단 중견연구: 전립선암 전사체 아형 기반 약물반응 예측 (2022–2027)",
          "논문 40여 편 (Cancer Cell, Nature Cancer, Nucleic Acids Research 등)",
          "전립선암 아형 분류 특허 2건, DCGen에 기술이전 (2022)",
        ],
      },
      {
        title: "수상",
        items: [
          "U.S. DoD CDMRP Early Investigator Research Award (2019)",
          "AUA · EAU Annual Meeting Best Poster (2022)",
          "AACR-KCA Joint Conference Best Oral Presentation (2024)",
          "대한비뇨기종양학회 최우수논문상 (2023, 2026)",
        ],
      },
    ],
  },
} satisfies Record<string, LeaderItem>;

export const company: Company = {
  name: "(주)유로인사이트",
  nameEn: "UroInsight",
  logo: "/images/logo.svg",
  ceo: leaders.ceo.name,
  businessNumber: "764-81-04002",
  address: "서울 서대문구 신촌역로 29, 405호",
  addressEn: "405, 29 Sinchonyeok-ro, Seodaemun-gu, Seoul, Republic of Korea",
  email: "uroinsight@gmail.com",
  copyrightYear: 2026,
};

export const siteMetadata = {
  title: company.nameEn,
  description: "CT와 MRI에서 진단의 단서를 찾는 의료 AI 기업",
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
  openCv: "약력 보기",
  closeModal: "닫기",
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
    title: "한 번의 촬영으로\n더 많은 것을 봅니다",
    description:
      "(주)유로인사이트는 CT와 MRI를 인공지능으로 재분석하는 기술을 만듭니다.\n전립선 질환 진료의 문제를 해결하고자 합니다.",
  },
  items: [
    {
      title: "전립선 용적 측정",
      description:
        "경직장 초음파 검사는 불편하고 비용 부담이 큽니다. 복부 CT에 담긴 전립선 정보는 활용되지 않고 있습니다.",
    },
    {
      title: "전립선 MRI 판독",
      description:
        "병원과 판독자에 따라 결과가 다르고, 영상의학 전문의는 부족합니다.",
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
    title: "검진-진단-유전자예측까지 하나의 흐름으로",
    description:
      "추가 촬영과 침습적 검사를 줄이는 것이 목표입니다.\nCT와 MRI를 더 깊이 읽어내는 네 가지 모듈을 개발하고 있습니다."
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
        "건강검진 복부 CT에서 전립선 용적과 석회화를 측정하고 PSA 밀도를 계산합니다. 추가 초음파 검사 없이 남성 건강 정보를 제공합니다.",
      tags: ["건강검진 CT", "전립선 용적", "PSA 밀도"],
    },
    {
      id: "m2",
      code: "M2",
      name: "MRI 판독 보조",
      description:
        "MRI에서 전립선 영역을 자동으로 분할하고, 병변 탐지와 악성도 예측으로 영상의학 전문의의 판독을 보조합니다.",
      tags: ["전립선 MRI", "판독 보조"],
    },
    {
      id: "m3",
      code: "M3",
      name: "BRCA 유전자 변이 예측",
      description:
        "전립선 MRI의 영상 특징으로 BRCA 유전자 변이 가능성을 비침습적으로 예측합니다.",
      tags: ["전립선 MRI", "BRCA", "비침습"],
    },
    {
      id: "m4",
      code: "M4",
      name: "대동맥 석회화·체성분·골밀도 측정",
      description:
        "한 번의 건강검진 CT에서 대동맥 석회화, 내장지방과 골격근, 골밀도를 함께 측정합니다.",
      tags: ["건강검진 CT", "체성분", "골밀도"],
    },
  ],
};

export const technology: SectionContent<FeatureItem> = {
  heading: {
    label: "Technology",
    title: "핵심 기술",
    description: "의료 영상을 정량화하고 해석하는 기술을 연구하고 있습니다.",
  },
  items: [
    {
      title: "AI 자동 분할·정량화",
      description: "CT와 MRI에서 전립선과 세부 구조를 자동으로 분할하고 3D 부피를 계산합니다.",
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
      description: "여러 분석 결과를 한 장의 리포트로 정리합니다.",
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
