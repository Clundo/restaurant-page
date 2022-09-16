import gluten from '../lib/gluten.png'
import egg from '../lib/egg.png'
import lactose from '../lib/milk.png'
import nuts from '../lib/peanut.png'

const MenuItem = ({id, imageUrl, srcUrl, title, description, price, allergens}) => {

    const itemWrapper = document.createElement('div')
    itemWrapper.id = id
    itemWrapper.className = 'item-wrapper'
    const itemLink = document.createElement('a')
    itemLink.href = srcUrl
    itemLink.className = 'item-link'
    const itemImage = document.createElement('img')
    itemImage.src = imageUrl
    itemImage.className = 'item-image'
    const textWrapper = document.createElement('div')
    textWrapper.className = 'item-text-wrapper'
    const itemTitle = document.createElement('h4')
    itemTitle.className = 'item-title'
    itemTitle.innerText = title
    const itemDescription = document.createElement('p')
    itemDescription.className = 'item-description'
    itemDescription.innerText = description

    const detailsWrapper = document.createElement('div')
    detailsWrapper.className = 'item-details'

    const itemAllergens = document.createElement('div')
    itemAllergens.className = 'item-allergens'

    const glutenIcon = document.createElement('img')
    glutenIcon.src = gluten
    glutenIcon.className = 'allergen-icon'
    glutenIcon.alt = 'Contains gluten'
    glutenIcon.title = 'Contains gluten'

    const lactoseIcon = document.createElement('img')
    lactoseIcon.src = lactose
    lactoseIcon.className = 'allergen-icon'
    lactoseIcon.alt = 'Contains lactose'
    lactoseIcon.title = 'Contains lactose'

    const nutsIcon = document.createElement('img')
    nutsIcon.src = nuts
    nutsIcon.className = 'allergen-icon'
    nutsIcon.alt = 'Contains nuts'
    nutsIcon.title = 'Contains nuts'

    const eggIcon = document.createElement('img')
    eggIcon.src = egg
    eggIcon.className = 'allergen-icon'
    eggIcon.alt = 'Contains egg'
    eggIcon.title = 'Contains egg'

    const itemPrice = document.createElement('p')
    itemPrice.className = 'item-price'
    itemPrice.innerText = price

    if(allergens.gluten) itemAllergens.appendChild(glutenIcon)
    if(allergens.lactose) itemAllergens.appendChild(lactoseIcon)
    if(allergens.nuts) itemAllergens.appendChild(nutsIcon)
    if(allergens.egg) itemAllergens.appendChild(eggIcon)

    detailsWrapper.appendChild(itemAllergens)
    detailsWrapper.appendChild(itemPrice)

    textWrapper.appendChild(itemTitle)
    textWrapper.appendChild(itemDescription)
    textWrapper.appendChild(detailsWrapper)

    itemLink.appendChild(itemImage)
    itemWrapper.appendChild(itemLink)
    itemWrapper.appendChild(textWrapper)

    return itemWrapper
}

export default MenuItem