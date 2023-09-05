export const splitArrayIntoNestedArray = (array, elementsPerNestedArray) => {
    return array.reduce((acc, cur, idx) => {
        if (idx % elementsPerNestedArray === 0) {
            acc.push([cur]);
        }
        else {
            acc[acc.length - 1].push(cur);
        }
        return acc;
    }, []);
};
export const incrementedArrayFromNumber = (number, step) => Array.from(Array(number), (_, i) => i + step);
export const throttle = (cb, delay = 100) => {
    let shouldWait = false;
    return (...args) => {
        if (shouldWait)
            return;
        cb(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
};
export var Device;
(function (Device) {
    Device["Mobile"] = "mobile";
    Device["Tablet"] = "tablet";
    Device["Desktop"] = "desktop";
})(Device || (Device = {}));
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
//# sourceMappingURL=utils.js.map