import navItems from "../lib/navItems";

const NavMenu = (active) => {

    const menuElement = document.createElement('ul')
    menuElement.id = 'nav-menu'

    console.log('navMenu render')
    navItems.forEach(item => {
        const menuLi = document.createElement('li')
        menuLi.className = 'menu-link'
        const menuLink = document.createElement('a')
        menuLink.id = item.id.toLowerCase().replace(' ', '-')
        menuLink.className = active[item.id.toLowerCase() + 'Page'] ? 'active' : 'not-active'
        menuLink.innerText = item.name
        menuLink.onclick = item.setActive
        menuLi.appendChild(menuLink)
        menuElement.appendChild(menuLi)
    })
    return menuElement
}

export default NavMenu