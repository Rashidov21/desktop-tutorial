// anime js code

const timelineBlocks = anime.timeline({
    duration:1000,
    easing:'easeOutCubic',
    loop:true,
    direction:"alternate"
});
timelineBlocks.add({
    targets: '.container .item-1',
    translateX: 250,
    borderRadius:function(){return anime.random(0, 50)}
  })
  .add({
    targets: '.container .item-2',
    translateX: 350,
    borderRadius:function(){return anime.random(0, 50)}
  })
  .add({
    targets: '.container .item-3',
    translateX: 450,
    borderRadius:function(){return anime.random(0, 50)}
  }); 

  
// const a = anime(
//     {
//         targets:'.div',
//         keyframes: [
//             {scale:1.3, borderRadius:['50%', '100%'], boxShadow:'0 0 10px 10px #001bae'},

//             // {translateY: -40, background:"#333"},
//             // {translateX: 250,background:"#6f6"},
//             // {translateY: 40,background:"#555"},
//             // {translateX: 0,background:"#5a5"},
//             // {translateY: 0,background:"#1a3"}
//           ],
//           duration: 1000,
//           easing: 'easeOutElastic(1, .8)',
//           direction:'alternate',
//           loop: true
//     }
// );

// translateX: 250,
// translateY: 50
// left: '240px',
// backgroundColor: '#FFF',
// borderRadius: ['0%', '50%'],
// easing: 'easeInOutQuad',
// translateX: 100
// width: {
//     value: '*=2.5',
//     duration: 2000
// },
// translateX: {
//     value: 300,
//     duration: 2000,
//     easing: 'easeInOutQuad'
// },

// loop: true,
// direction: "alternate",

// let elements = document.querySelectorAll(".box")
// const anime1 = anime({
//     targets: elements,
    // animations 
    // translateX: [-900, 550],
    // duration: 2000,
    // rotate: function () { return anime.random(-360, 360); },
    // borderRadius: function () { return ['50%', anime.random(5, 50) + '%']; },
    // duration: function () { return anime.random(1800, 2800); },
    // delay: function () { return anime.random(0, 200); },
    // keyframes: [
    //     {
    //         background: "#ccc",
    //         duration: 400
    //     },
    //     {
    //         background: "#ddd",
    //         duration: 400
    //     },
    //     {
    //         background: "#333",
    //         duration: 400
    //     }
    // ],
    // direction: 'alternate',
    // loop: true

// });
