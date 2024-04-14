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
        console.log(carouselItems);
    }

    const nextCarouselItem = () => {
        if (i < carouselItems.length) {
            carouselItems[i].classList.add('element-active')
            carouselItems[i - 3].classList.remove('element-active')
            i++
        } else {
            i--
            const cloneCarouselItem = carouselItems[0].cloneNode(true)
            carouselItems[5].after(cloneCarouselItem)
            cloneCarouselItem.classList.add('element-active')
            carouselItems[i - 2].classList.remove('element-active')
            carouselItems[0].remove()
            carouselItems = document.querySelectorAll('.services-carousel .col-sm-6')
            i++
        }
        console.log(carouselItems);
    }
    arrowRight.addEventListener('click', nextCarouselItem)
    arrowLeft.addEventListener('click', prevCarouselItem)
}
