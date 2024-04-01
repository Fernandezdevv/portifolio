var onda1 = document.getElementById('onda1')
var onda1 = document.getElementById('onda2')
var onda1 = document.getElementById('onda3')
var onda1 = document.getElementById('onda4')

window.addEventListener('scroll', function(){
    var rolagempos = window.scrollY

    onda1.style.backgroundPositionX = 400 + rolagempos * 3 + 'px'
    onda2.style.backgroundPositionX = 300 + rolagempos * -3 + 'px'
    onda3.style.backgroundPositionX = 200 + rolagempos * 1 + 'px'
    onda4.style.backgroundPositionX = 100 + rolagempos * -1 + 'px'

})