import { siteConfig } from "./site-config";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  publishedAt: string; // ISO date
  updatedAt: string;
  readingMinutes: number;
  relatedServiceSlugs: string[];
  content: { heading?: string; paragraphs: string[] }[];
  externalLinks: { title: string; url: string; rel?: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "alamat-kharabi-pakij",
    title: "علامت‌های خرابی پکیج که نباید نادیده بگیرید",
    excerpt:
      "از ارور صفحه نمایش تا نوسان آب گرم — نشانه‌هایی که می‌گویند پکیج نیاز به تعمیر فوری دارد.",
    metaTitle: "علامت خرابی پکیج دیواری | چه زمانی تعمیرکار بخواهید؟",
    metaDescription:
      "علائم خرابی پکیج در تهران: روشن نشدن، افت فشار، صدای غیرعادی و ارور. راهنمای تشخیص و زمان تماس با تعمیرکار. تعمیرات نوین.",
    keywords: ["خرابی پکیج", "ارور پکیج", "تعمیر پکیج تهران", "افت فشار پکیج"],
    publishedAt: "2026-08-01",
    updatedAt: "2026-09-12",
    readingMinutes: 5,
    relatedServiceSlugs: ["tamir-pakij-abgarmkon"],
    content: [
      {
        paragraphs: [
          `پکیج دیواری قلب گرمایش خانه است. اگر به‌موقع تعمیر نشود، مصرف گاز بالا می‌رود و حتی خطر ایمنی ایجاد می‌کند. ${siteConfig.technician} در ${siteConfig.fullName} این علائم را هر روز در خانه‌های تهران می‌بیند.`,
        ],
      },
      {
        heading: "نشانه‌های رایج خرابی پکیج",
        paragraphs: [
          "روشن نشدن یا قطع مکرر شعله، نوسان دمای آب گرم، افت فشار روی گیج، صدای تق‌تق یا سوت، بوی گاز یا دود غیرعادی، و ارورهای دیجیتالی از شایع‌ترین هشدارها هستند.",
          "اگر آب گرم ناگهانی سرد می‌شود یا رادیاتورها یکنواخت گرم نمی‌شوند، احتمالاً مبدل، پمپ یا سنسور مشکل دارد و باید در محل عیب‌یابی شود.",
        ],
      },
      {
        heading: "چه زمانی فوری تماس بگیرید؟",
        paragraphs: [
          "بوی گاز، نشتی آب از دستگاه، جرقه یا صدای انفجار مانند، و خاموشی کامل در فصل سرما را جدی بگیرید. در این موارد دستگاه را خاموش کنید و با تعمیرکار مجرب تماس بگیرید.",
          `برای تعمیر پکیج در محل، همین حالا با ${siteConfig.phoneDisplay} تماس بگیرید.`,
        ],
      },
    ],
    externalLinks: [
      {
        title: "استعلام گواهینامه مهارت فنی و حرفه‌ای",
        url: "https://certificate.portaltvto.com",
      },
      {
        title: "سازمان ملی استاندارد ایران",
        url: "https://www.inso.gov.ir",
      },
    ],
  },
  {
    slug: "serwis-coolergazi-tabestan",
    title: "سرویس کولرگازی قبل از تابستان؛ چک‌لیست کامل",
    excerpt:
      "با سرویس به‌موقع اسپلیت، مصرف برق کمتر و سرمایش قوی‌تر می‌شود. چک‌لیست قبل از فصل گرما.",
    metaTitle: "سرویس کولرگازی قبل از تابستان | شارژ گاز و شستشو",
    metaDescription:
      "چک‌لیست سرویس کولرگازی و اسپلیت قبل از تابستان: فیلتر، گاز، کویل و یونیت خارجی. تعمیر و شارژ گاز در تهران — تعمیرات نوین.",
    keywords: ["سرویس کولرگازی", "شارژ گاز کولر", "تعمیر اسپلیت تهران"],
    publishedAt: "2026-08-10",
    updatedAt: "2026-09-12",
    readingMinutes: 4,
    relatedServiceSlugs: ["tamir-coolergazi"],
    content: [
      {
        paragraphs: [
          "سرویس سالیانه کولرگازی جلوی بسیاری از خرابی‌های پرهزینه را می‌گیرد. فیلتر کثیف، کمبود گاز و کویل گرفته‌شده سه دلیل اصلی باد گرم و مصرف بالای برق هستند.",
        ],
      },
      {
        heading: "چک‌لیست سرویس حرفه‌ای",
        paragraphs: [
          "شستشوی فیلتر و پنل داخلی، بررسی فشار گاز و نشتی‌یابی، تمیزکاری کویل و فن، کنترل درین آب، و بازدید یونیت خارجی از کارهای استاندارد سرویس است.",
          "اگر دستگاه بعد از سرویس هنوز خنک نمی‌کند، ممکن است کمپرسور یا برد نیاز به تعمیر تخصصی داشته باشد.",
        ],
      },
    ],
    externalLinks: [
      {
        title: "وزارت نیرو — مدیریت مصرف برق",
        url: "https://www.moe.gov.ir",
      },
    ],
  },
  {
    slug: "dalil-ab-nagereftan-lebasshui",
    title: "چرا ماشین لباسشویی آب نمی‌گیرد؟",
    excerpt:
      "از شیر ورودی تا شیر برقی و فیلتر — علت‌های رایج آب‌نگرفتن لباسشویی و راه رفع در محل.",
    metaTitle: "لباسشویی آب نمی‌گیرد | علت و تعمیر در محل تهران",
    metaDescription:
      "دلایل آب نگرفتن ماشین لباسشویی و نحوه تعمیر در منزل. عیب‌یابی شیر برقی، فیلتر و فشار آب. تماس با تعمیرات نوین تهران.",
    keywords: ["لباسشویی آب نمی‌گیرد", "تعمیر لباسشویی تهران", "شیر برقی لباسشویی"],
    publishedAt: "2026-08-18",
    updatedAt: "2026-09-12",
    readingMinutes: 4,
    relatedServiceSlugs: ["tamir-lebasshui-zarfshui"],
    content: [
      {
        paragraphs: [
          "اگر لباسشویی برنامه را شروع می‌کند ولی آب وارد دیگ نمی‌شود، معمولاً مشکل از ورودی آب، فیلتر مسدود، شیر برقی یا فشار کم آب ساختمان است.",
        ],
      },
      {
        heading: "قبل از تماس با تعمیرکار چه کنید؟",
        paragraphs: [
          "شیر آب ورودی را باز بودن چک کنید، شیلنگ را از تاشدگی آزاد کنید، و فیلتر ورودی شیلنگ را تمیز کنید. اگر ارور روی نمایشگر می‌آید، مدل دستگاه را یادداشت کنید.",
          "اگر باز هم آب نمی‌گیرد، تعمیر در محل سریع‌تر و کم‌هزینه‌تر از جابه‌جایی دستگاه است.",
        ],
      },
    ],
    externalLinks: [
      {
        title: "سازمان حمایت مصرف‌کنندگان و تولیدکنندگان",
        url: "https://www.cppo.ir",
      },
    ],
  },
  {
    slug: "imani-simkeshi-sakhteman",
    title: "نکات ایمنی سیم‌کشی ساختمان که جان می‌خرد",
    excerpt:
      "مقطع سیم، ارت، فیوز مناسب و پریز استاندارد — اصولی که در برق‌کشی ساختمان نباید نادیده گرفت.",
    metaTitle: "ایمنی سیم‌کشی ساختمان | برق‌کشی استاندارد تهران",
    metaDescription:
      "نکات ایمنی سیم‌کشی و برق‌کشی ساختمان: انتخاب سیم، تابلو برق، ارت و جلوگیری از اتصالی. خدمات سیم‌کشی تعمیرات نوین تهران.",
    keywords: ["سیم کشی ساختمان", "ایمنی برق ساختمان", "برق کشی استاندارد"],
    publishedAt: "2026-08-25",
    updatedAt: "2026-09-12",
    readingMinutes: 5,
    relatedServiceSlugs: ["simkeshi-sakhteman", "tamirat-barghi"],
    content: [
      {
        paragraphs: [
          "بیشتر آتش‌سوزی‌های خانگی به اتصالی و سیم‌کشی غیراستاندارد مربوط است. مقطع نامناسب سیم، نبود ارت، و فیوز غیراستاندارد از خطرناک‌ترین اشتباهات هستند.",
        ],
      },
      {
        heading: "اصول سیم‌کشی ایمن",
        paragraphs: [
          "برای هر مدار، مقطع سیم متناسب با جریان انتخاب شود، کلید مینیاتوری درست نصب شود، جعبه فیوز استاندارد باشد و پریزهای مرطوب (آشپزخانه و سرویس) محافظ داشته باشند.",
          `اگر در خانه جرقه، بوی سوختگی یا قطع مکرر فیوز دارید، فوراً با ${siteConfig.fullName} تماس بگیرید.`,
        ],
      },
    ],
    externalLinks: [
      {
        title: "سازمان آتش‌نشانی تهران",
        url: "https://125.tehran.ir",
      },
      {
        title: "نظام مهندسی ساختمان",
        url: "https://www.irceo.net",
      },
    ],
  },
  {
    slug: "tamir-iphone-tasviri-moshkelat",
    title: "مشکلات رایج آیفون تصویری و راه حل",
    excerpt:
      "تصویر ندارد، صدا یک‌طرفه است یا درب‌بازکن کار نمی‌کند؟ راهنمای عیب‌یابی آیفون تصویری.",
    metaTitle: "تعمیر آیفون تصویری | مشکلات رایج و رفع در محل",
    metaDescription:
      "عیب‌یابی آیفون تصویری: نبود تصویر، قطع صدا، زنگ نخوردن و خرابی درب‌بازکن. نصب و تعمیر در تهران توسط تعمیرات نوین.",
    keywords: ["تعمیر آیفون تصویری", "آیفون تصویری تصویر ندارد", "نصب آیفون"],
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-12",
    readingMinutes: 4,
    relatedServiceSlugs: ["tamir-iphone-tasviri"],
    content: [
      {
        paragraphs: [
          "آیفون تصویری ترکیبی از مانیتور واحد، پنل ورودی و سیم‌کشی مشترک است. گاهی فقط یک واحد مشکل دارد و گاهی کل ساختمان.",
        ],
      },
      {
        heading: "عیب‌یابی سریع",
        paragraphs: [
          "اگر فقط تصویر ندارید، منبع تغذیه و کابل تصویر را بررسی کنید. اگر زنگ نمی‌خورد، پنل یا تغذیه مشترک مشکوک است. قطعی درب‌بازکن اغلب مربوط به رله یا سیم فرمان است.",
          "تعمیرکار با تستر و تجربه، سریع نقطه قطع را پیدا می‌کند؛ تعویض بی‌مورد مانیتور همیشه لازم نیست.",
        ],
      },
    ],
    externalLinks: [
      {
        title: "پورتال ملی مجوزهای کشور",
        url: "https://mojavez.ir",
      },
    ],
  },
  {
    slug: "chera-tamirkar-mojaz",
    title: "چرا تعمیرکار دارای گواهینامه مهارت انتخاب کنیم؟",
    excerpt:
      "گواهینامه فنی و حرفه‌ای یعنی آموزش استاندارد و آزمون مهارت. فرق تعمیرکار مجرب با کار تجربی خام.",
    metaTitle: "تعمیرکار دارای گواهینامه مهارت | اعتماد و کیفیت کار",
    metaDescription:
      "اهمیت گواهینامه مهارت فنی و حرفه‌ای برای تعمیر پکیج و لوازم خانگی. استعلام مدرک و انتخاب تعمیرکار مطمئن در تهران.",
    keywords: [
      "گواهینامه مهارت",
      "تعمیرکار مجرب تهران",
      "فنی و حرفه ای",
      "تعمیرات نوین",
    ],
    publishedAt: "2026-09-05",
    updatedAt: "2026-09-12",
    readingMinutes: 3,
    relatedServiceSlugs: ["tamir-pakij-abgarmkon"],
    content: [
      {
        paragraphs: [
          `انتخاب تعمیرکار فقط به قیمت نیست؛ ایمنی گاز، برق و کیفیت قطعات مهم‌تر است. ${siteConfig.technician} دارای گواهینامه مهارت رسمی در نصب و تعمیر پکیج شوفاژ گازی است.`,
        ],
      },
      {
        heading: "استعلام مدرک",
        paragraphs: [
          "می‌توانید اصالت گواهینامه را از سامانه سازمان آموزش فنی و حرفه‌ای با کد ملی و شماره گواهینامه بررسی کنید.",
          "تعمیرکار آموزش‌دیده عیب را دقیق‌تر تشخیص می‌دهد، قطعه اضافه تحمیل نمی‌کند و کار را با ضمانت انجام می‌دهد.",
        ],
      },
    ],
    externalLinks: [
      {
        title: "سازمان آموزش فنی و حرفه‌ای کشور",
        url: "https://www.irantvto.ir",
      },
      {
        title: "استعلام آنلاین گواهینامه مهارت",
        url: "https://certificate.portaltvto.com",
      },
    ],
  },
];

