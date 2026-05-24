export type Locale = "en" | "gu";

export type TranslationTree = typeof en;

const en = {
  lang: { english: "English", gujarati: "ગુજરાતી" },
  nav: {
    services: "Services",
    results: "Results",
    doctors: "Doctors",
    gallery: "Gallery",
    contact: "Contact",
    tagline: "Creating Confident Smiles",
    bookNow: "Book Now",
    bookAppointment: "Book Appointment",
    light: "Light",
    dark: "Dark",
    menu: "Menu",
  },
  hero: {
    badge: "Now accepting new patients",
    title1: "Your Smile,",
    title2: "Our Priority",
    description:
      "Advanced dental care with modern technology — pain-free treatments, digital workflows, and a clinic designed for confident, Instagram-ready smiles.",
    bookAppointment: "Book Appointment",
    whatsappUs: "WhatsApp Us",
    follow: "Follow",
    happyPatients: "Happy Patients",
    reviews: "2,400+ reviews",
    imageAlt: "Smiling patient at Social Dentist clinic",
    whatsappPrefill: "Hi! I'd like to book an appointment at SOCIAL DENTIST.",
  },
  about: {
    eyebrow: "About the clinic",
    title: "Digital dentistry meets a social-first experience.",
    description:
      "SOCIAL DENTIST is a modern dental care clinic curating premium treatments for the patient who values time, comfort, and aesthetics. Every detail — from the welcome to the after-care — is designed.",
    pillars: {
      experienced: "Experienced doctors",
      digital: "Digital dentistry",
      painFree: "Pain-free treatment",
      friendly: "Friendly environment",
    },
    imageAlt: "Modern dental surgery room",
  },
  services: {
    eyebrow: "What we do",
    title: "Premium services, end-to-end.",
    subtitle: "Precision dentistry tailored to your unique facial aesthetics.",
    bookTreatment: "Book this treatment",
    items: {
      teethCleaning: {
        title: "Teeth Cleaning",
        desc: "Professional prophylaxis for a healthy microbiome.",
      },
      dentalImplants: {
        title: "Dental Implants",
        desc: "Biocompatible titanium replacements that last.",
      },
      rootCanal: { title: "Root Canal", desc: "Pain-free endodontic therapy in a single visit." },
      bracesAligners: {
        title: "Braces & Aligners",
        desc: "Invisalign-certified discreet alignment.",
      },
      teethWhitening: {
        title: "Teeth Whitening",
        desc: "Laser-grade brightening for a radiant glow.",
      },
      smileDesign: {
        title: "Smile Design",
        desc: "Custom porcelain veneers with 3D simulation.",
      },
      pediatric: { title: "Pediatric Dentistry", desc: "Gentle care for our youngest patients." },
      emergency: { title: "Emergency Care", desc: "Same-day appointments when minutes matter." },
    },
  },
  why: {
    eyebrow: "Why choose us",
    title: "Trusted by thousands. Designed for you.",
    stats: {
      happyPatients: "Happy Patients",
      yearsExperience: "Years Experience",
      digitalWorkflow: "Digital Workflow",
      certifiedDentists: "Certified Dentists",
      hiddenCosts: "Hidden Costs",
    },
  },
  doctors: {
    eyebrow: "Meet the team",
    title: "Certified specialists who genuinely care.",
    experience: "experience",
    drMehta: {
      name: "Dr. Aarav Mehta",
      qualification: "BDS, MDS — Implantology",
      experience: "12+ years",
    },
    drRao: {
      name: "Dr. Sofia Rao",
      qualification: "BDS, MDS — Cosmetic Dentistry",
      experience: "9+ years",
    },
  },
  results: {
    eyebrow: "Transformations",
    title: "Before & after smile results",
    subtitle: "Drag the slider to compare real patient outcomes. Filter by treatment type.",
    all: "All",
    empty: "No cases for this treatment yet — book a consultation to be our next success story.",
    before: "Before",
    after: "After",
    compareLabel: "Compare before and after",
    cases: {
      whitening1: "Professional whitening — 8 shades brighter in one visit.",
      aligners1: "Clear aligner journey — aligned bite in 14 months.",
      smileDesign1: "Porcelain veneer smile design with digital preview.",
      implants1: "Single-tooth implant restoration with natural contour.",
      cleaning1: "Deep clean and polish — healthier gums in one session.",
    },
  },
  testimonials: {
    eyebrow: "Loved by patients",
    title: "5-star smiles, every visit.",
    prev: "Previous",
    next: "Next",
    goTo: "Go to review",
    items: {
      aditi: {
        name: "Aditi S.",
        role: "Smile Design Patient",
        quote:
          "Every visit feels like a luxury spa experience for my dental health. My new smile is everything I dreamed of.",
      },
      rohan: {
        name: "Rohan K.",
        role: "Implant Patient",
        quote:
          "Painless, transparent pricing, and finished in a single day. The team here is on another level.",
      },
      maya: {
        name: "Maya V.",
        role: "Aligners Patient",
        quote:
          "Six months of aligners and I can't stop smiling for selfies. The digital plan made everything predictable.",
      },
    },
  },
  gallery: {
    eyebrow: "The smile gallery",
    title: "Real results, real smiles.",
    follow: "Follow",
    items: {
      smileReveal: "Smile Reveal",
      lounge: "Lounge",
      consultation: "Consultation",
      selfie: "Selfie Moment",
    },
  },
  booking: {
    eyebrow: "Book your visit",
    title: "Join the community",
    description: "Submit the form — we'll open WhatsApp with your details for instant follow-up at",
  },
  form: {
    fullName: "Full Name",
    phone: "Phone Number",
    treatmentType: "Treatment Type",
    selectTreatment: "Select treatment",
    dateTime: "Date & Time",
    message: "Message",
    messagePlaceholder: "Anything we should know?",
    confirmWhatsApp: "Confirm via WhatsApp",
    quickChat: "Quick chat",
    successTitle: "Opening WhatsApp to confirm your slot",
    successBody: "Send the pre-filled message and our team will reply within 2 hours.",
    openWhatsAppAgain: "Open WhatsApp again",
    dialogEyebrow: "Book online",
    dialogTitle: "Schedule your visit",
    dialogDescription:
      "Fill in your details — we'll open WhatsApp with a ready-to-send message for instant follow-up.",
    whatsappQuick: "Hi! I'd like to book an appointment at SOCIAL DENTIST.",
    whatsappConnect: "Hi! I'd like to connect with SOCIAL DENTIST.",
  },
  faq: {
    eyebrow: "Questions, answered",
    title: "Frequently asked",
    items: {
      pain: {
        q: "Is treatment painful?",
        a: "Our protocols are designed for comfort — local anesthesia, sedation options, and gentle digital instruments mean most patients describe their visit as relaxing.",
      },
      aligners: {
        q: "Do you provide aligners?",
        a: "Yes. We're a certified Invisalign provider and use 3D iTero scanning to plan your discreet, removable aligners.",
      },
      emergency: {
        q: "What are your emergency timings?",
        a: "We reserve daily emergency slots and offer same-day appointments. Call or WhatsApp us and we'll fit you in.",
      },
      cost: {
        q: "Can I get a cost estimation upfront?",
        a: "Absolutely. After a quick consultation we share a transparent plan — no hidden charges, ever.",
      },
    },
  },
  contact: {
    eyebrow: "Visit us",
    title: "Drop by — we'd love to meet you.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Working Hours",
    addressLine1: "102 Marble Arch, Suite 402",
    addressLine2: "London, UK",
    hoursWeekday: "Mon – Fri · 08:00 – 20:00",
    hoursSaturday: "Saturday · 10:00 – 16:00",
    mapTitle: "Clinic map",
  },
  footer: {
    description:
      "Reimagining dental care for the modern era. Premium, painless, and beautifully designed.",
    services: "Services",
    quickLinks: "Quick Links",
    serviceItems: {
      implants: "Implants",
      aligners: "Aligners",
      whitening: "Whitening",
      smileDesign: "Smile Design",
      pediatrics: "Pediatrics",
    },
    links: {
      about: "About",
      doctors: "Doctors",
      results: "Results",
      gallery: "Gallery",
      book: "Book",
      contact: "Contact",
    },
    copyright: "Creating Confident Smiles.",
  },
  treatments: {
    teethCleaning: "Teeth Cleaning",
    dentalImplants: "Dental Implants",
    rootCanal: "Root Canal",
    bracesAligners: "Braces & Aligners",
    teethWhitening: "Teeth Whitening",
    smileDesign: "Smile Design",
    pediatric: "Pediatric Dentistry",
    emergency: "Emergency Care",
    other: "Other",
  },
  whatsapp: {
    greeting: "Hello SOCIAL DENTIST! I'd like to book an appointment.",
    name: "Name",
    phone: "Phone",
    treatment: "Treatment",
    datetime: "Preferred date & time",
    notes: "Notes",
    footer: "Sent from the website booking form.",
    notSpecified: "Not specified",
  },
} as const;

