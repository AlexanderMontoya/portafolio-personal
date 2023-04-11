let nav=false;

const enlaces = document.querySelectorAll('.nav__responsive .nav__items, .nav__button');
enlaces.forEach((enlace,i)=>{
    enlaces[i].addEventListener('click',()=>{viewNav()})
})

function viewNav(){
    if(nav){
        document.getElementById('nav__responsive').style.transform="translateX(100%)"
        nav=false;
    }else{
        document.getElementById('nav__responsive').style.transform="translateX(0%)"
        nav=true;
    }
}

document.addEventListener('scroll', ()=>{
    const nav=document.querySelector('nav');
    if(window.scrollY>100){
        nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
})
