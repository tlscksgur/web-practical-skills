const slide = document.querySelectorAll('.slide-in')
let move = 0

setInterval(() => {
    if (move == 3) {
        move = 0
    }
    slide.forEach(sl => {
        sl.style.opacity = '0'
    });
    slide[move].style.opacity = '1'
    move++
}, 2000);