const gu: TranslationTree = {
  lang: { english: "English", gujarati: "ગુજરાતી" },
  nav: {
    services: "સેવાઓ",
    results: "પરિણામો",
    doctors: "ડૉક્ટરો",
    gallery: "ગેલેરી",
    contact: "સંપર્ક",
    tagline: "આત્મવિશ્વાસુ સ્મિત બનાવીએ છીએ",
    bookNow: "હમણાં બુક કરો",
    bookAppointment: "એપોઇન્ટમેન્ટ બુક કરો",
    light: "લાઇટ",
    dark: "ડાર્ક",
    menu: "મેનુ",
  },
  hero: {
    badge: "નવા દર્દીઓ સ્વીકારી રહ્યા છીએ",
    title1: "તમારી સ્મિત,",
    title2: "અમારી પ્રાથમિકતા",
    description:
      "આધુનિક ટેકનોલોજી સાથે અદ્યતન દંત ચિકિત્સા — પીડારહિત સારવાર, ડિજિટલ વર્કફ્લો અને આત્મવિશ્વાસુ, સોશિયલ-રેડી સ્મિત માટે ડિઝાઇન ક્લિનિક.",
    bookAppointment: "એપોઇન્ટમેન્ટ બુક કરો",
    whatsappUs: "વોટ્સએપ કરો",
    follow: "ફોલો",
    happyPatients: "ખુશ દર્દીઓ",
    reviews: "2,400+ સમીક્ષાઓ",
    imageAlt: "સોશિયલ ડેન્ટિસ્ટ ક્લિનિકમાં મુસ્કુરાતા દર્દી",
    whatsappPrefill: "નમસ્તે! હું SOCIAL DENTIST પર એપોઇન્ટમેન્ટ બુક કરવા માંગુ છું.",
  },
  about: {
    eyebrow: "ક્લિનિક વિશે",
    title: "ડિજિટલ દંતચિકિત્સા અને સોશિયલ-ફર્સ્ટ અનુભવ.",
    description:
      "SOCIAL DENTIST એક આધુનિક દંત સંભાળ ક્લિનિક છે જે સમય, આરામ અને સૌંદર્યને મહત્વ આપતા દર્દીઓ માટે પ્રીમિયમ સારવાર પૂરી પાડે છે. સ્વાગતથી લઈને આફ્ટર-કેર સુધી — દરેક વિગત ડિઝાઇન કરેલી છે.",
    pillars: {
      experienced: "અનુભવી ડૉક્ટરો",
      digital: "ડિજિટલ દંતચિકિત્સા",
      painFree: "પીડારહિત સારવાર",
      friendly: "મૈત્રીપૂર્ણ વાતાવરણ",
    },
    imageAlt: "આધુનિક દંત ઓપરેશન રૂમ",
  },
  services: {
    eyebrow: "અમે શું કરીએ છીએ",
    title: "પ્રીમિયમ સેવાઓ, શરૂથી અંત સુધી.",
    subtitle: "તમારી અનન્ય ચહેરાની સૌંદર્યને અનુરૂપ ચોકસ દંતચિકિત્સા.",
    bookTreatment: "આ સારવાર બુક કરો",
    items: {
      teethCleaning: {
        title: "દાંત સફાઈ",
        desc: "સ્વસ્થ માઇક્રોબાયોમ માટે વ્યાવસાયિક પ્રોફિલેક્સિસ.",
      },
      dentalImplants: {
        title: "ડેન્ટલ ઇમ્પ્લાન્ટ",
        desc: "જીવસાત્મક ટાઇટેનિયમ રિપ્લેસમેન્ટ જે લાંબા સમય ટકે.",
      },
      rootCanal: { title: "રૂટ કેનાલ", desc: "એક જ મુલાકાતમાં પીડારહિત એન્ડોડોન્ટિક થેરાપી." },
      bracesAligners: {
        title: "બ્રેસ અને એલાઇનર્સ",
        desc: "ઇનવિઝાલાઇન-સર્ટિફાઇડ ગુપ્ત અલાઇનમેન્ટ.",
      },
      teethWhitening: {
        title: "દાંત સફેદ કરવા",
        desc: "ચમકદાર ગ્લો માટે લેસર-ગ્રેડ વ્હાઇટનિંગ.",
      },
      smileDesign: {
        title: "સ્માઇલ ડિઝાઇન",
        desc: "3D સિમ્યુલેશન સાથે કસ્ટમ પોર્સેલેન વેનિયર્સ.",
      },
      pediatric: { title: "બાળ દંતચિકિત્સા", desc: "અમારા સૌથી નાના દર્દીઓ માટે કોમળ સંભાળ." },
      emergency: { title: "ઇમરજન્સી કેર", desc: "જ્યારે મિનિટો મહત્વની હોય ત્યારે સમાન દિવસની એપોઇન્ટમેન્ટ." },
    },
  },
  why: {
    eyebrow: "અમને શા માટે પસંદ કરો",
    title: "હજારો દ્વારા વિશ્વસનીય. તમારા માટે ડિઝાઇન.",
    stats: {
      happyPatients: "ખુશ દર્દીઓ",
      yearsExperience: "વર્ષનો અનુભવ",
      digitalWorkflow: "ડિજિટલ વર્કફ્લો",
      certifiedDentists: "સર્ટિફાઇડ ડેન્ટિસ્ટ",
      hiddenCosts: "છુપા ખર્ચ",
    },
  },
  doctors: {
    eyebrow: "ટીમને મળો",
    title: "સર્ટિફાઇડ નિષ્ણાતો જે ખરેખર કાળજી લે છે.",
    experience: "અનુભવ",
    drMehta: {
      name: "ડૉ. આરવ મેહતા",
      qualification: "BDS, MDS — ઇમ્પ્લાન્ટોલોજી",
      experience: "12+ વર્ષ",
    },
    drRao: {
      name: "ડૉ. સોફિયા રાઓ",
      qualification: "BDS, MDS — કોસ્મેટિક દંતચિકિત્સા",
      experience: "9+ વર્ષ",
    },
  },
  results: {
    eyebrow: "પરિવર્તન",
    title: "પહેલાં અને પછી સ્મિત પરિણામો",
    subtitle: "સ્લાઇડર ખેંચીને વાસ્તવિક દર્દી પરિણામોની તુલના કરો. સારવાર પ્રકાર દ્વારા ફિલ્ટર કરો.",
    all: "બધા",
    empty: "આ સારવાર માટે હજુ કેસ નથી — અમારી આગલી સફળતા બનવા માટે કન્સલ્ટેશન બુક કરો.",
    before: "પહેલાં",
    after: "પછી",
    compareLabel: "પહેલાં અને પછીની તુલના કરો",
    cases: {
      whitening1: "વ્યાવસાયિક વ્હાઇટનિંગ — એક મુલાકાતમાં 8 શેડ ચમકદાર.",
      aligners1: "ક્લિયર એલાઇનર જર્ની — 14 મહિનામાં સંરેખિત બાઇટ.",
      smileDesign1: "ડિજિટલ પ્રિવ્યૂ સાથે પોર્સેલેન વેનિયર સ્માઇલ ડિઝાઇન.",
      implants1: "કુદરતી આકાર સાથે સિંગલ-ટૂથ ઇમ્પ્લાન્ટ રિસ્ટોરેશન.",
      cleaning1: "ડીપ ક્લીન અને પોલિશ — એક સેશનમાં સ્વસ્થ ગમ્સ.",
    },
  },
  testimonials: {
    eyebrow: "દર્દીઓ દ્વારા પ્રેમ",
    title: "દર મુલાકાતે 5-સ્ટાર સ્મિત.",
    prev: "પાછળ",
    next: "આગળ",
    goTo: "સમીક્ષા પર જાઓ",
    items: {
      aditi: {
        name: "અદિતિ એસ.",
        role: "સ્માઇલ ડિઝાઇન દર્દી",
        quote:
          "દર મુલાકાત મારા દાંતના સ્વાસ્થ્ય માટે લક્ઝરી સ્પા જેવી લાગે છે. મારી નવી સ્મિત મેં સપનામાં જોયેલી હતી.",
      },
      rohan: {
        name: "રોહન કે.",
        role: "ઇમ્પ્લાન્ટ દર્દી",
        quote: "પીડારહિત, પારદર્શક ભાવ અને એક જ દિવસે પૂર્ણ. અહીંની ટીમ અલગ જ સ્તરની છે.",
      },
      maya: {
        name: "માયા વી.",
        role: "એલાઇનર્સ દર્દી",
        quote:
          "છ મહિનાના એલાઇનર્સ અને હું સેલ્ફી માટે મુસ્કુરાવવાનું બંધ કરી શકતી નથી. ડિજિટલ પ્લાને બધું અનુમાનિત બનાવ્યું.",
      },
    },
  },
  gallery: {
    eyebrow: "સ્માઇલ ગેલેરી",
    title: "વાસ્તવિક પરિણામો, વાસ્તવિક સ્મિત.",
    follow: "ફોલો",
    items: {
      smileReveal: "સ્માઇલ રિવીલ",
      lounge: "લાઉન્જ",
      consultation: "કન્સલ્ટેશન",
      selfie: "સેલ્ફી મોમેન્ટ",
    },
  },
  booking: {
    eyebrow: "તમારી મુલાકાત બુક કરો",
    title: "સમુદાયમાં જોડાઓ",
    description: "ફોર્મ સબમિટ કરો — ત્વરિત ફોલો-અપ માટે અમે વોટ્સએપ ખોલીશું",
  },
  form: {
    fullName: "પૂરું નામ",
    phone: "ફોન નંબર",
    treatmentType: "સારવાર પ્રકાર",
    selectTreatment: "સારવાર પસંદ કરો",
    dateTime: "તારીખ અને સમય",
    message: "સંદેશ",
    messagePlaceholder: "અમને શું જાણવું જોઈએ?",
    confirmWhatsApp: "વોટ્સએપ દ્વારા કન્ફર્મ કરો",
    quickChat: "ઝડપી ચેટ",
    successTitle: "તમારી સ્લોટ કન્ફર્મ કરવા વોટ્સએપ ખોલી રહ્યા છીએ",
    successBody: "પ્રી-ફિલ્ડ સંદેશ મોકલો અને અમારી ટીમ 2 કલાકમાં જવાબ આપશે.",
    openWhatsAppAgain: "વોટ્સએપ ફરી ખોલો",
    dialogEyebrow: "ઓનલાઇન બુક કરો",
    dialogTitle: "તમારી મુલાકાત શેડ્યૂલ કરો",
    dialogDescription:
      "તમારી વિગતો ભરો — ત્વરિત ફોલો-અપ માટે અમે તૈયાર સંદેશ સાથે વોટ્સએપ ખોલીશું.",
    whatsappQuick: "નમસ્તે! હું SOCIAL DENTIST પર એપોઇન્ટમેન્ટ બુક કરવા માંગુ છું.",
    whatsappConnect: "નમસ્તે! હું SOCIAL DENTIST સાથે જોડાવા માંગુ છું.",
  },
  faq: {
    eyebrow: "પ્રશ્નો, જવાબો",
    title: "વારંવાર પૂછાયેલા",
    items: {
      pain: {
        q: "શું સારવાર પીડાદાયક છે?",
        a: "અમારી પ્રોટોકોલ આરામ માટે ડિઝાઇન કરેલી છે — સ્થાનિક એનેસ્થેસિયા, સેડેશન વિકલ્પો અને કોમળ ડિજિટલ સાધનોનો અર્થ છે કે મોટાભાગના દર્દીઓ મુલાકાતને આરામદાયક કહે છે.",
      },
      aligners: {
        q: "શું તમે એલાઇનર્સ પ્રદાન કરો છો?",
        a: "હા. અમે સર્ટિફાઇડ ઇનવિઝાલાઇન પ્રોવાઇડર છીએ અને 3D iTero સ્કેનિંગથી તમારા ગુપ્ત, દૂર કરી શકાય તેવા એલાઇનર્સની યોજના બનાવીએ છીએ.",
      },
      emergency: {
        q: "તમારા ઇમરજન્સી સમય શું છે?",
        a: "અમે દૈનિક ઇમરજન્સી સ્લોટ રાખીએ છીએ અને સમાન દિવસની એપોઇન્ટમેન્ટ ઓફર કરીએ છીએ. કૉલ અથવા વોટ્સએપ કરો અને અમે તમને ફિટ કરીશું.",
      },
      cost: {
        q: "શું મને અગાઉથી ખર્ચ અંદાજ મળી શકે?",
        a: "ચોક્કસ. ઝડપી કન્સલ્ટેશન પછી અમે પારદર્શક પ્લાન શેર કરીએ છીએ — ક્યારેય છુપા ચાર્જ નહીં.",
      },
    },
  },
  contact: {
    eyebrow: "અમને મળો",
    title: "મુલાકાત લો — તમને મળવા આનંદ થશે.",
    address: "સરનામું",
    phone: "ફોન",
    email: "ઇમેઇલ",
    hours: "કામકાજના સમય",
    addressLine1: "102 Marble Arch, Suite 402",
    addressLine2: "London, UK",
    hoursWeekday: "સોમ – શુક્ર · 08:00 – 20:00",
    hoursSaturday: "શનિવાર · 10:00 – 16:00",
    mapTitle: "ક્લિનિકનો નકશો",
  },
  footer: {
    description:
      "આધુનિક યુગ માટે દંત સંભાળનું પુનર્કલ્પન. પ્રીમિયમ, પીડારહિત અને સુંદર રીતે ડિઝાઇન.",
    services: "સેવાઓ",
    quickLinks: "ઝડપી લિંક્સ",
    serviceItems: {
      implants: "ઇમ્પ્લાન્ટ",
      aligners: "એલાઇનર્સ",
      whitening: "વ્હાઇટનિંગ",
      smileDesign: "સ્માઇલ ડિઝાઇન",
      pediatrics: "બાળ દંતચિકિત્સા",
    },
    links: {
      about: "વિશે",
      doctors: "ડૉક્ટરો",
      results: "પરિણામો",
      gallery: "ગેલેરી",
      book: "બુક",
      contact: "સંપર્ક",
    },
    copyright: "આત્મવિશ્વાસુ સ્મિત બનાવીએ છીએ.",
  },
  treatments: {
    teethCleaning: "દાંત સફાઈ",
    dentalImplants: "ડેન્ટલ ઇમ્પ્લાન્ટ",
    rootCanal: "રૂટ કેનાલ",
    bracesAligners: "બ્રેસ અને એલાઇનર્સ",
    teethWhitening: "દાંત સફેદ કરવા",
    smileDesign: "સ્માઇલ ડિઝાઇન",
    pediatric: "બાળ દંતચિકિત્સા",
    emergency: "ઇમરજન્સી કેર",
    other: "અન્ય",
  },
  whatsapp: {
    greeting: "નમસ્તે SOCIAL DENTIST! હું એપોઇન્ટમેન્ટ બુક કરવા માંગુ છું.",
    name: "નામ",
    phone: "ફોન",
    treatment: "સારવાર",
    datetime: "પસંદગીની તારીખ અને સમય",
    notes: "નોંધ",
    footer: "વેબસાઇટ બુકિંગ ફોર્મથી મોકલાયેલ.",
    notSpecified: "નિર્દિષ્ટ નથી",
  },
};

export { en, gu };

export const translations: Record<Locale, TranslationTree> = { en, gu };

export type TreatmentKey = keyof TranslationTree["treatments"];

export const TREATMENT_KEYS: Record<string, TreatmentKey> = {
  "Teeth Cleaning": "teethCleaning",
  "Dental Implants": "dentalImplants",
  "Root Canal": "rootCanal",
  "Braces & Aligners": "bracesAligners",
  "Teeth Whitening": "teethWhitening",
  "Smile Design": "smileDesign",
  "Pediatric Dentistry": "pediatric",
  "Emergency Care": "emergency",
  Other: "other",
};
