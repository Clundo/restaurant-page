import Navbar from "../components/Navbar";
import onDisplay from "./onDisplay";
import NavMenu from "../components/NavMenu";
import Container from "../components/Container";
import MainPage from "../components/MainPage";
import Footer from "../components/Footer";
import MenuPage from "../components/MenuPage";
import ContactPage from "../components/ContactPage";

const content = (() => {
    const elements = {content: document.getElementById('content')}

    const renderComponent = ({elementName, parentName, newElement}) => {

        const parent = elements[parentName]
        const element = elements[elementName]
        if (element) {
            parent.replaceChild(newElement, element)
        } else {
            parent.appendChild(newElement)
        }
        elements[elementName] = newElement
    }

    return {renderComponent}
})()

const render = (() => {
    const nav = ({logo}) =>  content.renderComponent({
        elementName: 'nav',
        parentName: 'content',
        newElement: Navbar({logo})
    })

    const navMenu = () =>  content.renderComponent({
        elementName: 'navMenu',
        parentName: 'nav',
        newElement: NavMenu(onDisplay.is())
    })

    const activeItem = () => content.renderComponent({
        elementName: 'activeComp',
        parentName: 'content',
        newElement: (() => {
            const active = onDisplay.is()
            const el = document.createElement('div')
            const container = Container()
            container.appendChild(active.mainPage ? MainPage() : active.menuPage ? MenuPage() : active.contactPage ? ContactPage() : el)
            return container
        })()
    })

    const footer = () => content.renderComponent({
        elementName: 'footer',
        parentName: 'content',
        newElement: Footer()
    })

    return {nav, activeItem, navMenu, footer}
})()

export default render