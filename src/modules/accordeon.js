export const accordeon = () => {
    const accordeonItems = document.querySelectorAll('.accordeon>.element')

    accordeonItems.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault()
            if (e.target.classList.contains('title')) {
                if (elem.classList.contains('active')) {
                    elem.classList.remove('active')
                    e.target.nextElementSibling.style.display = 'none'
                } else {
                    accordeonItems.forEach((item) => {
                        item.classList.remove('active')
                        item.lastElementChild.style.display = 'none'
                    })
                    elem.classList.add('active')
                    e.target.nextElementSibling.style.display = 'block'
                }

            }
        })
    })
}
