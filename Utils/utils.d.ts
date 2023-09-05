export declare const splitArrayIntoNestedArray: <T>(array: T[], elementsPerNestedArray: number) => T[][];
export declare const incrementedArrayFromNumber: (number: number, step: number) => number[];
export declare const throttle: (cb: () => void, delay?: number) => () => void;
export declare enum Device {
    Mobile = "mobile",
    Tablet = "tablet",
    Desktop = "desktop"
}
export declare const checkBreakpoints: () => Device;
//# sourceMappingURL=utils.d.ts.map