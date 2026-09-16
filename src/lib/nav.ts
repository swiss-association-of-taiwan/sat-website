export const navLinks = [
  { key: "home", href: "/", label: "Home" },
  { key: "about", href: "/about/", label: "About" },
  { key: "events", href: "/events/", label: "Events" },
  { key: "membership", href: "/membership/", label: "Membership" },
  { key: "impressions", href: "/impressions/", label: "Impressions" },
  { key: "get-involved", href: "/get-involved/", label: "Get Involved" },
  { key: "contact", href: "/contact/", label: "Contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
