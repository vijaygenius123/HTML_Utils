const modalBtn = document.querySelector('#modal-1-btn')

modalBtn.addEventListener('click', event => {
    const modal = event.target.target;
    if (modal) {
        const element = document.querySelector(modal);
        element.classList.add('active')
        const buttons = element.querySelectorAll('.btn')
        buttons.forEach(button =>
            button.addEventListener('click', event => {
                const modal = event.target.target;
                if (modal) {
                    const element = document.querySelector(modal);
                    element.classList.remove('active')
                }
            })
        )
    }
})

