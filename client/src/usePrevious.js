import { useEffect, useRef } from "react";

export function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    if (ref.current > value) {
        return false;
    }
    return true;
}