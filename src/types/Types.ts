import { Dispatch, MouseEvent, SetStateAction } from "react";

//! <<========================= Type for Header Component ======================================>>

export interface SelectLang {
    value: string,
    label: string,
}

export interface ShowUserMenuProps {
    showUserMenu: boolean,
    setShowUserMenu: Dispatch<SetStateAction<boolean>>
}

export type ShowMobileMenu = "" | "slide-out-top" | "slide-in-top"
export interface ShowMobileMenuProps {
    showMobileMenu: ShowMobileMenu,
    setShowMobileMenu: Dispatch<SetStateAction<ShowMobileMenu>>
}


type NavMenu = "Home" | "Services" | "About Us" | "Contact Us" | "Categories";

export interface NavMenuDefault{
    name: NavMenu,
    path: string,
}

export interface NavMenuForUser{
    name: Required<NavMenu | "My Orders" | "Profile" | "Change Language" | "Logout">,
    path: string,
}


export interface NavMenuForGuest{
    name: Required<NavMenu | "Sign In" | "Change Language">,
    path: string,
}




export type RemoveFocusOnElement = (event: MouseEvent<HTMLBodyElement, MouseEvent<Element, MouseEvent>>, 
    activeState: string | boolean, 
    setState: Dispatch<SetStateAction<string | boolean>>, 
    targetElement: HTMLElement) => void;

