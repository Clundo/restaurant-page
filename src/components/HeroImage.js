const HeroImage = () => {
    const heroImage = document.createElement('img')
    heroImage.id = 'hero-image'
    heroImage.alt = 'Cupcakes'
    heroImage.src = 'https://images.unsplash.com/photo-1615832494873-b0c52d519696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'

    return heroImage
}

export default HeroImage