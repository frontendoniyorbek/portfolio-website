const nav = document.querySelector('.sitenav')
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnImg = document.querySelector('.toggle-btn img')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')

    if (nav.classList.contains('hidden')) {
        toggleBtnImg.src = '../images/close.svg'
    } else {
        toggleBtnImg.src = '../images/menu.svg'
    }
})