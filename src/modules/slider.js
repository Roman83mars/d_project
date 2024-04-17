export const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.item')

    const timeInterval = 3000

    let currentSlide = 0
    let interval

    slides[0].classList.add('item-active')

    const addDots = () => {
        sliderBlock.insertAdjacentHTML('beforeend', '<ul class="dots"></ul>')
        const dots = document.querySelector('.dots')
        slides.forEach((dot, index) => {
            dot = document.createElement('li')
            dot.classList.add('dot')

            if (index == 0) {
                dot.classList.add('dot-active')
            }
            dots.append(dot)
        })
    }
    addDots()

    const dots = document.querySelectorAll('.dot')

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }
    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }
    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'item-active')
        prevSlide(dots, currentSlide, 'dot-active')
        currentSlide++

        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        nextSlide(slides, currentSlide, 'item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    }
    const startSlide = (timer) => {
        interval = setInterval(autoSlide, timer)
    }
    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault()

        if (!e.target.matches('.dot')) {
            return
        }

        prevSlide(slides, currentSlide, 'item-active')
        prevSlide(dots, currentSlide, 'dot-active')

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }

        nextSlide(slides, currentSlide, 'item-active')
        nextSlide(dots, currentSlide, 'dot-active')
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide()
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide(timeInterval)
        }
    }, true)

    startSlide(timeInterval)
}
