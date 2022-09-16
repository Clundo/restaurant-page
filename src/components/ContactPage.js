import OpeningHours from "./OpeningHours";
import Address from "./Address";

const ContactPage = () => {
    const contactPageElement = document.createElement('div')
    contactPageElement.id = 'contact-page'

    const contactPageTitle = document.createElement('h1')
    contactPageTitle.id = 'contact-page-title'
    contactPageTitle.innerText = 'Pop in for a quick bite'

    const detailsSection = document.createElement('div')
    detailsSection.id = 'contact-details-wrapper'

    const imageLink = document.createElement('a')
    imageLink.href = 'https://unsplash.com/photos/iKnUqjHfvUE'
    imageLink.id = 'store-image-link'
    const storeImage = document.createElement('img')
    storeImage.id = 'store-image'
    storeImage.src = 'https://images.unsplash.com/photo-1510226621137-6285ff880db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
    storeImage.alt = 'Cupcake store front'

    imageLink.appendChild(storeImage)

    const textWrapper = document.createElement('div')
    textWrapper.id = 'text-wrapper'

    const openingHours = OpeningHours()

    const address = Address()

    textWrapper.appendChild(openingHours)
    textWrapper.appendChild(address)

    detailsSection.appendChild(imageLink)
    detailsSection.appendChild(textWrapper)

    contactPageElement.appendChild(contactPageTitle)
    contactPageElement.appendChild(detailsSection)
    return contactPageElement

}

export default ContactPage