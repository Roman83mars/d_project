export const sendForm = () => {
    const form = document.querySelector('[name="form-callback"]')

    const statusBlock = document.createElement('div')
    const loadText = 'Идет отправка'
    const errorText = 'Ошибка'
    const successText = 'Отправлено'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        });
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('.form-control')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        statusBlock.classList.add('statusBlock')
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {
            sendData(formBody).
                then(data => {
                    statusBlock.textContent = successText

                    formElements.forEach(input => {
                        input.value = ''
                        input.classList.remove('success')
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = errorText
        }
    }

    try {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitForm()
        })
    } catch (error) {
        console.log(error.message);
    }
}
