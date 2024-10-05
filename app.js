var initialPath = `M 10 100 Q 400 100 800 100`;

var finalPath = `M 10 100 Q 400 100 800 100`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", function (dets) {
  path = `M 10 100 Q ${dets.x} ${dets.y} 800 100`;
  gsap.to("svg path", {
    attr: {
      d: path,
    },
    duration: 0.2,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function () {
  gsap.to(" svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});