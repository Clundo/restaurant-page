const Address = () => {
    const address = document.createElement('div')
    address.id = 'address'

    const title = document.createElement('h2')
    title.id = 'address-title'
    title.innerText = 'Address'

    const gridWrapper = document.createElement('div')
    gridWrapper.className = 'grid-wrapper'

    const addressLineTitle = document.createElement('p')
    addressLineTitle.innerText = 'Street:'
    const addressLineValue = document.createElement('p')
    addressLineValue.innerText = 'Totally real street 1'

    const zipCodeTitle = document.createElement('p')
    zipCodeTitle.innerText = 'Zip Code:'
    const zipCodeValue = document.createElement('p')
    zipCodeValue.innerText = '12345'

    const cityTitle = document.createElement('p')
    cityTitle.innerText = 'City:'
    const cityValue = document.createElement('p')
    cityValue.innerText = 'PleasantVille'

    const countryTitle = document.createElement('p')
    countryTitle.innerText = 'Country:'
    const countryValue = document.createElement('p')
    countryValue.innerText = 'Wonderland'

    address.appendChild(title)
    gridWrapper.appendChild(addressLineTitle)
    gridWrapper.appendChild(addressLineValue)
    gridWrapper.appendChild(zipCodeTitle)
    gridWrapper.appendChild(zipCodeValue)
    gridWrapper.appendChild(cityTitle)
    gridWrapper.appendChild(cityValue)
    gridWrapper.appendChild(countryTitle)
    gridWrapper.appendChild(countryValue)
    address.appendChild(gridWrapper)

    return address
}

export default Address