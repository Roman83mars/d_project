export const smoothScroll = () => {
    const topMenuList = document.querySelectorAll('.top-menu>ul>li>a')

    topMenuList.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            const elem = document.getElementById(item.hash.slice(1))
            elem.scrollIntoView({ block: 'start', behavior: 'smooth' })
        })
    })
}