/** لینک‌های خارجی معتبر + مسیرهای ثبت کسب‌وکار برای بک‌لینک */
export const authorityLinks = [
  {
    title: "سازمان آموزش فنی و حرفه‌ای",
    url: "https://www.irantvto.ir",
    description: "مرجع آموزش و گواهینامه مهارت",
  },
  {
    title: "استعلام گواهینامه مهارت",
    url: "https://certificate.portaltvto.com",
    description: "راستی‌آزمایی مدرک تعمیرکار",
  },
  {
    title: "سازمان ملی استاندارد",
    url: "https://www.inso.gov.ir",
    description: "استاندارد ایمنی لوازم خانگی",
  },
  {
    title: "آتش‌نشانی تهران",
    url: "https://125.tehran.ir",
    description: "ایمنی گاز و برق ساختمان",
  },
] as const;

export const directoryLinks = [
  {
    title: "نشان — ثبت کسب‌وکار محلی",
    url: "https://neshan.org",
    description: "نقشه و جستجوی محلی ایران",
  },
  {
    title: "بلد",
    url: "https://balad.ir",
    description: "نقشه و کسب‌وکارهای محلی",
  },
  {
    title: "گوگل مپ — ثبت Business Profile",
    url: "https://www.google.com/maps",
    description: "مهم‌ترین منبع بک‌لینک و اعتماد محلی",
  },
  {
    title: "هایپرآفیس",
    url: "https://hyperoffice.ir/",
    description: "طراحی و توسعه وب — لینک متقابل برند",
  },
] as const;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
