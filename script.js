const showMenu = (iconId, navId)=>{
    const icon = document.getElementById(iconId),
    nav = document.getElementById(navId)

    if(icon && nav){
        icon.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        })
        
    }
}
showMenu('nav-icon','nav-menu')
const navLink = document.querySelectorAll('.link')

function linkAction(){

 navLink.forEach(n => n.classList.remove('active'))
 this.classList.add('active')
 const navMenu = document.getElementById('nav-menu')
 navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
