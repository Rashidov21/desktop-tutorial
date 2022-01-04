function XYTranslate() {
    // anime({
    //     targets: '.box',
    //     translateX: 250,
    //     translateY: 250,
    // });

    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 2000
    });
    tl.add({
            targets: '.box',
            rotate: {
                value: function() {
                    return anime.random(0, 270);
                },
                duration: 3000,
                easing: "easeInOutCirc",
                direction: "alternate",
            },
        })
        .add({
            targets: '.square',
            rotate: {
                value: function() {
                    return anime.random(0, 270);
                },

                duration: 3000,
                easing: "easeInOutCirc",
                direction: "reverse",
            },
        })
        // anime({
        //     targets: '.box',
        //     // borderRadius: ['0%', '100%'],
        //     // scale: 1.5,
        //     rotate: {
        //         value: 150,
        //         duration: 3000,
        //         easing: "easeInOutCirc",
        //         direction: "alternate",
        //     },
        //     translateX: {
        //         value: 80,
        //         duration: 2000,
        //         easing: "easeInOutCirc"
        //     },
        //     keyframes: [
        //         { translateY: -40 },
        //         { translateX: 250 },
        //         { translateY: 40 },
        //         { translateX: 0 },
        //         { translateY: 0 }
        //     ],
        //     transformOrigin: "center",
        //     easing: 'easeInOutQuad',
        //     delay: 1000,
        //     duration: 5000,
        //     loop: true,
        // });
}

// function LiAnime() {
//     let li = document.querySelectorAll("li")
//     anime({
//         targets: li,
//         rotate: 10,
//         translateY: 100,
//         duration: 3000
//     })
// }
// LiAnime()

new Typewriter('#typewriter', {
    strings: ['AnimeJS', 'Bulma'],
    autoStart: true,
    loop: true,

});

new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    css3: true,
    scrollingSpeed: 700,
    easing: 'easeInOutCubic',
    navigation: true,
    navigationPosition: 'right',
    slidesNavigation: true,
    slidesNavPosition: 'right',
    slideSelector: '.slide',
    // sectionsColor: ["red", "yellow", "black", "blue"]
});