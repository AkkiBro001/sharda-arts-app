import { NavMenuForGuest, NavMenuForUser, NavMenuDefault } from "../../types/Types";


export const DefaultNavMenu:NavMenuDefault[]  = [
    {
        name: "Home",
        path: '/',
    },
    {
        name: "Services",
        path: '/',
    },
    {
        name: "Categories",
        path: '/',
    },
    {
        name: "About Us",
        path: '/',
    },
    {
        name: "Contact Us",
        path: '/',
    },
    
]


export const UserNavMenu:NavMenuForUser[]  = [

    ...DefaultNavMenu,
    {
        name: "My Orders",
        path: '/',
    },
    {
        name: "Profile",
        path: '/',
    },
    {
        name: "Change Language",
        path:"/choose-language",
    },
    {
        name: "Logout",
        path: '/',
    },
    
]



export const GuestNavMenu:NavMenuForGuest[]  = [
    ...DefaultNavMenu,
    {
        name: "Change Language",
        path:"/choose-language",
    },
    {
        name: "Sign Up",
        path: '/',
    },
]


const GuestMenuList = ["Sign Up", "Change Language"]
export const GusetMenuForDesktop = GuestNavMenu.filter(menu => GuestMenuList.includes(menu.name))


const UserMenuList = ["My Orders", "Profile","Change Language","Logout"]
export const UserMenuForDesktop = UserNavMenu.filter(menu => UserMenuList.includes(menu.name))






