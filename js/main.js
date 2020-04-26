//JS for top-right icons (resume, linkedIn, art-site) fading in
var t1 = new TimelineMax();

t1.from(".mr-3", 3, {
    delay: 0.4,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from(".third-icon", 3, {
    delay: 0.7,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");

//JS for icon text (resume, linkedIn, art-site) fading-in
var t2 = new TimelineMax();

t2.from("a", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}).from("a", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5");


var t3 = new TimelineMax();

t3.from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-title", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

var t4 = new TimelineMax();

t4.from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".my-name", 3, {
    delay: 0.4,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

var t5 = new TimelineMax();
t5.timeScale(42);

t5.from(".welcome-span-w", 4, {
    delay: 2.5,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-e", 4, {
    delay: 2.6,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-l", 4, {
    delay: 2.7,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-c", 4, {
    delay: 2.8,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-o", 4, {
    delay: 2.9,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-m", 4, {
    delay: 3,
    opacity: 0,
    y: 500,
    ease: Expo.easeInOut
}).from(".welcome-span-second-e", 4, {
    delay: 6.5,
    opacity: 0,
    z: 500,
    ease: Expo.easeInOut
}, "-=4");



//welcome paragraphs transition
var t6 = new TimelineMax();

t6.from(".welcome-par-1", 3, {
    delay: 1.75,
    opacity: 0,
    y: 70,
    ease: Expo.easeIn
}).from(".welcome-par-2", 3, {
    delay: 2,
    opacity: 0,
    y: 100,
    ease: Expo.easeIn
}, "-=4");

var t7 = new TimelineMax();

t7.from(".welcome-par-3", 3, {
    delay: 2.25,
    opacity: 0,
    y: 70,
    ease: Expo.easeIn
}).from(".welcome-par-4", 3, {
    delay: 2.15,
    opacity: 0,
    y: 100,
    ease: Expo.easeIn
}, "-=4");

var t8 = new TimelineMax();

t8.from(".header-button", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}).from(".header-button", 3, {
    delay: 0.6,
    opacity: 0,
    x: 50,
    ease: Expo.easeInOut
}, "-=5");

