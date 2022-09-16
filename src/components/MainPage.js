import HeroImage from "./HeroImage";

const MainPage = () => {
    const mainPageElement = document.createElement('div')
    mainPageElement.id = 'main-page'

    const heroElement = document.createElement('div')
    heroElement.id = 'hero-element'

    const heroImage = HeroImage()

    const heroTitleWrapper = document.createElement('div')
    heroTitleWrapper.id = 'hero-title-wrapper'

    const heroTitle = document.createElement('h1')
    heroTitle.id = 'hero-title'
    heroTitle.innerText = 'One for all and all for cupcakes'

    const heroSubtitle = document.createElement('h3')
    heroSubtitle.id = 'hero-subtitle'
    heroSubtitle.innerText = 'Making the world sweeter since 2009'

    heroTitleWrapper.appendChild(heroTitle)
    heroTitleWrapper.appendChild(heroSubtitle)

    heroElement.appendChild(heroImage)
    heroElement.appendChild(heroTitleWrapper)

    mainPageElement.appendChild(heroElement)

    return mainPageElement
}

export default MainPage