import hours from '../lib/openingHours'

const OpeningHour = (parent, item) => {

    const title = document.createElement('p')
    title.innerText = item.title + ':'
    const value = document.createElement('p')
    if(item.isClosed) {
        value.innerText = 'CLOSED'
    } else {
        const fromDate = new Date()
        fromDate.setHours(item.from.split(':')[0])
        fromDate.setMinutes(item.from.split(':')[1] ?? 0)
        fromDate.setSeconds(0)
        const fromTime = fromDate.toLocaleTimeString('default', {timeStyle: 'short'})
        const toDate = new Date()
        toDate.setHours(item.to.split(':')[0])
        toDate.setMinutes(item.to.split(':')[1] ?? 0)
        toDate.setSeconds(0)
        const toTime = toDate.toLocaleTimeString('default', {timeStyle: 'short'})
        value.innerText = fromTime + '-' + toTime
    }
    parent.appendChild(title)
    parent.appendChild(value)
}

const OpeningHours = () => {

    const openingHours = document.createElement('div')
    openingHours.id = 'opening-hours'
    const title = document.createElement('h2')
    title.id = 'opening-hours-title'
    title.innerText = 'Opening Hours'
    openingHours.appendChild(title)
    const gridWrapper = document.createElement('div')
    gridWrapper.className = 'grid-wrapper'
    hours.forEach(hour => OpeningHour(gridWrapper, hour))
    openingHours.appendChild(gridWrapper)
    return openingHours
}
export default OpeningHours