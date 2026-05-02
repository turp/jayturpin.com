export const SITE = {
  website: "https://jayturpin.com/",
  author: "Jay Turpin",
  profile: "https://jayturpin.com/about",
  desc: "Jay Turpin's personal blog about software development, agile practices, and technology.",
  title: "Jay Turpin",
  ogImage: "JayTurpin-300x300.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/turp/jayturpin.com/edit/astro/src/data/blog/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "America/Chicago",
} as const;
