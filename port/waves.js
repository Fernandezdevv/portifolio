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

var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=> 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
   item.addEventListener('click' , selectLink)
)

//expandir menu

var porExp = document.querySelector('#porExp')
var menuSide = document.querySelector('.menu-lat')

porExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})