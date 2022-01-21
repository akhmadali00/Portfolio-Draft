const menuBtn = document.querySelector('.bx'),
      navbar = document.querySelector('.navbar'),
      dayNight = document.querySelector('.dayNight');

    menuBtn.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
        menuBtn.classList.toggle('bx-x');
    })
    dayNight.addEventListener('click', ()=>{
        document.body.classList.toggle('active');
        navbar.classList.toggle('color');

    })