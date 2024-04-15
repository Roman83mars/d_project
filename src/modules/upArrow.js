export const upArrow = () => {
    const services = document.getElementById('services')
    const upArr = document.querySelector('.up')

    window.addEventListener('scroll', () => {
        const top = document.documentElement.scrollTop
        if (services.offsetTop > top) {
            upArr.style.display = 'none'
        } else {
            upArr.style.display = 'block'
        }
    })
    upArr.addEventListener('click', (e) => {
        e.preventDefault()
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    })
}
