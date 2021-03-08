
export const COLOR = {
  REBECCA_PURPLE: "#663399",
  BLUE: "#1a58cc",
  BLACK: "#191919",
  GRAY: "#8B8B8B",
  WHITE: "#FCFCFC",
};

export const PHOTOGRAPHER_NAV_ITEMS = [
  { path: "/portrait", label: "Portrait" },
  { path: "/snap", label: "Snap" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export const SP = "@media screen and (max-width: 1024px)";

export const rewritePathToLabel = (text: string) => {
  const label = text.slice(1).replace('/', '')
  const firstCharUpperCaselabel = label.charAt(0).toUpperCase() + label.slice(1);
  return firstCharUpperCaselabel;
}