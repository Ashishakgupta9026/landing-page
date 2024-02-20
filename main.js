const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(details) {
        // console.log(details);
        // console.log(details.clientX, details.clientY)
        document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(${xscale}, ${yscale})`;
    })
}


let timeout;

function circleSquizzer() {
    let xscale = 1;
    let yscale = 1;

    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function(details) {
        this.clearTimeout(timeout)
        
        let xdiff = details.clientX - xprev;
        let ydiff = details.clientY - xprev;

        xprev = details.clientX;
        yprev = details.clientY;
        
        // console.log(xdiff, ydiff)

        xscale = gsap.utils.clamp(.8, 1.2, xdiff)
        yscale = gsap.utils.clamp(.8, 1.2, ydiff)

        circleMouseFollower(xscale, yscale);
        
        timeout = setTimeout(function() {
            document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px) scale(1, 1)`;

                }, 100);
        
    });
}



function firstPageAnim() {
    let t1 = gsap.timeline();

    t1.from("#navbar", {
        y: '-10',
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.3
    })

    .from("#first_footer", {
        y: '-10',
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var rote_diff = 0;
      
//      elem.addEventListener("mouseleave", function (dets) {
//         gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//         });
//         });
//     });

// list_item.addEventListener("mousemove", function(details) {
//     let diff = details.clientY - list_item.getBoundingClinentRect().top;
//     let rote_diff = details.clientX - rotate;
//     rotate = details.clientX;

//     gsap.to(list_item.querySelector("img"),{
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: details.clientX,
//         rotate: gsap.utils.clamp(-20, 20, rote_diff * 0.5),
//     });
// });



// document.querySelectorAll(".elem").forEach(function (elem) {
//     var rotate = 0;
//     var diffrot = 0;
  
//     elem.addEventListener("mouseleave", function (dets) {
//       gsap.to(elem.querySelector("img"), {
//         opacity: 0,
//         ease: Power3,
//         duration: 0.5,
//       });
//     });
  
//     elem.addEventListener("mousemove", function (dets) {
//       var diff = dets.clientY - elem.getBoundingClientRect().top;
//       diffrot = dets.clientX - rotate;
//       rotate = dets.clientX;
//       gsap.to(elem.querySelector("img"), {
//         opacity: 1,
//         ease: Power3,
//         top: diff,
//         left: dets.clientX,
//         rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
//       });
//     });
//   });


circleMouseFollower();
firstPageAnim();
circleSquizzer();




document.querySelectorAll(".elem").forEach( function(elem){
    elem.addEventListener("mousemove", function(details){

        let rotate = 200;
        let rote_diff = 0;
        
         diff = (details.clientY) - (elem.getBoundingClientRect().top);
        //  getBoundingClientRect() this will give the top, bottom, left, right position value of the div
        // console.log(diff);
        rote_diff = (details.clientX - 300) - (rotate);
        rotate = details.clientX;

        // gsap.utils.clamp(-20, 20, diff)
        gsap.to(elem.querySelector("img"),{
            opacity: 1.2,
            ease: Power4,
            top: diff - 120,
            left: details.clientX- 200,
            rotate: gsap.utils.clamp(-15, 15, rote_diff * 0.3),
            // gsap.utils.clamp()  this is used to put value of variable(rote_diff) within a certain limit(-20, 20)
            
        })
    })

    elem.addEventListener("mouseleave", function (details) {
          gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
          });
        });
})
