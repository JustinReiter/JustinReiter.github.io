import { RefObject, useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: RefObject<HTMLElement>) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    , {threshold: 0.8})


    useEffect(() => {
        if (ref.current){
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect()
    }, [])

    return isIntersecting;
}
