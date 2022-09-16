import menuItems from "../lib/menuItems";
import MenuItem from "./MenuItem";

const MenuPage = () => {
    const menuPageElement = document.createElement('div')
    menuPageElement.id = 'menu-page'

    const menuPageTitle = document.createElement('h1')
    menuPageTitle.id = 'menu-page-title'

    menuPageTitle.innerText = 'Sample our menu'


    const menuItemsElement = document.createElement('div')
    menuItemsElement.id = 'menu-items-wrapper'


    menuItems.forEach((i, j) => {
        const item = MenuItem(i)
        menuItemsElement.appendChild(item)
        if(j !== menuItems.length -1) {
            const hr = document.createElement('hr')
            hr.className = 'hr'
            menuItemsElement.appendChild(hr)
        }

    })

    menuPageElement.appendChild(menuPageTitle)
    menuPageElement.appendChild(menuItemsElement)

    return menuPageElement
}

export default MenuPage