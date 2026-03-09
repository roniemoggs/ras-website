"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
        const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
            setIsMobile(e.matches);

        onChange(mql); // set initial value
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, [breakpoint]);

    return isMobile;
}
