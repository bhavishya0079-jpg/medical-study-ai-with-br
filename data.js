
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

const PAPER_DATABASE = [];

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
