import {useEffect} from "react";

export function useinItialEffect(callback: () => void) {
    useEffect(() => {
        callback();
    }, [])
}
