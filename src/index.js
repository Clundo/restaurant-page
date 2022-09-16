import render from "./utils/render";
import navItems from "./lib/navItems";
import './styles/global.css'
import onDisplay from "./utils/onDisplay";


render.nav({logo: 'Oh My Sweetness!', navItems})
render.navMenu()
render.activeItem()
render.footer()


//nav

//tabs modules : contact, menu, home

//tab-switching logic with event listeners