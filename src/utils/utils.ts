import { SelectLang } from "../types/Types";

export const languages: SelectLang[] = [
    {
        value: 'en',
        label: 'English'
    },
    {
        value: 'hn',
        label: 'हिंदी'
    },
    {
        value: 'mr',
        label: 'मराठी'
    },
];


export const focusTrapped = (e:KeyboardEvent, firstFocusableElement:HTMLElement, lastFocusableElement:HTMLElement) => {
    
    const isTabPressed:boolean = e.key === 'Tab';
  
    if (!isTabPressed) {
      return;
    }
    
    if (e.shiftKey) { // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else { // if tab key is pressed
      if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  }