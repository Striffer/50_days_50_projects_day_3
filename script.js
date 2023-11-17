document.getElementById('menu_open').addEventListener('click', () => {
    document.querySelector('.menu_btn').id = 'menu_btn_open'
    document.querySelector('main').id = 'content_menu'
    document.querySelector('nav ul').id = 'menu_open'
})

document.getElementById('menu_close').addEventListener('click', () => {
    document.querySelector('.menu_btn').id = ''
    document.querySelector('main').id = ''
    document.querySelector('nav ul').id = ''
})