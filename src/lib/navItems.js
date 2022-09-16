import onDisplay from "../utils/onDisplay";
import render from "../utils/render";


const navItems = [
    {
        id: "main",
        name: 'Home',
        url: '/',
        setActive: () => {
            onDisplay.show.mainPage()
            render.navMenu()
            render.activeItem()
        }
    },
    {
        id: "menu",
        name: 'Menu',
        url: '/menu',
        setActive: () => {
            onDisplay.show.menuPage()
            render.navMenu()
            render.activeItem()
            console.log(onDisplay.is().menuPage)
        }
    },
    {
        id: "contact",
        name: 'Contact',
        url: '/contact',
        setActive: () => {
            onDisplay.show.contactPage()
            render.navMenu()
            render.activeItem()
        }
    }
]

export default navItems