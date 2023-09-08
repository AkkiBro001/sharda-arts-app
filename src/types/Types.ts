import { Dispatch, MouseEvent, SetStateAction } from "react";

export interface SelectLang {
    value: string,
    label: string,
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
    name: Required<NavMenu | "Sign Up" | "Change Language">,
    path: string,
}




export type RemoveFocusOnElement = (event: MouseEvent<HTMLBodyElement, MouseEvent<Element, MouseEvent>>, 
    activeState: string | boolean, 
    setState: Dispatch<SetStateAction<string | boolean>>, 
    targetElement: HTMLElement) => void;

