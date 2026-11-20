
/* =====================================
   MEDICAL STUDY AI WITH BR
   Main Website Data
===================================== */

const SITE_CONFIG = {
  name: "Medical Study AI with BR",
  shortName: "Medical Study AI",
  version: "1.0",
  language: ["English", "Gujarati"],
  university: "Hemchandracharya North Gujarat University",
  course: "BHMS",
  owner: "BR"
};

/* =====================================
   MAIN MODES
===================================== */

const STUDY_MODES = [
  {
    id: "bhms",
    name: "BHMS Mode",
    description: "BHMS Study Material, Papers, MCQs and Viva",
    icon: "🎓",
    page: "bhms.html"
  },
  {
    id: "allopathy",
    name: "Allopathy Mode",
    description: "Medicine Information and Medical Learning",
    icon: "🩺",
    page: "allopathy.html"
  }
];

/* =====================================
   BHMS YEARS
===================================== */

const BHMS_YEARS = [
  {
    id: "first",
    name: "First BHMS",
    number: 1,
    subjects: [
      "Anatomy",
      "Physiology",
      "Homoeopathic Pharmacy",
      "Homoeopathic Materia Medica",
      "Organon of Medicine"
    ]
  },
  {
    id: "second",
    name: "Second BHMS",
    number: 2,
    subjects: [
      "Pathology",
      "Microbiology",
      "Forensic Medicine",
      "Homoeopathic Materia Medica",
      "Organon of Medicine",
      "Surgery",
      "Practice of Medicine"
    ]
  },
  {
    id: "third",
    name: "Third BHMS",
    number: 3,
    subjects: [
      "Obstetrics and Gynaecology",
      "Community Medicine",
      "Practice of Medicine",
      "Surgery",
      "Homoeopathic Materia Medica",
      "Organon of Medicine"
    ]
  },
  {
    id: "fourth",
    name: "Fourth BHMS",
    number: 4,
    subjects: [
      "Practice of Medicine",
      "Surgery",
      "Obstetrics and Gynaecology",
      "Community Medicine",
      "Homoeopathic Materia Medica",
      "Organon of Medicine"
    ]
  }
];

/* =====================================
   BHMS STUDY FEATURES
===================================== */

const BHMS_FEATURES = [
  {
    id: "notes",
    name: "Study Notes",
    description: "Subject-wise notes and explanations",
    icon: "📚",
    page: "notes.html"
  },
  {
    id: "papers",
    name: "Previous Year Papers",
    description: "HNGU question papers and solutions",
    icon: "📄",
    page: "papers.html"
  },
  {
    id: "quiz",
    name: "MCQ and Viva",
    description: "Practice questions and viva preparation",
    icon: "📝",
    page: "quiz.html"
  },
  {
    id: "scan",
    name: "Question Paper Scanner",
    description: "Upload a question paper image for reading",
    icon: "📷",
    page: "papers.html"
  }
];

/* =====================================
   ALLOPATHY FEATURES
===================================== */

const ALLOPATHY_FEATURES = [
  {
    id: "medicine",
    name: "Medicine Database",
    description: "Search medicine information",
    icon: "💊",
    page: "medicine.html"
  },
  {
    id: "scanner",
    name: "Medicine Scanner",
    description: "Identify medicine text from an image",
    icon: "📷",
    page: "medicine.html"
  },
  {
    id: "pronunciation",
    name: "English Pronunciation",
    description: "English words with Gujarati pronunciation",
    icon: "🔊",
    page: "medicine.html"
  },
  {
    id: "medical-notes",
    name: "Medical Learning",
    description: "Learn medical topics in simple Gujarati",
    icon: "📖",
    page: "notes.html"
  }
];

/* =====================================
   MEDICINE DATABASE
   Demo records only.
   Verify all medical information
   before using it clinically.
===================================== */

