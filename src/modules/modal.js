import { animate } from './helpers'
export const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const body = document.querySelector('body')
    const modalClose = document.querySelector('.modal-close')

    const width = document.documentElement.clientWidth

    body.addEventListener('click', (e) => {

        if (e.target.closest('.callback-btn') ||
            e.target.closest('.img-wrapper') ||
            e.target.closest('.button-services')) {
            modal.style.display = 'block'
            modalOverlay.style.display = 'block'
            animate({
                duration: 1500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    modal.style.opacity = progress
                    modal.style.left = (progress * 100 - 50) + '%'
                }
            });
        }

    })
    modalClose.addEventListener('click', (e) => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
    })
    modalOverlay.addEventListener('click', (e) => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
    })
}
