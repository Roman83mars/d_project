export const validate = () => {
    const userName = document.querySelector('.modal-callback [name="fio"]')
    const userPhone = document.querySelector('.modal-callback [name="tel"]')
    console.log(userPhone);

    userPhone.addEventListener('input', () => {
        userPhone.value = userPhone.value.replace(/[^\+\d]+/g, '')
        if (userPhone.value !== '') {
            userPhone.classList.add('success')
        }
    })
    userName.addEventListener('input', () => {
        userName.value = userName.value.replace(/[^а-яА-Я]+/g, '')
        if (userName.value !== '') {
            userName.classList.add('success')
        }
    })
}
