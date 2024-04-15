export const carousel = () => {
    const arrowLeft = document.querySelector('.arrow-left')
    const arrowRight = document.querySelector('.arrow-right')
    let carouselItems = document.querySelectorAll('.services-carousel .col-sm-6')

    let i = 0
    const carouselStart = () => {
        while (i < 3) {
            carouselItems[i].classList.add('element-active')
            ++i
        }
    }
    carouselStart()

    const prevCarouselItem = () => {
        i--
        const cloneCarouselItem = carouselItems[5].cloneNode(true)
        carouselItems[0].before(cloneCarouselItem)
        carouselItems[i].classList.remove('element-active')
        cloneCarouselItem.classList.add('element-active')
        carouselItems = document.querySelectorAll('.services-carousel .col-sm-6')
        i++
        carouselItems[6].remove()
    }

    const nextCarouselItem = () => {
        carouselItems = document.querySelectorAll('.services-carousel .col-sm-6')
        carouselItems.length === 6
        carouselItems[i].classList.add('element-active')
        carouselItems[i - 3].classList.remove('element-active')
        const cloneCarouselItem = carouselItems[0].cloneNode(true)
        carouselItems[5].after(cloneCarouselItem)
        carouselItems[0].remove()
        carouselItems = document.querySelectorAll('.services-carousel .col-sm-6')
    }
    arrowRight.addEventListener('click', nextCarouselItem)
    arrowLeft.addEventListener('click', prevCarouselItem)
}
