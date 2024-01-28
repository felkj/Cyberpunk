const  menuLinks = document.querySelectorAll('.menu a[href^="#"]');

function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior: 'smooth',
    });
    console.log(distanceFromTheTop);
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = getDistanceFromTheTop(event.target);
    nativeScroll(distanceFromTheTop);
    
}

menuLinks.forEach((links) =>{
    links.addEventListener('click', scrollToSection);
});
