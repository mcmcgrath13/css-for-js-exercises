export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
}

export const QUERIES = {
  'phone': `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  'tabletAndBelow': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'laptopAndBellow': `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}
