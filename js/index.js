const barsIcon = document.querySelector('.bars__icons');
const navbar = document.querySelector('.navbar__links');
const close = document.querySelector('.fa-times');
const form = document.querySelectorAll('.sign');
const signUp = document.querySelector('.button_up');



// !mobile navbar codes start

barsIcon.addEventListener('click', () => {
    barsIcon.classList.toggle('active');
    navbar.classList.toggle('active')
})

// !mobile navbar codes end
signUp.addEventListener('click', () => {
    form.forEach(item => {
        item.classList.add('active')
    })
})

close.addEventListener('click', () => {
    form.forEach(item => {
        item.classList.remove('active')
    })
})