const MEDICINE_DATABASE = [
  {
    id: "paracetamol",
    name: "Paracetamol",
    genericName: "Paracetamol",
    brandNames: [],
    composition: "Paracetamol",
    category: "Analgesic and Antipyretic",
    uses: [
      "Pain relief",
      "Fever reduction"
    ],
    gujaratiName: "પેરાસિટામોલ",
    pronunciation: "પે-રા-સી-ટા-મોલ",
    sideEffects: [
      "Possible allergic reactions",
      "Liver damage in overdose"
    ],
    precautions: [
      "Check the product label",
      "Avoid taking multiple products containing paracetamol"
    ],
    disclaimer: "Educational information only. Follow professional medical advice."
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    genericName: "Ibuprofen",
    brandNames: [],
    composition: "Ibuprofen",
    category: "NSAID",
    uses: [
      "Pain relief",
      "Inflammation reduction",
      "Fever reduction"
    ],
    gujaratiName: "આઇબુપ્રોફેન",
    pronunciation: "આઇ-બ્યુ-પ્રો-ફેન",
    sideEffects: [
      "Stomach irritation",
      "Possible kidney and gastrointestinal complications"
    ],
    precautions: [
      "May not be suitable for people with stomach ulcers or kidney problems",
      "Seek professional advice before use"
    ],
    disclaimer: "Educational information only. Follow professional medical advice."
  }
];

/* =====================================
   PAPER DATABASE
   Add only verified HNGU papers here.
===================================== */



const PAPER_DATABASE = [
  {
    id: "hngu-official-archive",
    university: "HNGU",
    course: "BHMS",
    year: "2025-2026",
    bhmsYear: "All BHMS Years",
    subject: "Official Exam Records",
    examType: "Official Records",
    verified: true,
    file: "https://ngu.ac.in/ReAssessmentData.aspx",
    solution: ""
  },

  // FIRST BHMS - VNSGU
  {
    id: "v1-pharmacy",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "First BHMS",
    subject: "Homoeopathic Pharmacy",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Hom_%20Pharmacy%20QP.pdf",
    solution: ""
  },
  {
    id: "v1-anatomy1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "First BHMS",
    subject: "Anatomy Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/Anatomy%20Paper-1.pdf",
    solution: ""
  },
  {
    id: "v1-anatomy2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "First BHMS",
    subject: "Anatomy Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Anatomy%20Paper-2.pdf",
    solution: ""
  },
  {
    id: "v1-physiology1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "First BHMS",
    subject: "Physiology Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Physiology%20Paper-1.pdf",
    solution: ""
  },
  {
    id: "v1-physiology2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "First BHMS",
    subject: "Physiology Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Physiology%20Paper-2.pdf",
    solution: ""
  },

  // SECOND BHMS - VNSGU
  {
    id: "v2-pathology1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Second BHMS",
    subject: "Pathology Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Pathology%20Paper%201___09Oct2021_02_41_59_PM__.pdf",
    solution: ""
  },
  {
    id: "v2-pathology2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Second BHMS",
    subject: "Pathology Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Pathology%20Paper%202___09Oct2021_02_42_32_PM__.pdf",
    solution: ""
  },
  {
    id: "v2-fmt",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Second BHMS",
    subject: "Forensic Medicine and Toxicology",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Forensic%20Medicine%20%26%20Toxicology.pdf",
    solution: ""
  },
  {
    id: "v2-hmm",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Second BHMS",
    subject: "Homoeopathic Materia Medica",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/HMM.pdf",
    solution: ""
  },
  {
    id: "v2-organon",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Second BHMS",
    subject: "Organon of Medicine",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Org.pdf",
    solution: ""
  },

  // THIRD BHMS - VNSGU
  {
    id: "v3-surgery1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Surgery Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Surgery%20QP%201.pdf",
    solution: ""
  },
  {
    id: "v3-surgery2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Surgery Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Surgery%20QP%202.pdf",
    solution: ""
  },
  {
    id: "v3-obg1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Obstetrics and Gynecology Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/OBG%20QP%201.pdf",
    solution: ""
  },
  {
    id: "v3-obg2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Obstetrics and Gynecology Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/OBG%20QP%202.pdf",
    solution: ""
  },
  {
    id: "v3-hmm",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Homoeopathic Materia Medica",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/HMM%20QP.pdf",
    solution: ""
  },
  {
    id: "v3-organon",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Third BHMS",
    subject: "Organon of Medicine",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Organon%20QP%203rd.pdf",
    solution: ""
  },

  // FOURTH BHMS - VNSGU
  {
    id: "v4-pom1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Practice of Medicine Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/POM-1.pdf",
    solution: ""
  },
  {
    id: "v4-pom2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Practice of Medicine Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/POM-2.pdf",
    solution: ""
  },
  {
    id: "v4-community",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Community Medicine",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/CM.pdf",
    solution: ""
  },
  {
    id: "v4-hmm1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Homoeopathic Materia Medica Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/HMM-1.pdf",
    solution: ""
  },
  {
    id: "v4-hmm2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Homoeopathic Materia Medica Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/HMM-2.pdf",
    solution: ""
  },
  {
    id: "v4-organon1",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Organon of Medicine Paper 1",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Org-1.pdf",
    solution: ""
  },
  {
    id: "v4-organon2",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Organon of Medicine Paper 2",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/Org-2%20%281%29.pdf",
    solution: ""
  },
  {
    id: "v4-ctr",
    university: "VNSGU",
    course: "BHMS",
    year: "Archive",
    bhmsYear: "Fourth BHMS",
    subject: "Case Taking and Repertory",
    examType: "Question Paper PDF",
    verified: true,
    file: "https://www.cnkotharihomeocollege.org/img/253/File/SrudentZone/CTR.pdf",
    solution: ""
  }
];



