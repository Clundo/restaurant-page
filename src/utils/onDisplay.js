const onDisplay = (() => {
    let [mainIsActive, menuIsActive, contactIsActive] = [true, false, false]


    const show = (() => {
        const mainPage = () => [mainIsActive, menuIsActive, contactIsActive] = [true, false, false]

        const contactPage = () => [mainIsActive, menuIsActive, contactIsActive] = [false, false, true]

        const menuPage = () => [mainIsActive, menuIsActive, contactIsActive] = [false, true, false]

        return {mainPage, contactPage, menuPage}
    })()

    const is = () => {
        return {mainPage: mainIsActive, menuPage: menuIsActive, contactPage: contactIsActive}
    }

    const now = () => {
        return mainIsActive ? 'Main' : menuIsActive ? 'Menu' : contactIsActive ? 'Contact' : 'None'
    }

    return {show, is, now}
})()

export default onDisplay