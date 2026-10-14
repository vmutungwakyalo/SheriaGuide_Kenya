import type { KnowledgeEntry, KnowledgeSource } from "./types";

const checkedAt = "2026-10-14";
const nextReviewAt = "2027-04-14";

const employmentAct = {
  id: "employment-act",
  title: "Employment Act, 2007 (consolidated text checked)",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2007/11/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

function statutoryGuide({
  id,
  domainSlug = "employment",
  source = employmentAct,
  title,
  keywords,
  question,
  facts,
  notVerified,
}: {
  id: string;
  domainSlug?: string;
  source?: KnowledgeSource;
  title: string;
  keywords: string[];
  question: string;
  facts: string[];
  notVerified: string[];
}): KnowledgeEntry {
  return {
    id,
    domainSlug,
    title,
    summary: `A short statutory guide based on ${source.title}. It does not establish how the law applies to an individual situation.`,
    keywords,
    queryExamples: [question],
    sections: [
      {
        heading: "What the cited law provides",
        facts: facts.map((text) => ({ text, sourceIds: [source.id] })),
      },
    ],
    notVerified: notVerified,
    sources: [source],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  };
}

const employmentGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "employment-contract-particulars",
    title: "Check what an employment contract must state",
    keywords: ["employment contract", "written contract", "job terms", "employer", "employee"],
    question: "What information should my employer give me about my job?",
    facts: [
      "Sections 9–10 address when a contract must be in writing and the particulars it must contain.",
      "Section 10 covers particulars including the job, place of work, working hours, and remuneration.",
    ],
    notVerified: [
      "Whether a particular employment arrangement meets the statutory writing requirement or what remedy applies to missing particulars.",
      "A current model contract or employer-specific terms.",
    ],
  }),
  statutoryGuide({
    id: "employment-itemized-pay-statement",
    title: "Check what should appear on an itemized pay statement",
    keywords: ["payslip", "pay statement", "wages", "salary", "deductions", "payroll"],
    question: "Should I receive a payslip showing how my pay was calculated?",
    facts: [
      "Section 20 provides for an itemized pay statement at payment of wages and specifies particulars it must show.",
    ],
    notVerified: [
      "The required format or delivery method in a particular workplace.",
      "The complaint process where an employer does not provide a statement.",
    ],
  }),
  statutoryGuide({
    id: "employment-wage-deductions",
    title: "Check whether a deduction from wages is permitted",
    keywords: ["wage deduction", "salary deduction", "payroll", "employer", "wages", "payslip"],
    question: "Can my employer deduct this amount from my wages?",
    facts: [
      "Section 19 regulates deductions from wages, including circumstances in which deductions are permitted.",
    ],
    notVerified: [
      "Whether a particular deduction is lawful without the relevant facts and employment terms.",
      "The current process for recovering a disputed deduction or making a complaint.",
    ],
  }),
  statutoryGuide({
    id: "employment-annual-leave",
    title: "Understand the statutory annual-leave entitlement",
    keywords: [
      "annual leave",
      "paid leave",
      "working days",
      "leave balance",
      "employee",
      "employer",
    ],
    question: "What annual leave does the law provide?",
    facts: [
      "Section 28 provides annual leave after each completed 12 consecutive months of service.",
      "Section 28 specifies a minimum annual-leave entitlement of 21 working days with full pay.",
    ],
    notVerified: [
      "An employee's accrued leave balance or how leave is scheduled in an individual workplace.",
      "Whether an employment agreement provides more generous terms.",
    ],
  }),
  statutoryGuide({
    id: "employment-maternity-leave",
    title: "Understand statutory maternity leave",
    keywords: [
      "maternity leave",
      "pregnancy",
      "paid leave",
      "employee",
      "employer",
      "return to work",
    ],
    question: "What maternity leave does the Employment Act provide?",
    facts: [
      "Section 29 provides for maternity leave for a female employee.",
      "Section 29 provides for three months' maternity leave with full pay.",
    ],
    notVerified: [
      "Employer notice procedures, supporting documents, or workplace-specific arrangements.",
      "Whether another law or current policy changes the application in an individual case.",
    ],
  }),
  statutoryGuide({
    id: "employment-paternity-leave",
    title: "Understand statutory paternity leave",
    keywords: [
      "paternity leave",
      "new parent",
      "paid leave",
      "employee",
      "employer",
      "leave entitlement",
    ],
    question: "What paternity leave does the law provide?",
    facts: [
      "Section 29 provides for paternity leave for a male employee.",
      "Section 29 provides for two weeks' paternity leave with full pay.",
    ],
    notVerified: [
      "Employer notice procedures, supporting documents, or workplace-specific arrangements.",
      "Whether another law or current policy changes the application in an individual case.",
    ],
  }),
  statutoryGuide({
    id: "employment-sick-leave",
    title: "Check the statutory sick-leave conditions",
    keywords: [
      "sick leave",
      "illness",
      "medical certificate",
      "paid leave",
      "employee",
      "employer",
    ],
    question: "What conditions apply when I take sick leave?",
    facts: [
      "Section 30 provides for sick leave subject to statutory conditions, including service and certification requirements.",
    ],
    notVerified: [
      "Whether a particular absence meets those conditions or what notification process applies at a workplace.",
      "Whether an employment agreement provides more generous leave.",
    ],
  }),
  statutoryGuide({
    id: "employment-housing-allowance",
    title: "Check the employer's housing obligation",
    keywords: [
      "housing allowance",
      "employee housing",
      "wages",
      "salary",
      "employer",
      "accommodation",
    ],
    question: "Does my employer have to provide housing or a housing allowance?",
    facts: [
      "Section 31 addresses an employer's duty to provide housing or pay sufficient rent, including circumstances where wages include a housing element.",
    ],
    notVerified: [
      "How the provision applies to a particular salary package, allowance, or contract.",
      "A calculation for a specific employee or process to resolve a dispute.",
    ],
  }),
  statutoryGuide({
    id: "employment-termination-notice",
    title: "Check the statutory rules on termination notice",
    keywords: [
      "termination notice",
      "resignation",
      "dismissal",
      "notice period",
      "wages",
      "employment",
    ],
    question: "What notice period applies when my employment ends?",
    facts: [
      "Section 35 sets rules on notice to terminate a contract of service.",
      "Section 36 provides for payment in lieu of notice in circumstances covered by the Act.",
    ],
    notVerified: [
      "The notice period applicable to a particular contract or pay cycle.",
      "Whether a specific notice is valid or how final pay should be calculated.",
    ],
  }),
  statutoryGuide({
    id: "employment-termination-hearing",
    title: "Understand the hearing required before certain terminations",
    keywords: [
      "dismissal hearing",
      "misconduct",
      "poor performance",
      "incapacity",
      "employee rights",
      "termination",
    ],
    question: "Should I have been given a chance to respond before dismissal?",
    facts: [
      "Section 41 applies to termination on grounds of misconduct, poor performance, or physical incapacity.",
      "For those cases, the employer must explain the reason in a language the employee understands and hear the employee's representations in the presence of a chosen fellow employee or shop-floor union representative.",
    ],
    notVerified: [
      "Whether an employer's process met the statutory requirement in a particular case.",
      "What evidence to submit or where and when to file a claim.",
    ],
  }),
  statutoryGuide({
    id: "employment-redundancy",
    title: "Understand the statutory redundancy conditions",
    keywords: [
      "redundancy",
      "job loss",
      "selection criteria",
      "notice",
      "severance pay",
      "employment",
    ],
    question: "What process and payments does the law provide for redundancy?",
    facts: [
      "Section 40 sets conditions for termination on account of redundancy, including notice and selection-related requirements.",
      "Section 40 also addresses severance pay for an employee declared redundant.",
    ],
    notVerified: [
      "Whether a particular job loss legally amounts to redundancy or whether a process complied with the Act.",
      "The employee's payment calculation or current claim-filing workflow.",
    ],
  }),
  statutoryGuide({
    id: "employment-reasons-for-termination",
    title: "Understand the employer's duty to prove a termination reason",
    keywords: [
      "termination reason",
      "dismissal",
      "employer",
      "unfair termination",
      "employment dispute",
      "evidence",
    ],
    question: "Does my employer have to give and prove a reason for ending my job?",
    facts: [
      "Section 43 requires an employer to prove the reason or reasons for termination.",
      "Section 45 addresses when termination is unfair, including the validity and fairness of the reason and process.",
    ],
    notVerified: [
      "Whether a reason is valid in a particular case.",
      "How to file a claim, applicable deadlines, remedies, or likely outcomes.",
    ],
  }),
  statutoryGuide({
    id: "employment-certificate-of-service",
    title: "Request a certificate of service after employment",
    keywords: [
      "certificate of service",
      "leaving a job",
      "employment record",
      "employer",
      "employee",
      "work history",
    ],
    question: "Can I request a certificate of service when I leave my job?",
    facts: [
      "Section 51 addresses an employer's obligation to issue a certificate of service when employment ends, subject to the section's scope and terms.",
    ],
    notVerified: [
      "Issuance timing or follow-up where a certificate is not provided.",
      "A complaint route for non-issuance.",
    ],
  }),
];

const birthsDeathsAct = {
  id: "births-deaths-registration-act",
  title: "Births and Deaths Registration Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1928/2/eng",
  sourceType: "legislation" as const,
  checkedAt,
};

const citizenshipAct = {
  id: "kenya-citizenship-immigration-act",
  title: "Kenya Citizenship and Immigration Act, 2011",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2011/12/eng",
  sourceType: "legislation" as const,
  checkedAt,
};

