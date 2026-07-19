// Resolve the public site URL across local / Vercel preview / production.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const keywords = [
  "Hari Pavan",
  "Hari Pavan HR",
  "People and Culture Partner",
  "HR Business Partner",
  "HR Business Partnering",
  "Talent Acquisition",
  "Talent Management",
  "HR Domain Expert",
  "GCC HR",
  "Employee Engagement",
  "Leadership Development",
  "HR Hyderabad",
  "Human Resources Hyderabad",
  "Ex-Jio HR",
  "Ex-Flipkart HR",
  "Gen AI in HR",
  "ANAROCK HR",
];
