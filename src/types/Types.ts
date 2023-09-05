export interface SelectLang {
    value: string,
    label: string,
}

export interface focusTrappedProps {
    e: KeyboardEvent,
    firstFocusableElement: HTMLElement,
    lastFocusableElement: HTMLElement,
}