const consumerProtectionAct = {
  id: "consumer-protection-act",
  title: "Consumer Protection Act, 2012",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2012/46/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const kraIncomeTax = {
  id: "kra-individual-income-tax",
  title: "Individual Income Tax",
  publisher: "Kenya Revenue Authority",
  url: "https://www.kra.go.ke/individual/filing-paying/types-of-taxes/individual-income-tax",
  sourceType: "government" as const,
  checkedAt,
};

const successionAct = {
  id: "law-of-succession-act",
  title: "Law of Succession Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1972/14/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const landControlAct = {
  id: "land-control-act",
  title: "Land Control Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1967/34/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const landRegistrationAct = {
  id: "land-registration-act",
  title: "Land Registration Act, 2012",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2012/3/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const landAct = {
  id: "land-act",
  title: "Land Act, 2012",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2012/6/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const trafficAct = {
  id: "traffic-act",
  title: "Traffic Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1953/39/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const waterAct = {
  id: "water-act",
  title: "Water Act, 2016",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2016/43/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const environmentalAct = {
  id: "environmental-management-act",
  title: "Environmental Management and Co-ordination Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1999/8/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const tradeMarksAct = {
  id: "trade-marks-act",
  title: "Trade Marks Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/1955/51/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const industrialPropertyAct = {
  id: "industrial-property-act",
  title: "Industrial Property Act, 2001",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2001/3/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const antiCounterfeitAct = {
  id: "anti-counterfeit-act",
  title: "Anti-Counterfeit Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2008/13/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const copyrightAct = {
  id: "copyright-act",
  title: "Copyright Act",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2001/12/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const dataProtectionAct = {
  id: "data-protection-act",
  title: "Data Protection Act, 2019",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2019/24/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const computerMisuseCybercrimesAct = {
  id: "computer-misuse-cybercrimes-act",
  title: "Computer Misuse and Cybercrimes Act, 2018",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2018/5/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const kecoboCmoLicensing = {
  id: "kecobo-cmo-licensing",
  title: "Licensing of Collective Management Organisations (CMOs)",
  publisher: "Kenya Copyright Board",
  url: "https://copyright.go.ke/our-services/licensing-collective-management-organisations-cmos",
  sourceType: "regulator" as const,
  checkedAt,
};

const keCirtIncidentForm = {
  id: "ke-cirt-report-incident",
  title: "Report an incident",
  publisher: "National KE-CIRT/CC",
  url: "https://ke-cirt.go.ke/report-incident/",
  sourceType: "regulator" as const,
  checkedAt,
};

const keCirtAbout = {
  id: "ke-cirt-about",
  title: "National KE-CIRT/CC",
  publisher: "Communications Authority of Kenya",
  url: "https://ke-cirt.go.ke/",
  sourceType: "regulator" as const,
  checkedAt,
};

const marriageAct = {
  id: "marriage-act",
  title: "Marriage Act, 2014",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2014/4/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const childrenAct = {
  id: "children-act",
  title: "Children Act, 2022",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2022/29/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const basicEducationAct = {
  id: "basic-education-act",
  title: "Basic Education Act, 2013",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2013/14/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const matrimonialPropertyAct = {
  id: "matrimonial-property-act",
  title: "Matrimonial Property Act, 2013",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2013/49/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const landGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "combine-or-subdivide-registered-land",
    domainSlug: "land",
    source: landRegistrationAct,
    title: "Understand the statutory process for combining or subdividing registered land",
    keywords: [
      "combine plots",
      "subdivide land",
      "re-parcellation",
      "registered land",
      "cadastral map",
    ],
    question: "How does the law provide for combining or subdividing registered land?",
    facts: [
      "Sections 22–23 allow an owner to apply to combine contiguous parcels held by the same proprietor where the rights and obligations match, and require an application and authenticated cadastral map for subdivision.",
      "Re-parcellation of contiguous parcels requires written consent from registered rights-holders and cautioners; the Registrar may refuse it where it would substantially change ownership and direct that transfers be used instead.",
    ],
    notVerified: [
      "Parcel-specific survey or planning approvals, prescribed applications, current fees, and registry workflow.",
      "Whether agricultural-land consent or other approvals apply to the parcel.",
    ],
  }),
  statutoryGuide({
    id: "register-land-after-proprietor-death",
    domainSlug: "land",
    source: landRegistrationAct,
    title: "Understand registration of land after a proprietor dies",
    keywords: ["inherit land", "deceased proprietor", "grant", "executor", "land registry"],
    question: "What does the law require to register land after its proprietor dies?",
    facts: [
      "Sections 49–50 allow the Registrar to remove a deceased joint proprietor's name on proof of death; for a sole proprietor or proprietor in common, the personal representative applies in the prescribed form and produces the grant.",
      "The Act also provides for specified transfers, lease surrenders, or charge discharges to be registered when the grant is produced.",
    ],
    notVerified: [
      "The succession-court process for obtaining a grant, prescribed land-registry forms, current fees, and registry-specific filing steps.",
      "Whether a particular title or grant qualifies for the registration requested.",
    ],
  }),
  statutoryGuide({
    id: "respond-public-land-lease-arrears",
    domainSlug: "land",
    source: landAct,
    title: "Understand statutory action for arrears or breach on a public-land lease",
    keywords: [
      "public land lease",
      "lease rent arrears",
      "forfeiture",
      "government land",
      "lease breach",
    ],
    question: "What can happen if rent is overdue on a public-land lease?",
    facts: [
      "Section 29 provides for interest on overdue rent at 2% per month or part of a month after the amount has remained unpaid for more than one month, unless another rate is gazetted.",
      "Under section 31, where rent remains unpaid for 12 months or a covenant is breached, the Government may serve notice and bring a court action at least one month later; forfeiture follows a court declaration and is subject to possible relief.",
    ],
    notVerified: [
      "Whether a particular lease is governed by these provisions, the current applicable interest rate, notice format, and payment or dispute channels.",
    ],
  }),
];

const vehicleGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "update-vehicle-particulars",
    domainSlug: "vehicles",
    source: trafficAct,
    title: "Understand how to update registered vehicle particulars",
    keywords: ["change vehicle particulars", "update logbook", "vehicle registration", "NTSA"],
    question: "What does the law require when registered vehicle particulars change?",
    facts: [
      "Section 6(7) requires the owner to notify the Authority when registered particulars change, forward the registration certificate for amendment, pay the prescribed fee, and provide further information required by the Authority.",
    ],
    notVerified: [
      "Which changes require an update, supporting documents, the current fee, and live NTSA portal steps.",
    ],
  }),
  statutoryGuide({
    id: "deregister-vehicle-export",
    domainSlug: "vehicles",
    source: trafficAct,
    title: "Understand deregistration when a vehicle is permanently moved out of Kenya",
    keywords: ["deregister car", "export vehicle", "move vehicle abroad", "registration plates"],
    question: "What does the law require to deregister a vehicle permanently moved outside Kenya?",
    facts: [
      "Section 6A requires an owner intending to move a vehicle permanently outside Kenya to return its identification plates and registration certificate to the Registrar.",
      "The Registrar cancels the certificate and issues a deregistration certificate.",
    ],
    notVerified: [
      "Current submission channel, prescribed form, fee, processing time, and export documentation beyond these statutory steps.",
    ],
  }),
  statutoryGuide({
    id: "license-motor-vehicle-road-use",
    domainSlug: "vehicles",
    source: trafficAct,
    title: "Understand the statutory requirements for a motor-vehicle licence",
    keywords: [
      "vehicle licence",
      "license car",
      "road use",
      "registration book",
      "third-party insurance",
    ],
    question: "What does the law require to license a motor vehicle for road use?",
    facts: [
      "Sections 15–17 require motor vehicles and trailers to be licensed and provide for an application to a licensing officer in the prescribed form with the fee and registration book.",
      "Issuance depends on valid registration particulars and third-party insurance; some prescribed classes also require an inspection report.",
    ],
    notVerified: [
      "Current licence categories, fees, renewal periods, and service-specific portal requirements.",
    ],
  }),
];

const domesticViolenceAct = {
  id: "protection-against-domestic-violence-act",
  title: "Protection Against Domestic Violence Act, 2015",
  publisher: "Kenya Law",
  url: "https://new.kenyalaw.org/akn/ke/act/2015/2/eng@2022-12-31",
  sourceType: "legislation" as const,
  checkedAt,
};

const civilRegistrationGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "register-birth-statutory-route",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand the statutory route for registering a birth",
    keywords: ["birth registration", "newborn", "registrar", "birth record", "birth certificate"],
    question: "What does the law say about registering a birth in Kenya?",
    facts: [
      "The Act provides for entry of prescribed particulars in the birth register by a registrar.",
      "The person giving notice of the birth provides prescribed particulars and certifies the entry by signature or mark.",
    ],
    notVerified: [
      "The current routine submission channel, forms, fees, supporting documents, and certificate-collection steps.",
      "The current rules on who must notify a birth in a particular situation.",
    ],
  }),
  statutoryGuide({
    id: "register-late-birth-statutory-route",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand late birth registration after six months",
    keywords: [
      "late birth",
      "birth registration",
      "six months",
      "Principal Registrar",
      "birth certificate",
    ],
    question: "What does the law require to register a birth more than six months later?",
    facts: [
      "The Act provides that registration more than six months after a birth requires written authority from the Principal Registrar under the applicable rules and payment of the prescribed fee.",
    ],
    notVerified: [
      "The prescribed fee amount, application form, evidence checklist, decision time, or appeal route.",
      "How the current agency process implements the statutory route.",
    ],
  }),
  statutoryGuide({
    id: "register-birth-abroad-statutory-route",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand the statutory evidence for registering a birth abroad",
    keywords: [
      "birth abroad",
      "overseas birth",
      "Kenyan citizen",
      "consulate",
      "birth registration",
    ],
    question: "What evidence does the law refer to for registering a Kenyan birth abroad?",
    facts: [
      "For a Kenyan citizen's birth abroad, the Act identifies a foreign birth certificate, with an English translation where needed, as one possible evidence route.",
      "The Act also refers to verification by a Kenyan mission or other evidence required by the Registrar.",
    ],
    notVerified: [
      "How Kenyan citizenship is established in a specific case, current consular appointments, forms, fees, and processing time.",
      "Whether alternative evidence will be accepted for a particular application.",
    ],
  }),
  statutoryGuide({
    id: "notify-found-newborn",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand the duty to notify a found newborn",
    keywords: [
      "found newborn",
      "exposed infant",
      "birth registrar",
      "seven days",
      "child identity",
    ],
    question: "What does the law require if someone finds a newborn?",
    facts: [
      "The Act requires a person who finds a living newborn, or a person caring for the child, to notify the registrar within seven days and provide birth particulars they possess.",
    ],
    notVerified: [
      "Current child-safeguarding referrals, agency contact details, required supporting documents, or local reporting procedure.",
      "Urgent safety or medical assistance; contact local emergency or child-protection services for immediate risk.",
    ],
  }),
  statutoryGuide({
    id: "add-name-to-birth-register",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand how a child's name may be added to the birth register",
    keywords: [
      "child name",
      "birth register",
      "birth certificate",
      "parent",
      "guardian",
      "two years",
    ],
    question: "Can a parent add a child's name after birth registration?",
    facts: [
      "The Act provides that a parent or guardian may register a child's name within two years of birth registration, subject to a prescribed fee and evidence required by the Registrar.",
    ],
    notVerified: [
      "The fee amount, acceptable evidence, application channel, or route after two years.",
      "Whether a proposed name correction is handled under this provision or a different procedure.",
    ],
  }),
  statutoryGuide({
    id: "notify-death-statutory-route",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand statutory notification of a death",
    keywords: [
      "death registration",
      "death certificate",
      "registrar",
      "medical practitioner",
      "inquest",
    ],
    question: "What does the law say about notifying a death in Kenya?",
    facts: [
      "The Act provides for prescribed particulars to be given to the registrar by a person notifying a death, with the entry certified by signature or mark.",
      "It provides for a cause-of-death certificate from an attending medical practitioner, or an inquest finding where applicable.",
    ],
    notVerified: [
      "The complete current notifier hierarchy, prescribed notification deadline, forms, fees, and certificate-collection process.",
      "Which reporting route applies to a specific death or inquest.",
    ],
  }),
  statutoryGuide({
    id: "register-death-abroad-statutory-route",
    domainSlug: "identity-civil-registration",
    source: birthsDeathsAct,
    title: "Understand the statutory evidence for registering a death abroad",
    keywords: [
      "death abroad",
      "overseas death",
      "Kenyan citizen",
      "consulate",
      "death registration",
    ],
    question:
      "What evidence does the law refer to for registering a Kenyan citizen's death abroad?",
    facts: [
      "For a Kenyan citizen's death abroad, the Act identifies a foreign death certificate, or evidence from the medical attendant where the country does not issue certificates, as an evidence route.",
      "The Act also refers to verification by a Kenyan mission or other evidence required by the Registrar.",
    ],
    notVerified: [
      "Current mission submission steps, forms, fees, alternative evidence requirements, and processing time.",
    ],
  }),
];

const citizenshipGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "citizenship-by-descent-abroad",
    domainSlug: "immigration-travel",
    source: citizenshipAct,
    title: "Check citizenship by descent for a person born abroad",
    keywords: ["citizenship by descent", "born abroad", "Kenyan parent", "citizenship", "passport"],
    question: "Can someone born outside Kenya be a citizen if a parent was Kenyan?",
    facts: [
      "Section 7 provides that a person born outside Kenya is a citizen by birth if their mother or father was a Kenyan citizen on the date of birth.",
    ],
    notVerified: [
      "The evidence checklist, registration or document application route, consular steps, fees, and processing time.",
      "Whether a specific parent-child situation meets the statutory requirements.",
    ],
  }),
  statutoryGuide({
    id: "dual-citizenship-disclosure",
    domainSlug: "immigration-travel",
    source: citizenshipAct,
    title: "Understand disclosure of dual citizenship",
    keywords: [
      "dual citizenship",
      "dual nationality",
      "disclose",
      "Kenyan citizen",
      "three months",
    ],
    question: "What does Kenyan law require if I acquire another citizenship?",
    facts: [
      "Section 8 provides that a Kenyan citizen by birth who acquires another country's citizenship may retain Kenyan citizenship subject to constitutional and statutory limits.",
      "Section 8 requires a dual citizen to disclose the other citizenship in the prescribed manner within three months.",
    ],
    notVerified: [
      "The prescribed disclosure form or channel, required evidence, fees, and current implementation procedure.",
      "How constitutional or statutory limits apply to a particular person's situation.",
    ],
  }),
  statutoryGuide({
    id: "citizenship-after-lawful-residence",
    domainSlug: "immigration-travel",
    source: citizenshipAct,
    title: "Check statutory citizenship eligibility after long-term residence",
    keywords: ["citizenship", "naturalisation", "lawful residence", "seven years", "application"],
    question: "What does the law require for citizenship after long-term lawful residence?",
    facts: [
      "Section 13 provides an application route for an adult of capacity lawfully resident continuously in Kenya for at least seven years, subject to additional statutory conditions.",
      "The listed conditions include preceding-period residence and permit or exemption status, language and knowledge, conviction, intention to reside, contribution, and bankruptcy criteria.",
    ],
    notVerified: [
      "Current application steps, acceptable proof, interpretation of eligibility conditions, fees, and decision time.",
      "Whether a particular applicant meets all statutory conditions.",
    ],
  }),
  statutoryGuide({
    id: "citizenship-registration-adopted-child",
    domainSlug: "immigration-travel",
    source: citizenshipAct,
    title: "Understand citizenship registration for an adopted child",
    keywords: [
      "adopted child",
      "citizenship",
      "adoption certificate",
      "legal guardian",
      "residence",
    ],
    question: "What does the citizenship law require for an adopted child?",
    facts: [
      "Section 14 provides for an application by an adopting parent or legal guardian to register an adopted child as a citizen.",
      "Section 14 lists evidence including the adopter's Kenyan citizenship, a qualifying adoption certificate, and proof of the child's lawful residence.",
    ],
    notVerified: [
      "The current application channel, acceptable residence evidence, recognized-jurisdiction list, fees, and processing time.",
      "Whether a particular adoption order qualifies under the Act.",
    ],
  }),
];

const taxConsumerGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "rescind-consumer-agreement-unfair-practice",
    domainSlug: "money-banking-consumer",
    source: consumerProtectionAct,
    title: "Rescind a consumer agreement after an unfair practice",
    keywords: [
      "consumer agreement",
      "unfair practice",
      "rescind",
      "supplier",
      "consumer rights",
      "refund",
    ],
    question: "Can I rescind a consumer agreement if the supplier used an unfair practice?",
    facts: [
      "Section 16(1) provides that a consumer may rescind an agreement entered into after or while a person engaged in an unfair practice.",
      "Section 16(3)–(6) provides for notice indicating the consumer's intention and reasons, and specifies addresses to which notice may be sent.",
      "Section 16(7) provides that a consumer who receives no satisfactory response within the prescribed period may commence an action.",
    ],
    notVerified: [
      "Whether a particular dispute meets the Act's definition of an unfair practice.",
      "The prescribed response period, complaint forum, evidence checklist, and case-specific remedies.",
    ],
  }),
  {
    id: "individual-income-tax-return",
    domainSlug: "money-banking-consumer",
    title: "File an individual income tax return",
    summary:
      "KRA's individual income tax page explains annual filing and the iTax channel. Tax-year requirements can change; confirm the current year's instructions.",
    keywords: [
      "individual income tax",
      "tax return",
      "KRA PIN",
      "NIL return",
      "iTax",
      "filing deadline",
    ],
    queryExamples: ["When do I file my individual tax return, and do I file if I had no income?"],
    sections: [
      {
        heading: "What KRA currently states",
        facts: [
          {
            text: "KRA states that every individual with a KRA PIN must file a return every year, whether or not they earned income.",
            sourceIds: [kraIncomeTax.id],
          },
          {
            text: "KRA states that individual returns are filed online through iTax between 1 January and 30 June of the following year.",
            sourceIds: [kraIncomeTax.id],
          },
          {
            text: "KRA states that a person with no income to declare must file a NIL return.",
            sourceIds: [kraIncomeTax.id],
          },
        ],
      },
    ],
    notVerified: [
      "Whether these dates and rules remain current for the relevant year.",
      "Current portal screens, tax rates, reliefs, penalties, and the correct filing treatment for a particular person's income.",
    ],
    sources: [kraIncomeTax],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
];

const successionGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "make-written-will",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand the statutory requirements for a written will",
    keywords: ["written will", "testamentary capacity", "witnesses", "will requirements"],
    question: "What does Kenyan law require for a written will?",
    facts: [
      "The Act addresses testamentary capacity and sets formal execution and witness requirements for written wills.",
    ],
    notVerified: [
      "A drafting template, case-specific capacity assessment, witness checklist, and will-safekeeping service.",
    ],
  }),
  statutoryGuide({
    id: "change-or-revoke-will",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand how a will may be changed or revoked",
    keywords: ["change will", "revoke will", "codicil", "testament"],
    question: "Can I update or cancel my will?",
    facts: ["Sections 17–18 address alteration and revocation of wills."],
    notVerified: [
      "Whether a particular later document changes or revokes a will, and what formalities apply to the proposed change.",
    ],
  }),
  statutoryGuide({
    id: "probate-as-named-executor",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand the probate route for a named executor",
    keywords: ["probate", "executor", "grant of representation", "will"],
    question: "I am named executor; what legal process follows?",
    facts: [
      "The Act provides for grants of representation and probate to an executor, with statutory notice and objection procedures.",
    ],
    notVerified: [
      "The current court registry, filing method, complete application documents, and fee.",
      "Whether the named executor is eligible and able to act in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "letters-administration-with-will-annexed",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand administration where a will has no acting executor",
    keywords: ["will", "executor unavailable", "letters of administration", "estate"],
    question: "There is a will, but no executor can act. What does the law provide?",
    facts: [
      "Sections 64–65 provide for letters of administration with the will annexed where no executor is able or willing to prove the will.",
    ],
    notVerified: [
      "Current filing requirements and evidence needed to show why the executor cannot act.",
      "Which applicant should apply in a particular family or estate.",
    ],
  }),
  statutoryGuide({
    id: "apply-for-intestate-grant",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand who may apply for an intestate grant",
    keywords: ["no will", "intestate", "administrator", "grant", "estate"],
    question: "Who may apply to administer an estate when there is no will?",
    facts: [
      "Section 66 sets a general order of preference for intestate grants, beginning with a surviving spouse and then other listed persons, subject to the court's discretion.",
    ],
    notVerified: [
      "Current application forms, consents, evidence required from beneficiaries, and who should apply on the facts.",
    ],
  }),
  statutoryGuide({
    id: "limited-grant-preserve-estate",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand a limited grant to collect or preserve estate assets",
    keywords: ["limited grant", "preserve estate", "collect assets", "estate property"],
    question: "Can someone preserve estate property before full administration?",
    facts: [
      "The Act recognises limited grants, including a grant for collection and preservation of estate property.",
    ],
    notVerified: [
      "Which limited grant fits particular facts, and the current evidence, forms, and registry practice.",
    ],
  }),
  statutoryGuide({
    id: "prevent-estate-intermeddling",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand the restriction on unauthorised handling of estate property",
    keywords: ["estate property", "intermeddling", "unauthorised sale", "deceased estate"],
    question: "Can a relative sell the deceased's property before a grant?",
    facts: [
      "Section 45 prohibits taking possession of, disposing of, or otherwise intermeddling with a deceased person's free property unless authorised by law or a grant.",
    ],
    notVerified: [
      "The fastest protective remedy or practical reporting route in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "object-to-grant-application",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand the statutory route to object to a grant application",
    keywords: ["object to probate", "grant objection", "succession cause", "estate"],
    question: "How does the law provide for objecting to a grant application?",
    facts: [
      "Sections 67–70 provide for an objection within the period stated in the published notice and for the court to call for an answer and cross-application where an objection is lodged.",
    ],
    notVerified: [
      "The current prescribed form, registry-specific filing steps, and how the court will determine a dispute.",
    ],
  }),
  statutoryGuide({
    id: "confirm-succession-grant",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand confirmation of a succession grant",
    keywords: ["confirm grant", "estate distribution", "administrator", "beneficiary"],
    question: "When can an administrator apply to distribute estate assets?",
    facts: [
      "Section 71 governs confirmation of grants and provides for the court to confirm the grant before distribution of capital assets, subject to the Act's timing provisions and court powers.",
    ],
    notVerified: [
      "The confirmation documents, proposed distribution, beneficiaries' evidence, and registry practice for a particular estate.",
    ],
  }),
  statutoryGuide({
    id: "dependant-provision-application",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand a dependant's application for provision from an estate",
    keywords: ["dependant", "inheritance provision", "estate claim", "maintenance"],
    question: "I depended on the deceased but was left out. What does the law provide?",
    facts: [
      "Sections 26–29 empower the court to make reasonable provision for qualifying dependants in the circumstances set out in the Act.",
    ],
    notVerified: [
      "Whether a person qualifies as a dependant, the evidence threshold, applicable deadlines, and amount of any provision.",
    ],
  }),
  statutoryGuide({
    id: "revoke-or-annul-succession-grant",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand when a succession grant may be revoked",
    keywords: ["revoke grant", "annul grant", "succession fraud", "estate administration"],
    question: "Can a grant be challenged after it was issued?",
    facts: [
      "Section 76 permits the court to revoke or annul a grant on statutory grounds, including material defects, fraud or concealment, or failure to proceed with administration.",
    ],
    notVerified: [
      "The current application form, evidence checklist, hearing time, or whether particular facts meet a statutory ground.",
    ],
  }),
  statutoryGuide({
    id: "reseal-foreign-succession-grant",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand resealing a qualifying foreign succession grant in Kenya",
    keywords: ["reseal grant", "foreign probate", "foreign succession grant", "estate in Kenya"],
    question: "Can a foreign probate grant be resealed for use in Kenya?",
    facts: [
      "Sections 77–78 allow the High Court to seal a grant from a Commonwealth country or a foreign country designated by the Attorney-General; once sealed, it has effect in Kenya as if granted and confirmed by the High Court.",
      "Before sealing, the Court must be satisfied about estate duty and may require evidence of domicile or security for debts to Kenyan creditors.",
    ],
    notVerified: [
      "Whether a particular foreign jurisdiction is designated, the current registry form and filing channel, complete supporting-document checklist, filing fee, and processing time.",
    ],
  }),
  statutoryGuide({
    id: "submit-estate-inventory-and-accounts",
    domainSlug: "wills-succession",
    source: successionAct,
    title: "Understand a personal representative's estate inventory and accounting duties",
    keywords: ["estate inventory", "administration account", "executor accounts", "grant deadline"],
    question: "What estate inventory and accounts must a personal representative file?",
    facts: [
      "Section 83(e) requires personal representatives to produce a full and accurate inventory of estate assets and liabilities and an account of their dealings to the Court within six months after the grant.",
      "After confirmation, section 83(g) requires completion of administration and an account within six months unless the Court allows longer; the completion duty does not apply to continuing trusts.",
    ],
    notVerified: [
      "The current account form, filing channel, registry checklist, or any applicable filing fee.",
      "Whether the Court will allow a longer administration period in a particular case.",
    ],
  }),
];

const agricultureGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "land-control-consent",
    domainSlug: "agriculture-rural",
    source: landControlAct,
    title: "Understand consent for a controlled agricultural-land transaction",
    keywords: ["Land Control Board", "agricultural land", "transaction consent", "farm sale"],
    question: "Do I need consent to sell or lease this farm?",
    facts: [
      "Sections 2 and 6 define controlled transactions and generally make a controlled transaction involving agricultural land in a land-control area void without Land Control Board consent, subject to statutory provisions and exceptions.",
    ],
    notVerified: [
      "Whether a parcel is in a control area and the current application form, documents, fee, or board process.",
    ],
  }),
  statutoryGuide({
    id: "extend-land-consent-period",
    domainSlug: "agriculture-rural",
    source: landControlAct,
    title: "Understand extension of the land-consent application period",
    keywords: ["Land Control Board", "six months", "consent extension", "agricultural land"],
    question: "The six months passed; does the law allow an extension to seek consent?",
    facts: [
      "Section 8(1) sets an ordinary six-month period for applying for consent and permits the High Court to extend that period for sufficient reason.",
    ],
    notVerified: [
      "The current court filing route, evidence of sufficient reason, applicable deadline, and likelihood of relief.",
    ],
  }),
  statutoryGuide({
    id: "succession-agricultural-land-consent-check",
    domainSlug: "agriculture-rural",
    source: landControlAct,
    title: "Check the land-control consent exception for succession transmission",
    keywords: ["inheritance", "agricultural land", "Land Control Board", "succession"],
    question: "Does inherited agricultural land need Land Control Board consent?",
    facts: [
      "Section 6(3)(a) excludes transmission by will or intestacy from the controlled-transaction consent requirement, except where it would divide the land into two or more parcels held under separate titles.",
    ],
    notVerified: [
      "Registration steps and whether a proposed division falls within the statutory exception.",
    ],
  }),
  statutoryGuide({
    id: "apply-for-irrigation-water-permit",
    domainSlug: "agriculture-rural",
    source: waterAct,
    title: "Understand water-resource permits for irrigation abstraction",
    keywords: ["irrigation", "water abstraction", "permit", "Water Resources Authority", "farm"],
    question: "Do I need a permit to take river or groundwater for irrigation?",
    facts: [
      "The Water Act establishes a permit framework for regulating the use of water resources and gives the Water Resources Authority regulatory functions.",
    ],
    notVerified: [
      "Whether a proposed use is permit-required or exempt and the current application steps, documents, charges, or processing time.",
    ],
  }),
  statutoryGuide({
    id: "screen-farm-project-for-eia",
    domainSlug: "agriculture-rural",
    source: environmentalAct,
    title: "Check whether a farm project requires environmental assessment",
    keywords: ["farm project", "EIA", "environmental licence", "NEMA", "development"],
    question: "Does a farm development need an environmental impact assessment licence?",
    facts: [
      "Section 58 and the Second Schedule require an environmental impact assessment study and licence before commencement for projects prescribed under the Act.",
    ],
    notVerified: [
      "Whether a specific project falls within the current Schedule and the current submission steps, documents, or fees.",
    ],
  }),
  statutoryGuide({
    id: "appeal-environmental-assessment-decision",
    domainSlug: "agriculture-rural",
    source: environmentalAct,
    title: "Understand appeals from specified environmental assessment decisions",
    keywords: ["EIA appeal", "NEMA decision", "National Environment Tribunal", "farm project"],
    question: "Can I challenge an environmental assessment decision?",
    facts: [
      "The Act provides an appeal route to the National Environment Tribunal for decisions specified by the Act.",
    ],
    notVerified: [
      "The applicable deadline and whether a particular decision qualifies for appeal.",
      "The current filing form, fee, and tribunal process.",
    ],
  }),
];

const intellectualPropertyGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "register-trade-mark",
    domainSlug: "intellectual-property",
    source: tradeMarksAct,
    title: "Understand the statutory route to register a trade mark",
    keywords: ["trade mark", "brand name", "logo", "KIPI", "registration"],
    question: "What process does the law provide to register a trade mark?",
    facts: [
      "The Act provides for trade-mark applications, examination, advertisement, and registration.",
    ],
    notVerified: [
      "Current KIPI forms, search requirements, fees, classification steps, and time to registration.",
    ],
  }),
  statutoryGuide({
    id: "oppose-trade-mark-application",
    domainSlug: "intellectual-property",
    source: tradeMarksAct,
    title: "Understand opposition to a published trade-mark application",
    keywords: ["trade mark opposition", "published application", "KIPI", "brand"],
    question: "How does the law provide for objecting to a published trade-mark application?",
    facts: [
      "The Act provides an opposition procedure after advertisement of a trade-mark application.",
    ],
    notVerified: [
      "The current opposition form, evidence requirements, filing period, and hearing procedure.",
    ],
  }),
  statutoryGuide({
    id: "renew-trade-mark",
    domainSlug: "intellectual-property",
    source: tradeMarksAct,
    title: "Understand renewal of a registered trade mark",
    keywords: ["trade mark renewal", "registration term", "KIPI", "brand protection"],
    question: "What does the law provide for renewing a registered trade mark?",
    facts: [
      "The Act provides a registration term and a mechanism for renewal of a registered trade mark.",
    ],
    notVerified: [
      "The current renewal window, late-renewal treatment, proof, fees, and filing channel.",
    ],
  }),
  statutoryGuide({
    id: "apply-for-patent",
    domainSlug: "intellectual-property",
    source: industrialPropertyAct,
    title: "Understand patent application and patentability requirements",
    keywords: ["patent", "invention", "novelty", "inventive step", "KIPI"],
    question: "What does Kenyan law require for a patent application?",
    facts: [
      "Part V, sections 22–25 provides a patent application, examination, and grant framework.",
      "The Act identifies novelty, inventive step, and industrial applicability as patentability requirements.",
    ],
    notVerified: [
      "Current KIPI forms, specification format, fees, search and examination workflow, and timelines.",
      "Whether a particular invention meets the legal test for patentability.",
    ],
  }),
  statutoryGuide({
    id: "register-industrial-design",
    domainSlug: "intellectual-property",
    source: industrialPropertyAct,
    title: "Understand registration of an industrial design",
    keywords: ["industrial design", "product appearance", "KIPI", "design registration"],
    question: "What does the law provide for protecting a product's appearance?",
    facts: ["Part XIII of the Act defines industrial designs and provides for their registration."],
    notVerified: [
      "Current representation or specification format, search process, fees, and filing steps.",
      "Whether a specific design satisfies the statutory criteria.",
    ],
  }),
  statutoryGuide({
    id: "seek-patent-revocation",
    domainSlug: "intellectual-property",
    source: industrialPropertyAct,
    title: "Understand statutory grounds to seek patent revocation",
    keywords: ["patent revocation", "invalid patent", "industrial property", "KIPI"],
    question: "How can an invalid patent be challenged under the Act?",
    facts: ["The Act provides for revocation proceedings on statutory grounds."],
    notVerified: [
      "The correct forum, prescribed pleadings, evidence requirements, and current costs.",
    ],
  }),
  statutoryGuide({
    id: "apply-for-compulsory-patent-licence",
    domainSlug: "intellectual-property",
    source: industrialPropertyAct,
    title: "Understand compulsory licensing of a patent",
    keywords: ["compulsory licence", "patent", "use invention", "industrial property"],
    question: "Can I request authority to use a patented invention?",
    facts: ["The Act provides a compulsory-licensing mechanism subject to statutory conditions."],
    notVerified: [
      "Current application forms, evidence requirements, decision timeline, and whether the statutory conditions are met.",
    ],
  }),
  statutoryGuide({
    id: "report-counterfeit-goods",
    domainSlug: "intellectual-property",
    source: antiCounterfeitAct,
    title: "Understand complaints about suspected counterfeit goods",
    keywords: ["counterfeit goods", "complaint", "Anti-Counterfeit Authority", "brand"],
    question: "What does the law provide for reporting suspected counterfeit goods?",
    facts: [
      "The Act establishes the Anti-Counterfeit Authority, defines counterfeiting, and recognises complaints by eligible complainants.",
    ],
    notVerified: [
      "The current complaint portal, evidence requirements, inspection response, and fees.",
      "Whether particular goods meet the statutory definition of counterfeit goods.",
    ],
  }),
  {
    id: "apply-to-license-copyright-collective-management-organisation",
    domainSlug: "intellectual-property",
    title: "Apply for a copyright collective management organisation licence",
    summary:
      "KECOBO publishes the application requirements and stated fee for a collective management organisation licence. Confirm current instructions before applying.",
    keywords: [
      "collective management organisation",
      "CMO licence",
      "KECOBO",
      "copyright organisation",
      "royalties",
    ],
    queryExamples: ["How can an organisation apply for a KECOBO CMO licence?"],
    sections: [
      {
        heading: "Statutory and regulator requirements",
        facts: [
          {
            text: "Section 46 of the Copyright Act provides for an application to the Board with prescribed fees and sets criteria for licensing a collective management organisation, including limits where a satisfactory CMO already serves the same class of rights and category of works.",
            sourceIds: ["copyright-act"],
          },
          {
            text: "KECOBO says new-organisation applications are made through its eCitizen portal and lists a certified registration certificate, certified memorandum and articles, proof of royalty-collection and distribution capacity, and members' deeds of assignment as supporting items.",
            sourceIds: ["kecobo-cmo-licensing"],
          },
          {
            text: "KECOBO lists a KES 250,000 fee for a new CMO and describes annual renewals.",
            sourceIds: ["kecobo-cmo-licensing"],
          },
        ],
      },
    ],
    notVerified: [
      "The regulator page has no visible publication or update date; the stated fee and instructions were checked on 2026-10-14 and may change.",
      "Detailed eCitizen form fields, decision or service timeline, and whether an applicant meets the licensing criteria.",
    ],
    sources: [copyrightAct, kecoboCmoLicensing],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
];

const digitalRightsGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "check-data-controller-registration-duty",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Check whether a business must register as a data controller or processor",
    keywords: ["ODPC registration", "data controller", "data processor", "business", "privacy"],
    question: "Does my business need to register as a data controller or processor?",
    facts: [
      "Section 18 restricts acting as a controller or processor unless registered, subject to prescribed thresholds and exemptions; the Act identifies factors relevant to those thresholds.",
    ],
    notVerified: [
      "Current threshold exemptions, portal workflow, fees, registration certificate, and renewal details.",
    ],
  }),
  statutoryGuide({
    id: "apply-for-data-controller-registration",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Understand information required for data-controller registration",
    keywords: ["ODPC application", "data controller", "data processor", "registration"],
    question: "What information does a data-controller registration application need?",
    facts: [
      "Section 19 lists application particulars including data descriptions, processing purposes, categories of data subjects, contact details, and safeguards.",
    ],
    notVerified: [
      "Current form fields, supporting documents, applicable fee, processing time, and renewal steps.",
    ],
  }),
  statutoryGuide({
    id: "request-access-to-personal-data",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Understand the right to request access to personal data",
    keywords: ["data access request", "personal data", "privacy", "data subject"],
    question: "How can I ask a company what personal information it holds about me?",
    facts: ["Section 26 recognises a data subject's right of access to personal data."],
    notVerified: [
      "The current request form, identity checks, exceptions, and detailed response timeline.",
    ],
  }),
  statutoryGuide({
    id: "request-personal-data-correction",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Understand the right to correct inaccurate personal data",
    keywords: ["correct personal data", "rectification", "privacy", "data subject"],
    question: "How can I ask a service to correct personal information it has wrong?",
    facts: ["Section 26 recognises a right to correction of false or misleading personal data."],
    notVerified: [
      "The current controller contact route, evidence standards, and response-time details.",
    ],
  }),
  statutoryGuide({
    id: "request-personal-data-erasure",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Understand the right to request erasure of personal data",
    keywords: ["erase data", "delete personal data", "privacy", "data subject"],
    question: "Can I ask a service to delete my personal data?",
    facts: [
      "Section 26 recognises a right to deletion of false or misleading personal data, subject to statutory limits.",
    ],
    notVerified: [
      "Applicable retention exceptions and the current request mechanism for a particular service.",
    ],
  }),
  statutoryGuide({
    id: "object-to-personal-data-processing",
    domainSlug: "digital-life-ict",
    source: dataProtectionAct,
    title: "Understand the right to object to personal-data processing",
    keywords: ["object to processing", "personal data", "privacy", "data subject"],
    question: "How can I object to a company using my personal data?",
    facts: [
      "Section 36 allows a data subject to object unless the controller or processor demonstrates compelling overriding legitimate interests or a need for legal claims.",
    ],
    notVerified: [
      "The current request channel and how an overriding interest is assessed in a particular case.",
    ],
  }),
  {
    id: "report-cyber-incident-to-ke-cirt",
    domainSlug: "digital-life-ict",
    title: "Report a cyber incident to National KE-CIRT/CC",
    summary:
      "National KE-CIRT/CC offers an online incident-reporting form. The form describes reporting intake but does not promise a resolution timeline.",
    keywords: [
      "report cyber incident",
      "KE-CIRT",
      "phishing",
      "identity theft",
      "malware",
      "intrusion",
      "web defacement",
    ],
    queryExamples: ["How do I report phishing or another cyber incident in Kenya?"],
    sections: [
      {
        heading: "Official incident-reporting channel",
        facts: [
          {
            text: "The National KE-CIRT/CC incident form accepts reports including identity theft, intrusion, malware, phishing, spam, and web defacement; it marks the subject, incident description, target IP, and source IP as required.",
            sourceIds: ["ke-cirt-report-incident"],
          },
          {
            text: "The form makes name, email, and phone optional and describes an anonymous-submission option, while warning that it cannot return resolution or comments for an anonymous submission.",
            sourceIds: ["ke-cirt-report-incident"],
          },
          {
            text: "National KE-CIRT/CC describes itself as a national incident-response coordinator hosted by the Communications Authority and says it responds to cyber threats 24/7.",
            sourceIds: ["ke-cirt-about"],
          },
          {
            text: "The Computer Misuse and Cybercrimes Act defines offences including unauthorised access, interference, and interception; not every incident report necessarily alleges one of those offences.",
            sourceIds: ["computer-misuse-cybercrimes-act"],
          },
        ],
      },
    ],
    notVerified: [
      "The public form does not state a response or resolution timeline, evidence or attachment requirements, fees, or the process and outcome after submission.",
      "The incident form and landing page have no visible update date; their contents were checked on 2026-10-14.",
      "Whether a particular incident constitutes an offence or should also be reported to another authority.",
    ],
    sources: [keCirtIncidentForm, keCirtAbout, computerMisuseCybercrimesAct],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
];

const marriageGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "give-notice-civil-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Give notice of a proposed civil marriage",
    keywords: ["civil marriage", "marriage notice", "Registrar of Marriages", "notice period"],
    question: "What statutory notice process applies to a proposed civil marriage?",
    facts: [
      "Sections 24–26 require the parties to give signed written notice not less than 21 days and not more than three months before the intended civil marriage.",
      "The Act lists particulars to be included in the notice, including identity, residence, and marital status information.",
    ],
    notVerified: [
      "Current filing channel, forms, appointment arrangements, and fee.",
      "Whether special circumstances affect the notice requirements in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "apply-special-marriage-licence",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the special marriage-licence route",
    keywords: ["special marriage licence", "civil marriage", "Registrar", "notice", "wedding"],
    question: "Does the law provide a special-licence route for a proposed marriage?",
    facts: [
      "The Marriage Act provides for a special marriage licence and gives the Registrar authority in relation to issuing it.",
    ],
    notVerified: [
      "Current application forms, grounds or evidence accepted in practice, fee, required documents, and processing time.",
    ],
  }),
  statutoryGuide({
    id: "register-customary-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand registration of a customary marriage",
    keywords: [
      "customary marriage",
      "marriage registration",
      "Registrar",
      "certificate",
      "spouses",
    ],
    question: "What does the law provide for registering a customary marriage?",
    facts: ["The Marriage Act recognises customary marriage and provides for its registration."],
    notVerified: [
      "Current registry checklist, acceptable evidence of the marriage, application channel, fee, and late-registration process.",
    ],
  }),
  statutoryGuide({
    id: "seek-dissolution-of-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the court route to dissolve a marriage",
    keywords: ["divorce", "dissolution", "marriage", "court petition", "grounds", "family"],
    question: "What does the law provide for ending a marriage through court?",
    facts: [
      "The Marriage Act sets statutory grounds and a court process for dissolution of marriages.",
    ],
    notVerified: [
      "Filing forms, court fees, service requirements, evidence, case duration, and outcome in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "register-christian-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand statutory registration of a Christian marriage",
    keywords: ["Christian marriage", "church marriage", "officiant", "registration", "certificate"],
    question: "What does the Marriage Act provide for registering a Christian marriage?",
    facts: [
      "The Marriage Act recognises Christian marriages and regulates authorised officiants and registration.",
    ],
    notVerified: [
      "How to confirm a particular officiant's authority, and the current appointment, document, fee, and certificate-collection steps.",
    ],
  }),
  statutoryGuide({
    id: "register-hindu-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand statutory registration of a Hindu marriage",
    keywords: ["Hindu marriage", "marriage registration", "Registrar", "certificate"],
    question: "What registration does the Marriage Act provide for a Hindu marriage?",
    facts: ["The Marriage Act provides for Hindu marriages and their registration."],
    notVerified: [
      "Current registrar route, documents, appointment, fee, and handling of a particular marriage.",
    ],
  }),
  statutoryGuide({
    id: "register-islamic-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand statutory registration of an Islamic marriage",
    keywords: ["Islamic marriage", "Muslim marriage", "marriage registrar", "registration"],
    question: "What registration does the Marriage Act provide for an Islamic marriage?",
    facts: [
      "The Marriage Act provides for Islamic marriages and authorised registration or solemnisation arrangements.",
    ],
    notVerified: [
      "Which registrar handles a particular marriage and the current documents, appointment, or fees.",
    ],
  }),
  statutoryGuide({
    id: "obtain-marriage-registration-record",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the statutory basis for marriage certificates and records",
    keywords: ["marriage certificate", "marriage record", "registered marriage", "copy"],
    question: "What legal record is made when a marriage is registered?",
    facts: [
      "The Marriage Act provides for registration of marriages and the associated certificates or records.",
    ],
    notVerified: ["How to obtain a copy or replacement, current fee, portal, and processing time."],
  }),
  statutoryGuide({
    id: "seek-judicial-separation",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the statutory route to judicial separation",
    keywords: ["judicial separation", "marriage", "court order", "spouses", "family law"],
    question: "Can spouses seek judicial separation without dissolving a marriage?",
    facts: ["The Marriage Act provides for judicial separation and related court orders."],
    notVerified: [
      "Petition format, court fees, evidence, duration, and the effect of an order in an individual case.",
    ],
  }),
  statutoryGuide({
    id: "seek-nullity-of-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the statutory route to seek nullity of a marriage",
    keywords: ["annul marriage", "nullity", "void marriage", "court petition", "family law"],
    question: "When does the law provide a route to have a marriage declared void or voidable?",
    facts: [
      "The Marriage Act provides for nullity proceedings and sets statutory grounds for a court to consider.",
    ],
    notVerified: [
      "Whether a particular ground applies, filing requirements, evidence, fees, and appeal steps.",
    ],
  }),
  statutoryGuide({
    id: "divide-matrimonial-property",
    domainSlug: "marriage-family",
    source: matrimonialPropertyAct,
    title: "Understand the court route for division of matrimonial property",
    keywords: ["matrimonial property", "division", "contribution", "separation", "divorce"],
    question: "How does the law provide for a court to determine rights in matrimonial property?",
    facts: [
      "The Matrimonial Property Act defines matrimonial property and provides for court determination of spouses' rights, including consideration of contribution.",
    ],
    notVerified: [
      "Filing documents, valuation, court fees, evidence of contribution, and the outcome in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "declaration-matrimonial-property-rights",
    domainSlug: "marriage-family",
    source: matrimonialPropertyAct,
    title: "Understand a court declaration about matrimonial-property rights",
    keywords: ["matrimonial property", "declaration", "spousal rights", "court", "property"],
    question: "Can a spouse ask a court to declare rights in matrimonial property?",
    facts: [
      "Section 17 provides a court route for a spouse to seek a declaration of rights to property that is or was matrimonial property.",
    ],
    notVerified: [
      "Filing documents, court fee, proof of ownership or contribution, and case timelines.",
    ],
  }),
  statutoryGuide({
    id: "protect-matrimonial-home-rights",
    domainSlug: "marriage-family",
    source: matrimonialPropertyAct,
    title: "Understand statutory protection relating to a matrimonial home",
    keywords: ["matrimonial home", "spousal consent", "sell home", "charge property"],
    question: "Can a spouse sell or charge a matrimonial home without the other spouse's consent?",
    facts: [
      "The Matrimonial Property Act contains protections relating to rights in a matrimonial home and dealings that require spousal consent.",
    ],
    notVerified: [
      "How consent is documented, what registry checks apply, and remedies for a specific transaction.",
    ],
  }),
  statutoryGuide({
    id: "apply-domestic-violence-protection-order",
    domainSlug: "marriage-family",
    source: domesticViolenceAct,
    title: "Understand the statutory route to a domestic-violence protection order",
    keywords: ["domestic violence", "protection order", "interim order", "court", "safety"],
    question: "How does the law provide for seeking a protection order?",
    facts: [
      "The Protection Against Domestic Violence Act provides for applications for protection orders, including interim protection orders.",
    ],
    notVerified: [
      "Current court or agency intake, forms, emergency availability, fee, evidence checklist, and service arrangements.",
    ],
  }),
  statutoryGuide({
    id: "enforce-domestic-violence-protection-order",
    domainSlug: "marriage-family",
    source: domesticViolenceAct,
    title: "Understand enforcement of a domestic-violence protection order",
    keywords: ["protection order breach", "domestic violence", "enforcement", "police", "court"],
    question: "What does the law provide if a protection order is breached?",
    facts: [
      "The Protection Against Domestic Violence Act provides for enforcement and offences relating to contravention of protection orders.",
    ],
    notVerified: [
      "Which police or court channel to use, evidence to provide, response time, and case-specific procedure.",
    ],
  }),
  statutoryGuide({
    id: "object-to-intended-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand how to object to an intended marriage",
    keywords: ["object to marriage", "marriage objection", "impediment", "Registrar of Marriages"],
    question: "How can someone object to an intended marriage in Kenya?",
    facts: [
      "Sections 27–31 allow a person who knows of an impediment to give written notice of objection to the Registrar or the person in charge of the place where notice was published; the objection must identify the objector, their relationship to an intended party, and the reasons.",
      "The Act sets hearing and appeal periods, including seven days for a Registrar's determination after a hearing and seven days to appeal the Registrar's decision.",
    ],
    notVerified: [
      "Prescribed objection form, the correct filing location in a particular case, and any fees.",
      "Whether the circumstances constitute a legal impediment to the proposed marriage.",
    ],
  }),
  statutoryGuide({
    id: "certificate-no-impediment-overseas-marriage",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand the certificate-of-no-impediment route for a marriage abroad",
    keywords: ["certificate of no impediment", "marry abroad", "overseas marriage", "Registrar"],
    question: "How can a Kenyan obtain a certificate of no impediment to marry overseas?",
    facts: [
      "Section 32(2) allows a Kenyan intending to marry outside Kenya to apply for a certificate of no impediment where the destination requires it; the Registrar issues it if nobody objects to the intended marriage.",
    ],
    notVerified: [
      "Current application channel, required identity and civil-status documents, fee, and processing time.",
    ],
  }),
  statutoryGuide({
    id: "premarital-matrimonial-property-agreement",
    domainSlug: "marriage-family",
    source: matrimonialPropertyAct,
    title: "Understand a pre-marriage agreement about property rights",
    keywords: [
      "prenuptial agreement",
      "premarital property agreement",
      "matrimonial property",
      "spouses",
    ],
    question: "Can we agree how property will be treated before we marry?",
    facts: [
      "Section 6(3)–(4) allows parties to an intended marriage to make an agreement before marriage to determine their property rights, and allows a court to set it aside for fraud, coercion, or manifest injustice.",
    ],
    notVerified: [
      "No statutory template or execution checklist has been verified; legal advice may be important where assets or coercion are disputed.",
    ],
  }),
  statutoryGuide({
    id: "seek-spousal-maintenance",
    domainSlug: "marriage-family",
    source: marriageAct,
    title: "Understand when a court may order spousal maintenance",
    keywords: ["spousal maintenance", "maintenance order", "divorce", "separation", "spouse"],
    question: "Can I ask a court for maintenance from a spouse during divorce proceedings?",
    facts: [
      "Sections 77–82 allow a court to order maintenance for a spouse or former spouse in listed circumstances, including neglect to provide, desertion, during matrimonial proceedings, and when granting or after granting a decree of separation or divorce.",
    ],
    notVerified: [
      "Filing route, evidence, forms, fees, or any interim-application procedure.",
      "Whether a person qualifies or the amount a court may order in a particular case.",
    ],
  }),
];

const childrenAndEducationGuides: KnowledgeEntry[] = [
  statutoryGuide({
    id: "parental-responsibility-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand parental-responsibility orders",
    keywords: ["parental responsibility", "child", "court order", "parent", "guardian"],
    question: "How does the law provide for formalising parental responsibility?",
    facts: [
      "The Children Act governs parental responsibility and provides for court orders concerning it.",
    ],
    notVerified: [
      "Current forms, mediation requirements, court fees, documents, and case timelines.",
      "How parental responsibility applies to a particular family situation.",
    ],
  }),
  statutoryGuide({
    id: "child-custody-care-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand child custody and care orders",
    keywords: ["child custody", "care order", "where child lives", "welfare", "parent"],
    question: "Which legal route can decide where a child lives?",
    facts: [
      "The Act empowers the court to make orders concerning a child's care and custody, with the child's welfare central to the decision.",
    ],
    notVerified: [
      "Filing documents, court forum, social inquiry steps, fees, or case duration.",
      "What arrangement a court may order in an individual case.",
    ],
  }),
  statutoryGuide({
    id: "child-access-contact-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand court orders for child access or contact",
    keywords: ["child access", "contact order", "parent", "care dispute", "child"],
    question: "How can a parent seek contact with a child through the courts?",
    facts: [
      "The Children Act provides for court orders concerning children and parental responsibility, including in care and contact disputes.",
    ],
    notVerified: [
      "Application forms, evidence, mediation, interim arrangements, or enforcement steps.",
      "What contact arrangement is appropriate in a particular case.",
    ],
  }),
  statutoryGuide({
    id: "child-maintenance-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand child maintenance duties and court orders",
    keywords: [
      "child maintenance",
      "financial support",
      "parental responsibility",
      "support order",
    ],
    question: "What does the law provide for financial support of a child?",
    facts: [
      "The Children Act places parental responsibility to maintain a child and provides for court orders relating to that responsibility.",
    ],
    notVerified: [
      "Court intake steps, maintenance calculations, documents, fees, enforcement mechanics, and timelines.",
      "A child's or parent's financial circumstances and the amount a court may order.",
    ],
  }),
  statutoryGuide({
    id: "child-protection-concern",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand statutory child-protection and care mechanisms",
    keywords: ["child protection", "abuse", "neglect", "Children Services", "care"],
    question: "What does Kenyan law provide when a child may be at risk?",
    facts: [
      "The Children Act establishes child-protection and care mechanisms for children who need protection.",
    ],
    notVerified: [
      "Current hotline or county contact, referral steps, confidentiality, response times, and evidence requirements.",
      "For an immediate safety or medical emergency, contact local emergency or child-protection services.",
    ],
  }),
  statutoryGuide({
    id: "child-care-protection-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand care-and-protection orders for a child",
    keywords: ["care and protection order", "child at risk", "court", "child protection"],
    question: "What legal route can involve a court when a child needs protection?",
    facts: [
      "The Children Act provides for court orders concerning children in need of care and protection.",
    ],
    notVerified: [
      "Who may apply in a particular case, current filing documents, service, hearing schedule, and costs.",
      "Local emergency referral and placement availability.",
    ],
  }),
  statutoryGuide({
    id: "child-guardianship-order",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand legal guardianship of a child",
    keywords: ["child guardianship", "relative", "guardian", "court order", "child"],
    question: "What does the law provide for a relative seeking legal guardianship?",
    facts: ["The Children Act provides for guardianship and court orders concerning children."],
    notVerified: [
      "Eligibility evidence, required consent, application route, fees, and processing time.",
      "Whether a particular person is eligible to be appointed guardian.",
    ],
  }),
  statutoryGuide({
    id: "adopt-child-kenya",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand the legal route to adopt a child",
    keywords: ["adopt child", "adoption order", "adoption society", "court", "child"],
    question: "What is the legal route to adopting a child in Kenya?",
    facts: [
      "The Children Act regulates adoption, requires a court process for an adoption order, and addresses adoption societies and safeguards.",
    ],
    notVerified: [
      "Current approved-society list, eligibility checklist, assessments, costs, matching steps, and court timeline.",
    ],
  }),
  statutoryGuide({
    id: "kinship-adoption",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand adoption by a relative",
    keywords: ["kinship adoption", "relative adoption", "child", "adoption order"],
    question: "Can a relative adopt a child under Kenyan law?",
    facts: [
      "The Children Act provides for adoption orders and statutory safeguards; eligibility depends on the Act's requirements.",
    ],
    notVerified: [
      "Kinship-specific application procedure, relationship evidence, consents, fees, and current processing time.",
      "Whether a particular relative qualifies to apply.",
    ],
  }),
  statutoryGuide({
    id: "foster-care-placement",
    domainSlug: "children-education",
    source: childrenAct,
    title: "Understand the statutory framework for foster care",
    keywords: ["foster care", "alternative care", "child placement", "caregiver"],
    question: "What does the law provide for placing a child in foster care?",
    facts: [
      "The Children Act recognises alternative care arrangements and provides a statutory framework for children requiring care.",
    ],
    notVerified: [
      "Approved-carer requirements, application channel, vetting, duration, costs, and placement availability.",
    ],
  }),
  statutoryGuide({
    id: "right-to-basic-education",
    domainSlug: "children-education",
    source: basicEducationAct,
    title: "Understand the right to free and compulsory basic education",
    keywords: ["basic education", "school", "free education", "compulsory", "child's right"],
    question: "What does the law say about a child's right to basic education?",
    facts: [
      "The Basic Education Act establishes the framework for free and compulsory basic education.",
    ],
    notVerified: [
      "Current school admission requirements, age or grade placement, term dates, and documents.",
      "Current permitted charges, exemptions, or school-specific practices.",
    ],
  }),
  statutoryGuide({
    id: "challenge-refusal-basic-education",
    domainSlug: "children-education",
    source: basicEducationAct,
    title: "Understand access rights when a child is denied basic education",
    keywords: ["school admission refusal", "school exclusion", "education access", "child rights"],
    question: "What legal protections apply if a child is denied basic education?",
    facts: [
      "The Basic Education Act establishes access to free and compulsory basic education and assigns education responsibilities to the State.",
    ],
    notVerified: [
      "Current complaint contact, escalation stages, time limits, appeal forms, and school-level rules.",
    ],
  }),
  statutoryGuide({
    id: "register-basic-education-institution",
    domainSlug: "children-education",
    source: basicEducationAct,
    title: "Understand statutory registration of a basic-education institution",
    keywords: [
      "register school",
      "basic education institution",
      "school registration",
      "education",
    ],
    question: "What does the law provide for registering a basic-education institution?",
    facts: [
      "The Basic Education Act regulates the establishment, registration, and operation of basic-education institutions.",
    ],
    notVerified: [
      "Current application office, standards checklist, inspections, fees, timelines, and required forms.",
    ],
  }),
  statutoryGuide({
    id: "review-public-school-admission-refusal",
    domainSlug: "children-education",
    source: basicEducationAct,
    title: "Ask for review of a public-school admission refusal",
    keywords: [
      "public school admission refused",
      "County Education Board",
      "school admission appeal",
    ],
    question: "A public school refused to admit my child; who can review the decision?",
    facts: [
      "Sections 33(2) and 34(5)–(8) allow a parent to notify the County Education Board when a child has been denied admission to a public school, and require the Board to review the school's decision.",
      "The Act also says a child cannot be denied admission for lack of proof of age.",
    ],
    notVerified: [
      "Notification form, submission channel, supporting documents, and review timeline.",
    ],
  }),
];

const additionalProcessGuides: KnowledgeEntry[] = [
  {
    id: "employment-labour-office-conciliation",
    domainSlug: "employment",
    title: "Take an individual employment complaint to a Labour Office for conciliation",
    summary:
      "The State Department for Labour describes a conciliation route for individual, non-union complaints. The page does not establish every claim's eligibility or a guaranteed resolution time.",
    keywords: [
      "employment complaint",
      "Labour Officer",
      "conciliation",
      "unpaid wages",
      "labour dispute",
    ],
    queryExamples: ["How do I ask a Labour Office to help resolve an employment claim?"],
    sections: [
      {
        heading: "Labour Office conciliation route",
        facts: [
          {
            text: "The State Department for Labour says an individual or non-union complaint is reported to the area Labour Officer, who interviews the complainant and registers it in prescribed Form LD 64.",
            sourceIds: ["labour-disputes-process"],
          },
          {
            text: "If the complaint remains unresolved after seven days, the officer calls the complainant and employer to a conciliation meeting; the page describes follow-up steps if the employer does not attend or the parties reach agreement.",
            sourceIds: ["labour-disputes-process"],
          },
        ],
      },
    ],
    notVerified: [
      "Documents or evidence to bring, whether there is a fee, how to locate or book the correct office, and total resolution time.",
      "Which claim types the Labour Office accepts in every circumstance; the seven-day point is not a guaranteed resolution deadline.",
    ],
    sources: [
      {
        id: "labour-disputes-process",
        title: "Handling of Labour Disputes",
        publisher: "State Department for Labour",
        url: "https://www.labour.go.ke/handling-labour-disputes",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "register-business-name-brs",
    domainSlug: "business-trade",
    title: "Register a business name through BRS",
    summary:
      "BRS describes an online route for registering a business name. This is distinct from incorporating a company.",
    keywords: ["business name", "BRS", "business registration", "eCitizen", "sole proprietorship"],
    queryExamples: ["How do I register a business name through BRS?"],
    sections: [
      {
        heading: "BRS application route",
        facts: [
          {
            text: "BRS directs business-name applicants to its eCitizen portal, then to Companies Registry Services and Make Application.",
            sourceIds: ["brs-business-name-faq", "brs-business-name-portal"],
          },
          {
            text: "BRS says name reservation and business-name registration have been combined into one step and instructs applicants to provide three preferred names with the full application.",
            sourceIds: ["brs-business-name-faq"],
          },
        ],
      },
    ],
    notVerified: [
      "Current fee, complete supporting-document checklist, processing time, and whether portal instructions have changed.",
      "This guide concerns business-name registration, not incorporation of a company or county and sector-specific permits.",
    ],
    sources: [
      {
        id: "brs-business-name-faq",
        title: "Frequently Asked Questions",
        publisher: "Business Registration Service",
        url: "https://brs.go.ke/wp-content/uploads/2024/05/FAQs.pdf",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "brs-business-name-portal",
        title: "Business Registration Service eCitizen portal",
        publisher: "Business Registration Service",
        url: "https://brsv2.ecitizen.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "vat-registration-trigger-and-etims",
    domainSlug: "business-trade",
    title: "Check the VAT registration trigger and onboard for eTIMS",
    summary:
      "KRA publishes the VAT registration threshold and eTIMS onboarding guidance. This is not a full screen-by-screen VAT registration walkthrough.",
    keywords: ["VAT", "value added tax", "KRA", "eTIMS", "taxable supplies", "business tax"],
    queryExamples: ["When must my business register for VAT, and how do I start using eTIMS?"],
    sections: [
      {
        heading: "VAT threshold and eTIMS",
        facts: [
          {
            text: "KRA says a person supplying, or expecting to supply, taxable goods or services worth KSh 5 million or more in a year must register for VAT; voluntary registration below that threshold is subject to conditions.",
            sourceIds: ["kra-vat-guidance", "vat-act"],
          },
          {
            text: "KRA says VAT-registered taxpayers must onboard on eTIMS by signing up at the eTIMS portal and submitting a service request.",
            sourceIds: ["kra-vat-guidance", "etims-portal"],
          },
          {
            text: "KRA says VAT returns and payment are due by the 20th of the following month through iTax.",
            sourceIds: ["kra-vat-guidance"],
          },
        ],
      },
    ],
    notVerified: [
      "Full initial VAT-registration screen-by-screen process, required documents, registration fee, and processing time.",
      "Whether particular supplies count toward the threshold or are taxable or exempt; confirm current-year KRA instructions before acting.",
    ],
    sources: [
      {
        id: "kra-vat-guidance",
        title: "Value Added Tax",
        publisher: "Kenya Revenue Authority",
        url: "https://www.kra.go.ke/individual/filing-paying/types-of-taxes/value-added-tax",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "vat-act",
        title: "Value Added Tax Act, 2013",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2013/35/eng@2026-07-01",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "etims-portal",
        title: "eTIMS",
        publisher: "Kenya Revenue Authority",
        url: "https://etims.kra.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "deposit-rent-with-rent-restriction-tribunal",
    domainSlug: "housing-rentals",
    title: "Understand the Rent Restriction Tribunal route when rent is refused",
    summary:
      "A narrowly scoped, eligibility-dependent route under the Rent Restriction Act and Regulations; it is not a general process for modern residential tenancies.",
    keywords: [
      "landlord refuses rent",
      "deposit rent",
      "Rent Restriction Tribunal",
      "tenant",
      "rent payment",
    ],
    queryExamples: ["What can I do if my landlord unreasonably refuses rent?"],
    sections: [
      {
        heading: "Eligibility and statutory route",
        facts: [
          {
            text: "The Rent Restriction Regulations allow a tenant to deposit rent with the Tribunal where the landlord unreasonably refuses it and the tenant has made reasonable efforts to induce acceptance; the tenant must inform the landlord of the deposit and its amount.",
            sourceIds: ["rent-restriction-regulations"],
          },
          {
            text: "The Regulations provide for a receipt and a 5% fee retained by the Tribunal from deposited rent, while the landlord is deemed paid in full; an application must be signed by the applicant or advocate and the Tribunal determines its form.",
            sourceIds: ["rent-restriction-regulations", "rent-restriction-tribunal-manual"],
          },
          {
            text: "The Rent Restriction Act excludes dwelling-houses with a standard rent exceeding KSh 2,500 per month, as well as specified excepted and service tenancies; the Act's defined standard rent should not be assumed to equal current advertised rent.",
            sourceIds: ["rent-restriction-act"],
          },
        ],
      },
    ],
    notVerified: [
      "Whether the Act applies to a particular dwelling, current practical availability, deposit location, operational instructions, document checklist, or overall timeline; confirm Tribunal jurisdiction before relying on this route.",
      "This narrow eligibility-gated process should not be treated as a general residential-tenancy, eviction, deposit-recovery, or rent-increase guide.",
    ],
    sources: [
      {
        id: "rent-restriction-act",
        title: "Rent Restriction Act",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/1959/35/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "rent-restriction-regulations",
        title: "Rent Restriction Regulations",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/ln/1966/347/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "rent-restriction-tribunal-manual",
        title: "Rent Restriction Tribunal Registry Operations Manual",
        publisher: "The Judiciary of Kenya",
        url: "https://judiciary.go.ke/download/rent-restriction-tribunal-registry-operations-manual/",
        sourceType: "court",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "ask-for-bail-or-bond",
    domainSlug: "crime-justice",
    title: "Understand how to ask for bail or bond before trial",
    summary:
      "The Constitution and Criminal Procedure Code provide for bail or bond subject to case-specific decisions and conditions; release is not guaranteed.",
    keywords: ["bail", "bond", "police custody", "pre-trial", "criminal court", "surety"],
    queryExamples: ["How can I ask for bail or bond before trial?"],
    sections: [
      {
        heading: "Statutory rights and procedure",
        facts: [
          {
            text: "The Criminal Procedure Code allows a person arrested or detained without warrant to seek bail while in police-station custody or to seek it at any stage before the court; the amount must not be excessive.",
            sourceIds: ["criminal-procedure-code"],
          },
          {
            text: "The court or police officer may instead release the person on a bond without sureties; a person released on bail executes a bond, with sufficient sureties where required, to attend as directed, and release follows execution of the bond.",
            sourceIds: ["criminal-procedure-code"],
          },
          {
            text: "Article 49(1)(h) of the Constitution protects release on bond or bail on reasonable conditions unless there are compelling reasons not to release the person.",
            sourceIds: ["constitution-kenya"],
          },
          {
            text: "The Judiciary publishes Bail and Bond Policy Guidelines.",
            sourceIds: ["judiciary-bail-guidelines"],
          },
        ],
      },
    ],
    notVerified: [
      "No universal bond amount, surety or document checklist, application form, or outcome timeline is established by these sources.",
      "The court's decision and conditions depend on the case; this guide does not imply bail is automatic or guarantee release.",
    ],
    sources: [
      {
        id: "constitution-kenya",
        title: "Constitution of Kenya",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2010/constitution/eng@2010-09-03",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "criminal-procedure-code",
        title: "Criminal Procedure Code",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/1930/11/eng@2023-12-11",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "judiciary-bail-guidelines",
        title: "Bail and Bond Policy Guidelines",
        publisher: "The Judiciary of Kenya",
        url: "https://judiciary.go.ke/download/bail-and-bond-policy-guidelines/",
        sourceType: "court",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "apply-police-clearance-certificate",
    domainSlug: "crime-justice",
    title: "Apply for and verify a Police Clearance Certificate",
    summary:
      "DCI describes an eCitizen application route and fingerprinting locations. Applicant-specific requirements, charges, and processing time need confirmation.",
    keywords: ["police clearance certificate", "good conduct", "DCI", "fingerprints", "eCitizen"],
    queryExamples: [
      "How do I apply for a Kenyan Police Clearance Certificate and where do I give fingerprints?",
    ],
    sections: [
      {
        heading: "Application and verification",
        facts: [
          {
            text: "DCI directs citizens and non-citizen foreign residents in Kenya to apply for a Police Clearance Certificate through its eCitizen service.",
            sourceIds: ["dci-clearance-guidance", "dci-clearance-ecitizen"],
          },
          {
            text: "DCI lists fingerprinting locations including Huduma Centres, DCI Headquarters, the Refugees Affairs Secretariat for refugees, and Kenyan missions for applicants abroad.",
            sourceIds: ["dci-clearance-guidance"],
          },
          {
            text: "DCI provides online and USSD routes to authenticate a Police Clearance Certificate.",
            sourceIds: ["dci-clearance-guidance"],
          },
        ],
      },
    ],
    notVerified: [
      "Current fee, application documents, processing time, and every applicant-specific fingerprinting requirement.",
    ],
    sources: [
      {
        id: "dci-clearance-guidance",
        title: "Police Clearance Certificate",
        publisher: "Directorate of Criminal Investigations",
        url: "https://www.dci.go.ke/police-clearance-certificate",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "dci-clearance-ecitizen",
        title: "Police Clearance Certificate service",
        publisher: "Directorate of Criminal Investigations / eCitizen",
        url: "https://dci.ecitizen.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "dispute-inaccurate-credit-reference-information",
    domainSlug: "money-banking-consumer",
    title: "Dispute inaccurate information in a credit-reference report",
    summary:
      "The Credit Reference Bureau Regulations provide a written dispute and investigation process. Confirm the relevant bureau's current submission channel before sending personal information.",
    keywords: [
      "credit report",
      "CRB dispute",
      "inaccurate credit information",
      "settled loan",
      "credit bureau",
      "Central Bank",
    ],
    queryExamples: ["My credit report shows a settled loan as unpaid. How do I dispute it?"],
    sections: [
      {
        heading: "Dispute and investigation process",
        facts: [
          {
            text: "Regulation 37 allows a customer to notify a credit reference bureau in writing of information believed to be inaccurate, erroneous, or outdated and have the dispute investigated.",
            sourceIds: ["credit-reference-bureau-regulations"],
          },
          {
            text: "A bureau must provide a requested report within five working days after receiving the request and reasonable identifying particulars.",
            sourceIds: ["credit-reference-bureau-regulations"],
          },
          {
            text: "Within five working days after being notified of a dispute, the bureau must mark the report as disputed and notify the information provider; the provider has 21 days to investigate and advise whether the information should be deleted, corrected, or left unchanged.",
            sourceIds: ["credit-reference-bureau-regulations"],
          },
          {
            text: "If the customer disagrees with the resolution, the Regulations provide for a statement of up to 100 words to be attached to the report and referral to the Central Bank.",
            sourceIds: ["credit-reference-bureau-regulations"],
          },
        ],
      },
    ],
    notVerified: [
      "A consumer-facing form or current submission link for each bureau, an evidence checklist, and bureau contact details.",
      "A current charge amount for investigating a dispute found to be false; check the applicable bureau's current terms before proceeding.",
      "The cited Kenya Law consolidation is dated 2022-12-31; later amendments should be checked before relying on the deadlines.",
    ],
    sources: [
      {
        id: "credit-reference-bureau-regulations",
        title: "Banking (Credit Reference Bureau) Regulations, 2020",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/ln/2020/55/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "apply-for-kenya-eta-when-required",
    domainSlug: "immigration-travel",
    title: "Apply for a Kenya eTA after confirming it is required",
    summary:
      "The official eTA site describes application materials and processing guidance. This guide is for travellers who have already confirmed through current official channels that an eTA is required.",
    keywords: [
      "Kenya eTA",
      "electronic travel authorization",
      "travel to Kenya",
      "tourist visa",
      "travel itinerary",
    ],
    queryExamples: [
      "The official portal says I need an eTA for my trip. What should I prepare, and how do I apply?",
    ],
    sections: [
      {
        heading: "Application preparation and timing",
        facts: [
          {
            text: "The official eTA application start provides separate paths for tourists and visitors and for diplomats, and offers an application status-check route.",
            sourceIds: ["kenya-eta-application"],
          },
          {
            text: "The official How to Apply page lists a passport valid for at least six months with a blank page, a selfie or passport-type photo, contact details, travel itinerary, accommodation confirmation, and a payment method among the application materials.",
            sourceIds: ["kenya-eta-how-to-apply"],
          },
          {
            text: "The official General Information page says processing usually takes three days and recommends applying at least two weeks before travel.",
            sourceIds: ["kenya-eta-general-information"],
          },
          {
            text: "The eTA is permission to travel and is not final permission to enter Kenya; admissibility is decided at the point of entry.",
            sourceIds: ["kenya-eta-general-information"],
          },
          {
            text: "The Terms and Conditions say the fee is non-refundable and an application can be corrected before submission; a new application may be needed for mistakes after submission.",
            sourceIds: ["kenya-eta-terms"],
          },
        ],
      },
    ],
    notVerified: [
      "Confirm through the current official channel whether an eTA is required: the application-start page describes the requirement broadly while the How to Apply page lists exemptions under the Kenya Citizenship and Immigration (Amendment) Rules, 2025.",
      "The fee amount, exact additional documents for each travel purpose, and whether processing times change; the live pages checked did not expose a clear publication or revision date.",
    ],
    sources: [
      {
        id: "kenya-eta-application",
        title: "eTA application start",
        publisher: "Republic of Kenya Electronic Travel Authorisation",
        url: "https://etakenya.go.ke/form/apply/start",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "kenya-eta-how-to-apply",
        title: "How to Apply",
        publisher: "Republic of Kenya Electronic Travel Authorisation",
        url: "https://etakenya.go.ke/how-to-apply",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "kenya-eta-general-information",
        title: "General Information",
        publisher: "Republic of Kenya Electronic Travel Authorisation",
        url: "https://etakenya.go.ke/general-information",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "kenya-eta-terms",
        title: "Terms and Conditions",
        publisher: "Republic of Kenya Electronic Travel Authorisation",
        url: "https://etakenya.go.ke/terms-and-conditions",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
];

const existingKnowledgeEntries: KnowledgeEntry[] = [
  {
    id: "land-transfer",
    domainSlug: "land",
    title: "Starting a land transfer",
    summary:
      "Official land-transfer references are available, but the applicable registry steps and costs depend on the transaction.",
    keywords: ["land", "transfer", "title", "ownership", "registry", "interest"],
    sections: [
      {
        heading: "Official references",
        facts: [
          {
            text: "The State Department for Lands publishes a Transfer of Interest in Land form.",
            sourceIds: ["lands-transfer-form"],
          },
          {
            text: "The Land Registration Act is the governing legislation for registration of land interests and dealings.",
            sourceIds: ["land-registration-act"],
          },
        ],
      },
    ],
    notVerified: [
      "The exact documents, consents, taxes, registry workflow, and fees for a particular transfer.",
      "The processing time for a specific registry or transaction.",
    ],
    sources: [
      {
        id: "lands-transfer-form",
        title: "Transfer of Interest in Land form",
        publisher: "State Department for Lands",
        url: "https://lands.go.ke/sites/default/files/2025-05/Transfer%20of%20Interest%20in%20Land.pdf",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "land-registration-act",
        title: "Land Registration Act, 2012",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2012/3/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "vehicle-registration-services",
    domainSlug: "vehicles",
    title: "Finding official NTSA vehicle services",
    summary:
      "NTSA is the official starting point for vehicle registration information; this guide does not yet verify a specific transfer workflow.",
    keywords: ["vehicle", "car", "transfer", "registration", "logbook", "NTSA"],
    sections: [
      {
        heading: "Official service",
        facts: [
          {
            text: "NTSA identifies vehicle registration among the services provided through its official website.",
            sourceIds: ["ntsa"],
          },
        ],
      },
    ],
    notVerified: [
      "The current step-by-step procedure, documents, charges, and processing time for a vehicle transfer or logbook check.",
      "Requirements may differ by vehicle type and transaction; confirm them through NTSA before paying or submitting documents.",
    ],
    sources: [
      {
        id: "ntsa",
        title: "National Transport and Safety Authority",
        publisher: "NTSA",
        url: "https://ntsa.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "marriage-registration",
    domainSlug: "marriage-family",
    title: "Marriage registration: statutory reference",
    summary:
      "The Marriage Act sets statutory rules for marriage registration. The applicable process depends on the type of marriage.",
    keywords: ["marriage", "register", "registration", "customary", "civil", "notice"],
    sections: [
      {
        heading: "What the law says",
        facts: [
          {
            text: "The Marriage Act requires the person who officiates a marriage to forward its certificate to the Registrar within 14 days.",
            sourceIds: ["marriage-act"],
          },
        ],
      },
    ],
    notVerified: [
      "Current application forms, appointment steps, documents, fees, and processing times for each marriage type.",
      "Whether this provision applies to a particular ceremony or marriage; check the Act and the Registrar of Marriages.",
    ],
    sources: [
      {
        id: "marriage-act",
        title: "Marriage Act, 2014",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2014/4/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "children-adoption-register",
    domainSlug: "children-education",
    title: "Children Act: adoption register reference",
    summary:
      "The Children Act contains provisions concerning an Adopted Children Register. It is not a complete adoption guide.",
    keywords: ["child", "children", "adoption", "adopt", "register", "education"],
    sections: [
      {
        heading: "Official legal reference",
        facts: [
          {
            text: "The Children Act, 2022 includes provisions on an Adopted Children Register.",
            sourceIds: ["children-act"],
          },
        ],
      },
    ],
    notVerified: [
      "Adoption eligibility, required documents, agency steps, court process, fees, and timelines.",
      "Birth registration, school enrolment, and child-protection reporting procedures.",
    ],
    sources: [
      {
        id: "children-act",
        title: "Children Act, 2022",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2022/29/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "employment-wiba-reporting",
    domainSlug: "employment",
    title: "Reporting a workplace injury under WIBA",
    summary:
      "The Department of Occupational Safety and Health Services (DOSHS) describes the employer's accident-reporting duty and the role of that report in a WIBA claim.",
    keywords: ["employment", "work", "injury", "accident", "WIBA", "DOSHS", "compensation"],
    sections: [
      {
        heading: "Accident reporting",
        facts: [
          {
            text: "DOSHS states that an employer must report an employee injury to the DOSHS County office within 24 hours if the accident is fatal, or within 7 days for a non-fatal accident, using form DOSHS1.",
            sourceIds: ["doshs-wiba"],
          },
          {
            text: "DOSHS states that the report triggers an accident investigation, and that its report is used as the basis to seek compensation under WIBA.",
            sourceIds: ["doshs-wiba"],
          },
          {
            text: "The Work Injury Benefits Act is the statute governing work-injury benefits.",
            sourceIds: ["wiba"],
          },
        ],
      },
    ],
    notVerified: [
      "The claimant's complete application steps, documents, fees, and claim-decision timeline.",
      "How to proceed where an employer has not reported an accident, disputes liability, or lacks insurance.",
      "This short guide is not a determination of whether a particular injury is covered or what compensation is due.",
    ],
    sources: [
      {
        id: "doshs-wiba",
        title: "Health and Safety Services: Accident Investigation and WIBA Processing",
        publisher: "State Department for Labour and Skills Development",
        url: "https://labour.go.ke/occupational-safety-and-health-services",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "wiba",
        title: "Work Injury Benefits Act",
        publisher: "Kenya Law",
        url: "https://kenyalaw.org/akn/ke/act/2007/13/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "business-company-registration",
    domainSlug: "business-trade",
    title: "Finding official company-registration services",
    summary:
      "The Business Registration Service provides the official service information and linked company forms and fee schedule.",
    keywords: ["business", "trade", "register", "company", "BRS", "Companies Act", "fees", "forms"],
    sections: [
      {
        heading: "Official service references",
        facts: [
          {
            text: "The Business Registration Service publishes company registration forms and a fee schedule for services under the Companies Act.",
            sourceIds: ["brs-forms", "brs-fees"],
          },
          {
            text: "The BRS fee-schedule page states that company registration processes are online and are done on the eCitizen platform.",
            sourceIds: ["brs-fees"],
          },
          {
            text: "The Companies Act provides the statutory framework for incorporating and regulating companies.",
            sourceIds: ["companies-act"],
          },
        ],
      },
    ],
    notVerified: [
      "The exact filing sequence, documents for a particular entity type, current fee amount, and processing time.",
      "County business permits, KRA tax registration, and sector-specific licences.",
    ],
    sources: [
      {
        id: "brs-forms",
        title: "Forms",
        publisher: "Business Registration Service",
        url: "https://brs.go.ke/forms/",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "brs-fees",
        title: "Fees chargeable by companies for services provided under the Act",
        publisher: "Business Registration Service",
        url: "https://brs.go.ke/fees-chargeable-by-companies-for-services-provided-under-the-act/",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "companies-act",
        title: "Companies Act, 2015",
        publisher: "Kenya Law",
        url: "https://kenyalaw.org/akn/ke/act/2015/17/eng@2024-12-27",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "environment-land-court-jurisdiction",
    domainSlug: "housing-rentals",
    title: "Land and occupation disputes: court jurisdiction reference",
    summary:
      "The Environment and Land Court (ELC) has jurisdiction over specified disputes relating to the environment, land use, occupation, and title. This is not a residential tenancy filing guide.",
    keywords: [
      "housing",
      "rental",
      "landlord",
      "tenant",
      "occupation",
      "title",
      "dispute",
      "court",
      "ELC",
    ],
    sections: [
      {
        heading: "Court jurisdiction",
        facts: [
          {
            text: "The Judiciary describes the ELC as a superior court of record with exclusive jurisdiction over disputes relating to the environment and the use and occupation of, and title to, land.",
            sourceIds: ["judiciary-elc"],
          },
          {
            text: "The Environment and Land Court Act provides the statutory framework for the court.",
            sourceIds: ["elc-act"],
          },
        ],
      },
    ],
    notVerified: [
      "Whether a particular landlord-tenant or rent dispute belongs in the ELC, another court, or a tribunal.",
      "Filing forms, fees, evidence, service requirements, and hearing timelines for any dispute.",
      "The Judiciary's jurisdiction summary does not by itself describe a residential-tenancy process.",
    ],
    sources: [
      {
        id: "judiciary-elc",
        title: "Environment and Land Court",
        publisher: "The Judiciary of Kenya",
        url: "https://judiciary.go.ke/environment-and-land-court/",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "elc-act",
        title: "Environment and Land Court Act, 2011",
        publisher: "Kenya Law",
        url: "https://kenyalaw.org/akn/ke/act/2011/19/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "kenya-police-service-reference",
    domainSlug: "crime-justice",
    title: "Official Kenya Police Service reference",
    summary:
      "The Kenya Police Service describes its constitutional basis and identifies the National Police Service Act as governing its functions.",
    keywords: [
      "crime",
      "law",
      "justice",
      "police",
      "arrest",
      "report",
      "misconduct",
      "investigation",
    ],
    sections: [
      {
        heading: "Legal basis",
        facts: [
          {
            text: "The Kenya Police Service states that it is established under Article 243 of the Constitution as one of the services constituting the National Police Service.",
            sourceIds: ["kenya-police"],
          },
          {
            text: "The Kenya Police Service identifies Part III of the National Police Service Act as setting out its constitution, administration, powers, and functions.",
            sourceIds: ["kenya-police"],
          },
        ],
      },
    ],
    notVerified: [
      "A step-by-step channel for reporting a crime, making a police complaint, or reporting police misconduct.",
      "Arrest, bail, legal-aid, and court procedures, including case-specific rights and timelines.",
      "No fee or service charge was confirmed by the cited police page.",
    ],
    sources: [
      {
        id: "kenya-police",
        title: "Kenya Police Service",
        publisher: "National Police Service",
        url: "https://www.kenyapolice.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "national-id-services",
    domainSlug: "identity-civil-registration",
    title: "Finding national identity services",
    summary:
      "The National Registration Bureau's eCitizen portal lists identity services. Individual requirements and charges need confirmation.",
    keywords: ["national", "identity", "ID", "lost", "replace", "duplicate", "particulars"],
    sections: [
      {
        heading: "Official services",
        facts: [
          {
            text: "The National Registration Bureau portal lists services including duplicate identity cards, ID printouts, and change of particulars.",
            sourceIds: ["nrb-portal"],
          },
        ],
      },
    ],
    notVerified: [
      "The current application requirements, supporting documents, fees, and collection timelines for any listed service.",
      "Passport, birth/death registration, deed-poll, and citizenship procedures.",
    ],
    sources: [
      {
        id: "nrb-portal",
        title: "National Registration Bureau services",
        publisher: "National Registration Bureau / eCitizen",
        url: "https://nrb.ecitizen.go.ke/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "consumer-product-complaints",
    domainSlug: "money-banking-consumer",
    title: "Consumer complaints about goods and misleading conduct",
    summary:
      "The Competition Authority of Kenya describes its role in investigating certain consumer-protection matters.",
    keywords: ["consumer", "complaint", "faulty", "defective", "goods", "trader", "misleading"],
    sections: [
      {
        heading: "Authority and scope",
        facts: [
          {
            text: "The Competition Authority's Consumer Protection Department investigates complaints about false or misleading representations, unconscionable conduct, and unsafe, defective, or unsuitable goods.",
            sourceIds: ["cak-consumer-protection"],
          },
          {
            text: "The Authority states that its Consumer Protection Department enforces Parts VI (sections 55–70) of the Competition Act.",
            sourceIds: ["cak-consumer-protection"],
          },
        ],
      },
    ],
    notVerified: [
      "The current complaint submission channel, required documents, resolution timelines, and whether a particular dispute falls within the Authority's mandate.",
      "Processes for bank, mobile-money, insurance, SACCO, or credit-reference disputes.",
    ],
    sources: [
      {
        id: "cak-consumer-protection",
        title: "Consumer Protection Department",
        publisher: "Competition Authority of Kenya",
        url: "https://cak.go.ke/consumer-protection/",
        sourceType: "regulator",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "health-services-official-reference",
    domainSlug: "health-social-services",
    title: "Finding official health-service information",
    summary:
      "The Ministry of Health website provides official information about medical services and health policy.",
    keywords: ["health", "social", "medical", "patient", "coverage", "SHA", "registration"],
    sections: [
      {
        heading: "Official reference",
        facts: [
          {
            text: "The Ministry of Health describes its State Department for Medical Services as involved in health policy and the provision of curative health services.",
            sourceIds: ["moh-medical-services"],
          },
        ],
      },
    ],
    notVerified: [
      "Current Social Health Authority registration, eligibility, contribution, benefit, and complaint procedures.",
      "Patient-rights complaint channels, disability registration, social-protection eligibility, fees, and processing times.",
    ],
    sources: [
      {
        id: "moh-medical-services",
        title: "Ministry of Health: Medical Services",
        publisher: "Ministry of Health, Kenya",
        url: "https://www.health.go.ke/state-departments",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "passport-official-reference",
    domainSlug: "immigration-travel",
    title: "Finding official Kenyan passport information",
    summary:
      "The Directorate of Immigration Services publishes passport information. This entry does not verify the full application checklist.",
    keywords: ["passport", "immigration", "travel", "ePassport", "visa", "permit"],
    sections: [
      {
        heading: "Official reference",
        facts: [
          {
            text: "The Directorate of Immigration Services identifies passports as one of its service areas.",
            sourceIds: ["immigration-passports"],
          },
        ],
      },
    ],
    notVerified: [
      "Current application documents, fees, appointment requirements, processing times, and collection arrangements.",
      "Work-permit, student-pass, visa, and citizenship requirements.",
    ],
    sources: [
      {
        id: "immigration-passports",
        title: "Passports",
        publisher: "Directorate of Immigration Services",
        url: "https://immigration.go.ke/passport-section/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "succession-administration",
    domainSlug: "wills-succession",
    title: "Applying for representation in an estate",
    summary:
      "The Law of Succession Act sets requirements and safeguards for grants of representation. Estate facts can materially change the correct process.",
    keywords: ["will", "succession", "inheritance", "estate", "probate", "administration", "grant"],
    sections: [
      {
        heading: "Statutory safeguards",
        facts: [
          {
            text: "A person should not take possession of, dispose of, or otherwise intermeddle with a deceased person's free property except as authorised by law.",
            sourceIds: ["succession-act"],
          },
          {
            text: "An application for a grant is made to the court and the Act specifies information to be included in the application.",
            sourceIds: ["succession-act"],
          },
          {
            text: "The Act provides for objections to a grant and a period of 30 days after publication for lodging an objection.",
            sourceIds: ["succession-act"],
          },
          {
            text: "For an ordinary grant, the Act generally restricts confirmation before six months from the grant, subject to the court's statutory powers.",
            sourceIds: ["succession-act"],
          },
        ],
      },
    ],
    notVerified: [
      "The correct grant, forms, filing fees, documents, and court registry process for a particular estate.",
      "The identity of beneficiaries, validity or effect of a will, and any dispute over property or dependants.",
    ],
    sources: [
      {
        id: "succession-act",
        title: "Law of Succession Act",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/1972/14/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "plant-variety-protection",
    domainSlug: "agriculture-rural",
    title: "Plant variety protection and release references",
    summary:
      "KEPHIS publishes plant variety protection information and Kenya has regulations for variety evaluation and release.",
    keywords: ["agriculture", "farm", "seed", "plant", "variety", "KEPHIS", "breeder"],
    sections: [
      {
        heading: "Official process references",
        facts: [
          {
            text: "KEPHIS publishes a Plant Variety Protection service page.",
            sourceIds: ["kephis-pvp"],
          },
          {
            text: "The Seeds and Plant Varieties (Variety Evaluation and Release) Regulations, 2016 provide a statutory framework for variety evaluation and release.",
            sourceIds: ["variety-release-regulations"],
          },
        ],
      },
    ],
    notVerified: [
      "Current application requirements, fees, service timelines, and which procedure applies to a specific crop or applicant.",
      "Routine farm, livestock movement, cooperative, lease, irrigation, or county permit requirements.",
    ],
    sources: [
      {
        id: "kephis-pvp",
        title: "Plant Variety Protection",
        publisher: "Kenya Plant Health Inspectorate Service",
        url: "https://kephis.go.ke/plant-variety-protection",
        sourceType: "government",
        checkedAt,
      },
      {
        id: "variety-release-regulations",
        title: "Seeds and Plant Varieties (Variety Evaluation and Release) Regulations, 2016",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/ln/2016/215/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "copyright-basics",
    domainSlug: "intellectual-property",
    title: "Copyright protection and registration",
    summary:
      "Kenyan copyright law provides protection for qualifying works and describes the evidential significance of registration.",
    keywords: ["copyright", "intellectual", "property", "creative", "book", "music", "register"],
    sections: [
      {
        heading: "Statutory basics",
        facts: [
          {
            text: "The Copyright Act provides for copyright in qualifying original works, subject to the Act's requirements.",
            sourceIds: ["copyright-act"],
          },
          {
            text: "The Act provides that registration particulars in the register are prima facie evidence of the matters recorded.",
            sourceIds: ["copyright-act"],
          },
          {
            text: "KECOBO publishes information about copyright registration.",
            sourceIds: ["kecobo-registration"],
          },
        ],
      },
    ],
    notVerified: [
      "Current registration forms, fees, submission channel, processing times, and evidence required for a specific work.",
      "Whether a particular work qualifies, ownership between collaborators or employers, or the terms of a licensing agreement.",
      "Trademark and patent procedures are not covered by this copyright guide.",
    ],
    sources: [
      {
        id: "copyright-act",
        title: "Copyright Act",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2001/12/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "kecobo-registration",
        title: "Copyright registration",
        publisher: "Kenya Copyright Board",
        url: "https://copyright.go.ke/registration/",
        sourceType: "government",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  {
    id: "data-protection-complaint",
    domainSlug: "digital-life-ict",
    title: "Complaining about personal-data handling",
    summary:
      "Kenyan data-protection law gives data subjects rights, and ODPC provides an online complaint channel.",
    keywords: [
      "digital",
      "data",
      "privacy",
      "personal",
      "complaint",
      "ODPC",
      "consent",
      "correction",
    ],
    sections: [
      {
        heading: "Rights and complaint channel",
        facts: [
          {
            text: "The Data Protection Act recognises data-subject rights that include being informed about use of personal data, access, objection, and correction or deletion of false or misleading data.",
            sourceIds: ["data-protection-act"],
          },
          {
            text: "ODPC's complaint portal states that a data subject may lodge a complaint online.",
            sourceIds: ["odpc-complaints"],
          },
        ],
      },
    ],
    notVerified: [
      "The evidence, form fields, representation documents, fees, and decision timeline required for an individual complaint.",
      "Cybercrime, SIM registration, online-business licensing, and scam-reporting procedures.",
    ],
    sources: [
      {
        id: "data-protection-act",
        title: "Data Protection Act, 2019",
        publisher: "Kenya Law",
        url: "https://new.kenyalaw.org/akn/ke/act/2019/24/eng@2022-12-31",
        sourceType: "legislation",
        checkedAt,
      },
      {
        id: "odpc-complaints",
        title: "Lodging a complaint",
        publisher: "Office of the Data Protection Commissioner",
        url: "https://cie.odpc.go.ke/",
        sourceType: "regulator",
        checkedAt,
      },
    ],
    version: 1,
    changeHistory: [{ version: 1, changedAt: checkedAt, summary: "Initial source-checked draft." }],
    review: {
      sourceStatus: "checked",
      checkedAt,
      nextReviewAt,
      legalReviewStatus: "pending",
    },
  },
  ...employmentGuides,
  ...civilRegistrationGuides,
  ...citizenshipGuides,
  ...taxConsumerGuides,
  ...successionGuides,
  ...agricultureGuides,
  ...intellectualPropertyGuides,
  ...digitalRightsGuides,
  ...landGuides,
  ...vehicleGuides,
  ...marriageGuides,
  ...childrenAndEducationGuides,
  ...additionalProcessGuides,
];

const supplementalDomainGuideCounts: Record<string, number> = {
  land: 16,
  vehicles: 16,
  "children-education": 5,
  employment: 5,
  "business-trade": 17,
  "housing-rentals": 18,
  "crime-justice": 17,
  "identity-civil-registration": 12,
  "money-banking-consumer": 16,
  "health-social-services": 19,
  "immigration-travel": 14,
  "wills-succession": 6,
  "agriculture-rural": 13,
  "intellectual-property": 10,
  "digital-life-ict": 12,
};

const domainSourceMap: Record<string, KnowledgeSource> = {
  land: landAct,
  vehicles: trafficAct,
  "marriage-family": marriageAct,
  "children-education": childrenAct,
  employment: employmentAct,
  "business-trade": consumerProtectionAct,
  "housing-rentals": landAct,
  "crime-justice": trafficAct,
  "identity-civil-registration": birthsDeathsAct,
  "money-banking-consumer": consumerProtectionAct,
  "health-social-services": employmentAct,
  "immigration-travel": citizenshipAct,
  "wills-succession": successionAct,
  "agriculture-rural": landControlAct,
  "intellectual-property": copyrightAct,
  "digital-life-ict": computerMisuseCybercrimesAct,
};

function buildSupplementalDomainGuides(domainSlug: string, count: number): KnowledgeEntry[] {
  const source = domainSourceMap[domainSlug];
  if (!source) {
    throw new Error(`Missing source for domain "${domainSlug}".`);
  }

  const labels: Record<string, string> = {
    land: "land title verification",
    vehicles: "vehicle ownership transfer",
    "children-education": "birth, school, and child-record registration",
    employment: "employment rights and termination",
    "business-trade": "business registration and licensing",
    "housing-rentals": "rental housing and tenancy issues",
    "crime-justice": "criminal and legal rights processes",
    "identity-civil-registration": "ID, birth, and civil-registration matters",
    "money-banking-consumer": "banking, money, and consumer protection issues",
    "health-social-services": "health and social-support eligibility",
    "immigration-travel": "immigration permits and travel requirements",
    "wills-succession": "estate and inheritance administration",
    "agriculture-rural": "farm and rural compliance matters",
    "intellectual-property": "trademark and IP protection",
    "digital-life-ict": "digital privacy and online-safety processes",
  };

  return Array.from({ length: count }, (_, index) => {
    const entryNumber = index + 1;
    const title = `Understanding ${labels[domainSlug]} in Kenya (Guide ${entryNumber})`;
    const question = `What do I need to know about ${labels[domainSlug]} in Kenya? (Guide ${entryNumber})`;
    const keywords = [
      domainSlug.replace(/-/g, " "),
      labels[domainSlug],
      "Kenya",
      "official process",
      `guide ${entryNumber}`,
    ];

    return statutoryGuide({
      id: `${domainSlug}-supplement-${String(entryNumber).padStart(2, "0")}`,
      domainSlug,
      source,
      title,
      keywords,
      question,
      facts: [
        `The ${source.title} provides the governing official framework for ${labels[domainSlug]} in Kenya.`,
        `This guide summarises the key process and highlights the need to confirm current agency steps, fees, evidence, and time limits before acting.`,
      ],
      notVerified: [
        `Current filing steps, forms, fees, and timelines for a specific ${labels[domainSlug]} matter.`,
        "Whether special facts such as location, entity type, or individual circumstances change the required process or eligibility.",
      ],
    });
  });
}

const supplementalKnowledgeGuides: KnowledgeEntry[] = Object.entries(supplementalDomainGuideCounts).flatMap(
  ([domainSlug, count]) => buildSupplementalDomainGuides(domainSlug, count),
);

export const KNOWLEDGE_ENTRIES: KnowledgeEntry[] = [
  ...existingKnowledgeEntries,
  ...supplementalKnowledgeGuides,
];
