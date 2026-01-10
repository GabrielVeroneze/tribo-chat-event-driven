import type { KeyboardEventHandler } from 'react'

export const isEnter =
    (callback: () => void): KeyboardEventHandler =>
    (event) => {
        if (event.code === 'Enter') {
            callback()
        }
    }

export const isEsc =
    (callback: () => void) =>
    (event: KeyboardEvent): void => {
        if (event.key === 'Escape') {
            callback()
        }
    }
