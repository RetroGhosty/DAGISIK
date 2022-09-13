window.addEventListener('scroll', reveal);
window.addEventListener('scroll', fadein);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealtop < windowheight - revealpoint){
            reveals[i]. classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

function fadein(){
    var fadeins = document.querySelectorAll('.reveal-fade-in');

    for(var i = 0; i < fadeins.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = fadeins[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
            fadeins[i]. classList.add('fade-active');
        }
        else{
            fadeins[i].classList.remove('fade-active');
        }
    }
}