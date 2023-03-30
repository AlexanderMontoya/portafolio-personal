let nav=false;
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
