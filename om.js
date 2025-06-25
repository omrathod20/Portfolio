
function opennav(){
    document.getElementById("mysidenav").style.width ="360px";
}

function closenav(){
    document.getElementById("mysidenav").style.width ="0";
}

var tl =gsap.timeline();

  tl.from(".home .home-text .filed",{
    x:50,
    scrub:2,
    duration:1

  })

  tl.from(".about-text h3",{
    x:100,
    scrub:2,
    duration:1,
    delay:0.2
  })

  var t2=gsap.timeline();