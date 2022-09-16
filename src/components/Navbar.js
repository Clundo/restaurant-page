import '../styles/global.css'

const Navbar = ({logo}) => {
    const navElement = document.createElement('nav')
    navElement.id = 'navbar'

    const logoElement = document.createElement('div')
    logoElement.id = 'logo'
    logoElement.innerText = logo

    navElement.appendChild(logoElement)

    return navElement
}

export default Navbar