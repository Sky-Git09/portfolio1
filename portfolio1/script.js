/*const professionBox = document.getElementById("profession-box");
        let adj=0;
        function myFunction1() {
            professionBox.style.animationPlayState = "paused";
            setTimeout(myFunction2, 3000); // 3000 milliseconds = 3 seconds
        }
        function myFunction2() {
            professionBox.style.animationPlayState = "running";
            setTimeout(myFunction1, 300); // 3000 milliseconds = 3 seconds
        }
        console.log( professionBox.style.animationPlayState)
        
        setTimeout(myFunction1, 4000); // 3000 milliseconds = 3 seconds
*/

window.onscroll = () => {     
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


};



const typed = new Typed('.multi-text', {
    strings: ['Abhaya Mahato', 'Kazuto'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration : 2000,
    delay : 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.multi-text, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-h3, .about p', { origin: 'right' });




