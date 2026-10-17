export const siteConfig = {
  name: "نوین",
  fullName: "تعمیرات نوین",
  technician: "محسن",
  description:
    "تعمیرات تخصصی لوازم خانگی، پکیج، آبگرمکن، لباسشویی، کولرگازی، آیفون و سیم‌کشی ساختمان با بیش از ۱۰ سال تجربه",
  phone: "09127701231",
  phoneDisplay: "0912 770 1231",
  landline: "88270072",
  landlineDisplay: "021 88270072",
  experience: 10,
  url: "https://tamiratnovin.ir",
  keywords: [
    "تعمیرات لوازم خانگی",
    "تعمیر پکیج",
    "تعمیر آبگرمکن",
    "تعمیر لباسشویی",
    "تعمیر کولرگازی",
    "تعمیر آیفون",
    "سیم کشی ساختمان",
    "تعمیرات برقی",
    "تعمیر ماشین ظرفشویی",
    "تعمیرات نوین",
    "آقا محسن تعمیرکار",
  ],
};

export const services = [
  {
    icon: "Flame",
    title: "تعمیر پکیج و آبگرمکن",
    description:
      "تعمیر، سرویس و نصب پکیج‌های گرمایشی و آبگرمکن‌های گازی و برقی",
  },
  {
    icon: "WashingMachine",
    title: "تعمیر لباسشویی و ظرفشویی",
    description: "تعمیر تخصصی ماشین لباسشویی، ظرفشویی و تمامی لوازم خانگی بزرگ",
  },
  {
    icon: "Wind",
    title: "تعمیر کولرگازی",
    description: "تعمیر، شارژ گاز، سرویس و نصب انواع کولر گازی و اسپلیت",
  },
  {
    icon: "Phone",
    title: "تعمیر آیفون تصویری",
    description: "تعمیر و نصب آیفون تصویری، صوتی و سیستم‌های کنترل تردد",
  },
  {
    icon: "Zap",
    title: "سیم‌کشی ساختمان",
    description: "سیم‌کشی کلی و جزئی ساختمان، برق‌کشی، روشنایی و تأسیسات برقی",
  },
  {
    icon: "Wrench",
    title: "تعمیرات برقی عمومی",
    description:
      "تمامی کارهای برقی، تعمیر لوازم برقی و عیب‌یابی مدارهای الکتریکی",
  },
];

const PORTFOLIO_ALT_KEYWORDS = [
  "تعمیر پکیج",
  "تعمیر آبگرمکن",
  "تعمیر لباسشویی",
  "تعمیر کولرگازی",
  "سیم کشی ساختمان",
  "تعمیر آیفون",
  "تعمیرات برقی",
  "تعمیر ظرفشویی",
];

export const portfolioImages = Array.from({ length: 43 }, (_, i) => ({
  src: `/images/nemoneh/photo_${i + 1}.jpg`,
  alt: `نمونه کار ${PORTFOLIO_ALT_KEYWORDS[i % PORTFOLIO_ALT_KEYWORDS.length]} — تعمیرات نوین ${i + 1}`,
}));

export const stats = [
  {
    value: 10,
    prefix: "",
    suffix: "+",
    label: "سال تجربه",
    icon: "Award",
    gradient: "from-blue-500/20 to-blue-600/5",
    iconBg: "bg-blue-500/15 text-blue-600",
    accent: "text-blue-600",
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "مشتری راضی",
    icon: "Users",
    gradient: "from-emerald-500/20 to-emerald-600/5",
    iconBg: "bg-emerald-500/15 text-emerald-600",
    accent: "text-emerald-600",
  },
  {
    value: 999,
    prefix: "+",
    suffix: "",
    label: "نمونه کار",
    icon: "Images",
    gradient: "from-orange-500/20 to-orange-600/5",
    iconBg: "bg-orange-500/15 text-orange-600",
    accent: "text-orange-600",
  },
  {
    value: 24,
    prefix: "",
    suffix: "/۷",
    label: "پاسخگویی",
    icon: "Clock",
    gradient: "from-violet-500/20 to-violet-600/5",
    iconBg: "bg-violet-500/15 text-violet-600",
    accent: "text-violet-600",
  },
];
