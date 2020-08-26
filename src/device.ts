const size = {
  miniMobile: "320px",
  mobile: "370px",
  tablet: "1024px",
  laptop: "1024px",
};

export const device = {
  miniMobile: `(max-width: ${size.mobile})`,
  mobile: `(max-width: ${size.tablet})`,
  tablet: `(max-width: ${size.laptop})`,
};
