const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');
    const navul = document.querySelectorAll('.navul li');

    burger.addEventListener('click', ()=> {
        //menu nyitas
        nav.classList.toggle('nav-active');
        //elemek megjelenitese
        navul.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
            link.style.animation = `navulFade 1s ease forwards 0.25s`
            }
        });
        
    });
}

navSlide();