/*
Paper record format:

{
  id: "hngu-year-subject",
  university: "HNGU",
  course: "BHMS",
  year: "2025",
  bhmsYear: "First BHMS",
  subject: "Anatomy",
  examType: "University Examination",
  verified: true,
  file: "",
  solution: ""
}

Do not add an unverified paper as an HNGU paper.
*/

/* =====================================
   NOTES DATABASE
===================================== */

const NOTES_DATABASE = [];

/*
Notes format:

{
  id: "anatomy-topic-1",
  course: "BHMS",
  bhmsYear: "First BHMS",
  subject: "Anatomy",
  topic: "Topic Name",
  englishContent: "",
  gujaratiExplanation: "",
  pronunciation: ""
}
*/

/* =====================================
   MCQ DATABASE
===================================== */

const MCQ_DATABASE = [];

/*
MCQ format:

{
  id: "mcq-001",
  course: "BHMS",
  subject: "Anatomy",
  question: "Question here",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: "Option A",
  explanation: "Explanation here"
}
*/

/* =====================================
   VIVA DATABASE
===================================== */

const VIVA_DATABASE = [];

/*
Viva format:

{
  id: "viva-001",
  subject: "Anatomy",
  question: "Viva question",
  answer: "Answer",
  gujaratiExplanation: "ગુજરાતીમાં સમજણ"
}
*/

/* =====================================
   STUDY LANGUAGE
===================================== */

const STUDY_LANGUAGES = [
  {
    id: "english",
    name: "English"
  },
  {
    id: "gujarati",
    name: "Gujarati"
  },
  {
    id: "both",
    name: "English + Gujarati"
  }
];

/* =====================================
   WEBSITE DISCLAIMER
===================================== */

const WEBSITE_DISCLAIMER = {
  medical: "This website is for educational purposes only. It is not a substitute for diagnosis, prescription or treatment by a qualified healthcare professional.",
  papers: "Only verified university papers should be labelled as HNGU papers.",
  ai: "AI-generated information may contain errors. Always verify important medical information.",
  medicine: "Never use medicine information from this website as a personal prescription."
};
