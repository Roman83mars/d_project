import { animate } from './helpers'
export const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const callbackBtn = document.querySelector('.callback-btn')
    const modalOverlay = document.querySelector('.modal-overlay')
    const body = document.querySelector('body')

    const width = document.documentElement.clientWidth

    body.addEventListener('click', (e) => {

        if (e.target.closest('.callback-btn') || e.target.closest('.callback-btn')) {
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
    modal.addEventListener('click', (e) => {

    })
}
