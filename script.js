Shery.imageEffect("#back", {
  style: 4,
  config: {
    a: { value: 0, range: [0, 30] },
    b: { value: -0.9, range: [-1, 1] },
    zindex: { value: "", range: [-9999999, 9999999] },
    aspect: { value: 2.148190111735243 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 0.99, range: [0.1, 5] },
    durationIn: { value: 0.99, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.58, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.4, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.38, range: [0, 2] },
    noise_scale: { value: 17.36, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var index = 0;
  var animate = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (!animate) {
      animate = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animate = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
var elems = document.querySelectorAll("#img-box");
elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll(".imgs");
  var index = 0;
  var animate = false;
  document.querySelector("#main").addEventListener("click", function () {
    if (!animate) {
      animate = true;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animate = false;
        },
      });
      index === h1s.length - 1 ? (index = 0) : index++;
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: Expo.easeInOut,
        duration: 1,
      });
    }
  });
});
