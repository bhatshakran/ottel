import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config'; // Fix the path

const fullConfig = resolveConfig(tailwindConfig);

export const getBreakpointValue = (value: String): number | undefined => {
  if (fullConfig.theme?.screens) {
    return parseInt(fullConfig.theme.screens[value].replace('px', ''), 10);
  }
};

export const getCurrentBreakpoint = (): String | null => {
  let currentBreakpoint: string;
  let biggestBreakpointValue = 0;
  if (typeof window !== 'undefined') {
    for (const breakpoint of Object.keys(fullConfig.theme.screens)) {
      const breakpointValue = getBreakpointValue(breakpoint);
      if (
        breakpointValue > biggestBreakpointValue &&
        window.innerWidth >= breakpointValue
      ) {
        biggestBreakpointValue = breakpointValue;
        currentBreakpoint = breakpoint;
      }
    }
    return currentBreakpoint;
  } else {
    return null;
  }
};
