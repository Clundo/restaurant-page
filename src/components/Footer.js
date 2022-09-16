const Footer = () => {
    const footerElement = document.createElement('div')
    footerElement.id = 'footer-wrapper'

    const imageSrc = document.createElement('a')
    imageSrc.href = 'https://unsplash.com'
    imageSrc.alt = 'Unsplash.com'
    imageSrc.innerText = 'Unsplash'
    imageSrc.target = '_blank'

    const iconSrc = document.createElement('a')
    iconSrc.href = 'https://www.flaticon.com/authors/sudowoodo'
    iconSrc.alt = 'sudowoodo @ flaticon'
    iconSrc.innerText = 'sudowoodo @ flaticon'
    iconSrc.target = '_blank'


    const leadingText = document.createElement('span')
    leadingText.innerText = 'All images from '

    const followingText = document.createElement('span')
    followingText.innerText = ', fonts from '

    footerElement.appendChild(leadingText)
    footerElement.appendChild(imageSrc)
    footerElement.appendChild(followingText)
    footerElement.appendChild(iconSrc)
    return footerElement
}

export default Footer