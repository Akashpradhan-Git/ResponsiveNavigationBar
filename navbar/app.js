const NavSlide = () => {
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.navlinks');
    console.log(burger);
    console.log(nav);
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

NavSlide();