import { useEffect } from 'react'

/** Prevent the auto focus behaviour when the window is focused (blue outline fix) */
export function useWindowFocusBlur() {
    useEffect(() => {
        const handleFocus = () => (document.activeElement as HTMLElement)?.blur()
        window.addEventListener('focus', handleFocus)

        return () => window.removeEventListener('focus', handleFocus)
    }, [])
}