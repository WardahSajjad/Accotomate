/**
 * Single source of truth for contact points and booking links.
 *
 * NOTE: the previous build used two different Google Calendar appointment
 * schedules — one on the header/hero, another on the service pages. Both are
 * kept below rather than silently merged. If that split was unintentional,
 * point `bookingUrl` and `bookingUrlServices` at the same schedule.
 */

export const site = {
  name: "Accotomate",
  tagline: "Tech-driven bookkeeping for growing businesses",
  email: "Maryam@accotomate.com",
  phone: "+44 7490 031997",
  phoneHref: "tel:+447490031997",

  bookingUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1HEZeCjTcJEcfz5SIb7evIiHrFITZFNlOkebLYQNkAo2C34uIh-WvICehZ9xQ9bbWuEGZFl33D?gv=true",
  bookingUrlServices:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0phg9irsX_1xKIxPVBLCnGW6S9a8uzsAXv19harHzA80XxlOLZyCrfUX17wBCfTAh94nOO9Dqm?gv=true",

  social: {
    linkedin: "https://www.linkedin.com/company/106166350/admin/dashboard/",
    facebook: "https://www.facebook.com/profile.php?id=61572387026387",
  },
} as const;

export const primaryNav = [
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
] as const;

export const servicesNav = [
  {
    title: "Tech-Driven Bookkeeping",
    path: "/bookkeeping",
    blurb: "Automated entry, reconciliation and reporting",
  },
  {
    title: "Financial Workflow Automation",
    path: "/quickbooks",
    blurb: "QuickBooks and Google Sheets, always in sync",
  },
  {
    title: "UK Taxes",
    path: "/taxes",
    blurb: "VAT, Corporation Tax, Income Tax and PAYE",
  },
] as const;
