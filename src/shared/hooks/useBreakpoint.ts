import { useEffect, useState } from "react"

export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState<"phone" | "tablet" | "tabletLg" | "desktop">(() => {
        const width = window.innerWidth
        if (width <= 566) return "phone"
        if (width <= 768) return "tablet"
        if (width <= 996) return "tabletLg"
        return "desktop"
    })

    useEffect(() => {
        const update = () => {
            const width = window.innerWidth
            if (width <= 566) setBreakpoint("phone")
            else if (width <= 768) setBreakpoint("tablet")
            else if (width <= 996) setBreakpoint("tabletLg")
            else setBreakpoint("desktop")
        }

        const debounce = (fn: () => void, ms: number) => {
            let timer: ReturnType<typeof setTimeout>
            return () => {
                clearTimeout(timer)
                timer = setTimeout(fn, ms)
            }
        }

        const onResize = debounce(update, 100)

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize)
    }, [])

    return breakpoint
}