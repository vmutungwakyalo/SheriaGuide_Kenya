export type Domain = { slug: string; name: string; blurb: string; questions: string[] };

export const DOMAINS: Domain[] = [
  {
    slug: "land",
    name: "Land & Property",
    blurb:
      "Due diligence, title searches, transfers, leases, mortgages, boundaries, and land rates.",
    questions: [
      "How do I verify a title before buying land in Kenya?",
      "What steps are involved in transferring land ownership?",
      "How can I resolve a boundary dispute with a neighbour?",
    ],
  },
  {
    slug: "vehicles",
    name: "Vehicles & Transport",
    blurb:
      "Vehicle purchases and transfers, NTSA services, driving licences, PSV rules, and road matters.",
    questions: [
      "How do I transfer vehicle ownership through NTSA?",
      "How can I verify a vehicle logbook before buying?",
      "What should I do after a road traffic accident?",
    ],
  },
  {
    slug: "marriage-family",
    name: "Marriage & Family",
    blurb:
      "Marriage requirements and registration, divorce, custody, maintenance, and guardianship.",
    questions: [
      "How do I register a customary marriage in Kenya?",
      "What are the steps to give notice for a civil marriage?",
      "How is child maintenance decided?",
    ],
  },
  {
    slug: "children-education",
    name: "Children & Education",
    blurb:
      "Birth registration, school enrolment, adoption, fostering, and child-protection reporting.",
    questions: [
      "How do I apply for a birth certificate for my child?",
      "What is the legal process for adopting a child in Kenya?",
      "Where can I report a child-protection concern?",
    ],
  },
  {
    slug: "employment",
    name: "Employment",
    blurb:
      "Employment contracts, workplace rights, statutory deductions, termination, and labour disputes.",
    questions: [
      "How much notice must my employer give before termination?",
      "What can I do if I believe I was unfairly dismissed?",
      "Where can a domestic worker report an employment issue?",
    ],
  },
  {
    slug: "business-trade",
    name: "Business & Trade",
    blurb:
      "Business registration, KRA obligations, permits, import/export, AGPO, and closing a business.",
    questions: [
      "How do I register a business name through BRS?",
      "Which permits might a new business need in my county?",
      "How can an eligible business apply for AGPO registration?",
    ],
  },
  {
    slug: "housing-rentals",
    name: "Housing & Rentals",
    blurb:
      "Tenancy agreements, rent and deposits, eviction process, home purchases, and housing approvals.",
    questions: [
      "Can my landlord evict me without following a notice process?",
      "What should I check before buying an off-plan home?",
      "What can I do if my landlord withholds my deposit?",
    ],
  },
  {
    slug: "crime-justice",
    name: "Crime, Law & Justice",
    blurb:
      "Rights on arrest, bail, reporting crime, court processes, legal aid, and police complaints.",
    questions: [
      "What are my rights if I am arrested in Kenya?",
      "How do I report police misconduct to IPOA?",
      "How can I get help from the National Legal Aid Service?",
    ],
  },
  {
    slug: "identity-civil-registration",
    name: "Identity & Civil Registration",
    blurb:
      "National IDs, passports, birth and death records, name changes, and citizenship matters.",
    questions: [
      "How do I replace a lost Kenyan national ID?",
      "How do I apply for a Kenyan passport through eCitizen?",
      "What is the process for changing my name by deed poll?",
    ],
  },
  {
    slug: "money-banking-consumer",
    name: "Money, Banking & Consumer Rights",
    blurb:
      "Banking and mobile-money disputes, SACCOs, loans, insurance, consumer complaints, and privacy.",
    questions: [
      "Where can I report an unresolved mobile-money dispute?",
      "How can I challenge an incorrect CRB listing?",
      "What can I do if a trader refuses to address a faulty product?",
    ],
  },
  {
    slug: "health-social-services",
    name: "Health & Social Services",
    blurb:
      "Health coverage, patient rights, disability services, social protection, and complaints.",
    questions: [
      "How do I check my registration for the Social Health Authority?",
      "Where can I raise a complaint about a patient's rights?",
      "How can a person apply for disability registration and support?",
    ],
  },
  {
    slug: "immigration-travel",
    name: "Immigration & Travel",
    blurb: "Passports, visas, permits, student passes, citizenship, and regional travel rights.",
    questions: [
      "How do I apply for a Kenyan passport?",
      "What permit may a foreign national need to work in Kenya?",
      "How can I apply for a student pass in Kenya?",
    ],
  },
  {
    slug: "wills-succession",
    name: "Wills, Inheritance & Succession",
    blurb:
      "Wills, probate, letters of administration, estate distribution, and dependants' rights.",
    questions: [
      "What makes a will valid in Kenya?",
      "What steps are involved in applying for letters of administration?",
      "How is an estate handled when someone dies without a will?",
    ],
  },
  {
    slug: "agriculture-rural",
    name: "Agriculture & Rural",
    blurb:
      "Farm leases, cooperatives, agricultural inputs, livestock movement, water, and irrigation.",
    questions: [
      "What should I check before leasing land for farming?",
      "How do I register an agricultural cooperative?",
      "Which permits may be needed to move livestock between counties?",
    ],
  },
  {
    slug: "intellectual-property",
    name: "Intellectual Property & Creative Works",
    blurb:
      "Copyright, publishing, music and film rights, trademarks, patents, and licensing creative work.",
    questions: [
      "How do I protect the copyright in a book I am writing?",
      "How do I apply to register a trademark with KIPI?",
      "What should a creator know before licensing their work?",
    ],
  },
  {
    slug: "digital-life-ict",
    name: "Digital Life & ICT",
    blurb:
      "SIM registration, cybercrime reporting, online businesses, content licensing, and data protection.",
    questions: [
      "What can I do if someone shares my personal data without consent?",
      "Where can I report an online scam or cybercrime?",
      "What rules should I check before starting an online business?",
    ],
  },
];
