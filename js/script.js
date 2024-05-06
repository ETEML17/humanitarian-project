
//Display menu mobile
document.addEventListener('DOMContentLoaded', function () {
    // Burger menu action
    const burgerMenu = document.getElementById('burger-menu');
    const menu = document.getElementById('menu');

    burgerMenu.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            menu.style.display = 'none';
        }
    });


    // Back to top of the page
    var button = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    //Change year automatically
    let el = document.getElementById("footer");
    let date = new Date();
    let dateNow = date.getFullYear();
    let newYear = dateNow;
    el.innerHTML = newYear;
});

function makeDonation() {
    var confirmation = window.confirm('En cliquant sur oui, vous serez redirirgé sur le site helloasso');
    
    if (confirmation) {
        window.location.href = "https://www.helloasso.com/associations/hope-in-box/formulaires/1";
    } else {
        window.location.href = "#";
    }
}

function participateToEvent() {
    var confirmation = window.confirm('En cliquant sur oui, vous serez redirirgé sur le site helloasso');
    
    if (confirmation) {
        window.location.href = "https://www.helloasso.com/associations/hope-in-box/evenements/soiree-au-ayers-rock";
    } else {
        window.location.href = "#";
    }
}


