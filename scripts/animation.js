window.addEventListener('scroll', function(){
    // declaration des variables
    var section2 = document.getElementById('section2');
    var container = document.getElementById('container');
    var context = document.getElementById('context');
    var question = document.getElementById('question');
    var section2Position = section2.getBoundingClientRect().top;
  
    // animation de la section 2
    if(section2Position <= 600){
        container.style.animation = "appearFromLeft 2s ease-in-out forwards";
        context.style.animation = "appearFromLeft 2s ease-in-out forwards";
        question.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});

window.addEventListener('scroll', function(){
    // declaration des variables
    var titreG1 = document.getElementById('titreG1');
    var question1 = document.getElementById('question1');
    var section3 = document.getElementById('section3');
    var containerG1 = document.getElementById('containerG1');
    var explication1 = document.getElementById('Explication1');
    var graphique1 = document.getElementById('plot1');
    var section3Position = section3.getBoundingClientRect().top;
  
    // animation du graphique 1
    if(section3Position <= 700){
        titreG1.style.animation = "appearFromTop 2s ease-in-out forwards";
        question1.style.animation = "appearFromTop 2s ease-in-out forwards";
    }
    if(section3Position <= 600){
        containerG1.style.animation = "appearFromLeft 2s ease-in-out forwards";
        explication1.style.animation = "appearFromLeft 2s ease-in-out forwards";
        graphique1.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});

window.addEventListener('scroll', function(){
    // declaration des variables
    var section4 = document.getElementById('section4');
    var containerG2 = document.getElementById('containerG2');
    var explication2 = document.getElementById('Explication2');
    var graphique2 = document.getElementById('plot2');
    var section4Position = section4.getBoundingClientRect().top;
  
    // animation du graphique 2
    if(section4Position <= 700){
        titreG2.style.animation = "appearFromTop 2s ease-in-out forwards";
        question2.style.animation = "appearFromTop 2s ease-in-out forwards";
    }
    if(section4Position <= 600){
        containerG2.style.animation = "appearFromLeft 2s ease-in-out forwards";
        explication2.style.animation = "appearFromLeft 2s ease-in-out forwards";
        graphique2.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});

window.addEventListener('scroll', function(){
    // declaration des variables
    var section5 = document.getElementById('section5');
    var containerG3 = document.getElementById('containerG3');
    var explication3 = document.getElementById('Explication3');
    var graphique3 = document.getElementById('plot3');
    var section5Position = section5.getBoundingClientRect().top;
  
    // animation du graphique 3
    if(section5Position <= 700){
        titreG3.style.animation = "appearFromTop 2s ease-in-out forwards";
        question3.style.animation = "appearFromTop 2s ease-in-out forwards";
    }
    if(section5Position <= 600){
        containerG3.style.animation = "appearFromLeft 2s ease-in-out forwards";
        explication3.style.animation = "appearFromLeft 2s ease-in-out forwards";
        graphique3.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});

window.addEventListener('scroll', function(){
    // declaration des variables
    var section6 = document.getElementById('section6');
    var containerG4 = document.getElementById('containerG4');
    var explication4 = document.getElementById('Explication4');
    var graphique4 = document.getElementById('plot4');
    var section6Position = section6.getBoundingClientRect().top;
  
    // animation du graphique 4
    if(section6Position <= 700){
        titreG4.style.animation = "appearFromTop 2s ease-in-out forwards";
        question4.style.animation = "appearFromTop 2s ease-in-out forwards";
    }
    if(section6Position <= 600){
        containerG4.style.animation = "appearFromLeft 2s ease-in-out forwards";
        explication4.style.animation = "appearFromLeft 2s ease-in-out forwards";
        graphique4.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});

window.addEventListener('scroll', function(){
    // declaration des variables
    var section7 = document.getElementById('section7');
    var containerG5 = document.getElementById('containerG5');
    var explication5 = document.getElementById('Explication5');
    var graphique5 = document.getElementById('plot5');
    var section7Position = section7.getBoundingClientRect().top;
  
    // animation du graphique 5
    if(section7Position <= 700){
        titreG5.style.animation = "appearFromTop 2s ease-in-out forwards";
        question5.style.animation = "appearFromTop 2s ease-in-out forwards";
    }
    if(section7Position <= 600){
        containerG5.style.animation = "appearFromLeft 2s ease-in-out forwards";
        explication5.style.animation = "appearFromLeft 2s ease-in-out forwards";
        graphique5.style.animation = "appearFromLeft 2s ease-in-out forwards";
    }
});


