export const splitArrayIntoNestedArray = <T>(array: T[], elementsPerNestedArray: number) => {
    return array.reduce((acc: T[][], cur: T, idx: number) => {
      if (idx % elementsPerNestedArray === 0) {
        acc.push([cur]);
      } else {
        acc[acc.length - 1].push(cur);
      }
      return acc;
    }, []);
  };
  
  export const incrementedArrayFromNumber = (number: number, step: number): number[] =>
    Array.from(Array(number), (_: any, i: number) => i + step);

  export const throttle = (cb: () => void, delay = 100) => {
    let shouldWait = false;
  
    return (...args: []) => {
      if (shouldWait) return;
  
      cb(...(args as []));
      shouldWait = true;
      setTimeout(() => {
        shouldWait = false;
      }, delay);
    };
  };
  
  export enum Device {
    Mobile = 'mobile',
    Tablet = 'tablet',
    Desktop = 'desktop'
  }
  
  export const checkBreakpoints = () => {
    const breakpoints = {
      mobile: 32,
      tablet: 48,
      desktop: 72
    };
  
    return matchMedia(`(min-width: ${breakpoints.desktop}rem)`).matches
      ? Device.Desktop
      : matchMedia(`(min-width: ${breakpoints.tablet}rem)`).matches
      ? Device.Tablet
      : Device.Mobile;
  };