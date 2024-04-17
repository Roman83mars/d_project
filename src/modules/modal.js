import { animate } from './helpers'
export const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const body = document.querySelector('body')
    const modalClose = document.querySelector('.modal-close')

    let statusBlock = document.querySelector('.statusBlock')

    body.addEventListener('click', (e) => {

        if (e.target.closest('.callback-btn') ||
            e.target.closest('.img-wrapper') ||
            e.target.closest('.button-services')) {
            modal.style.display = 'block'
            modalOverlay.style.display = 'block'
            animate({
                duration: 900,
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
        statusBlock = document.querySelector('.statusBlock')
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        if (statusBlock) {
            statusBlock.remove()
        } else {
            return
        }
    })
    modalOverlay.addEventListener('click', (e) => {
        statusBlock = document.querySelector('.statusBlock')
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
        if (statusBlock) {
            statusBlock.remove()
        } else {
            return
        }
    })
}
