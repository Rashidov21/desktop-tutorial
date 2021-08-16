
const ComponentsApp = {
    data(){
        return{
            title:'Components'
        }
    },
    methods: {
        showChange(event) {
            console.log(event.target.value) // will log a value of the selected option
        }
}

}
Vue.createApp(ComponentsApp).component('date-picker', {
    template: `
      <ul class="collection">
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
          <li class="collection-item">Alvin</li>
        </ul>
  `
}).mount('#my-comnponents')

const WaterApp = {
    data(){
        return {
            user_kg:0,
            water:0
        }
    },
    methods:{
        getUserKg:function (){
            if(this.user_kg < 50){
                this.water = 50;
            }
            if (this.user_kg > 50){
                this.water = 150;
            }
            if (this.user_kg > 70){
                this.water = 250;
            }
            if (this.user_kg > 80){
                this.water = 350;
            }
            if (this.user_kg > 90){
                this.water = 450;
            }
        }
    }

}
const app = Vue.createApp(WaterApp).mount('#waterTracker')
window.onload = function (){
    let kg = document.getElementById('kg');
    kg.addEventListener('input', function (){
        app.getUserKg()
    })

}
// const NavbarApp = {
//     data(){
//       return{
//         cartInfo:'Cart is Empty!',
//           info:false,
//
//       }
//     },
//     methods:{
//         showCart:function (){
//             this.info = true
//         },
//         hideCart:function (){
//             this.info = false
//         }
//
//     }
// }
// const app = Vue.createApp(NavbarApp).mount('#navbar')

// const SliderApp = {
//     data(){
//         return {
//             index:0,
//             slides:[
//                 'img/nike1.jpg',
//                 'img/nike2.jpg',
//                 'img/nike3.jpg',
//             ],
//             slide:'img/nike1.jpg',
//
//             leftImg:'',
//             rightImg:'',
//             leftshow:false,
//             rightshow:false,
//         }
//     },
//     methods:{
//         goSlide:function(){
//             setInterval(() =>{
//
//                 if(this.index <= this.slides.length){
//                     this.slide = this.slides[this.index++]
//                     console.log(this.index)
//                 }
//                 if(this.index === this.slides.length){
//                     this.index = 0
//                 }
//
//             },2500)
//         },
//       onscrolImg:function(s){
//
//         if(s > 200){
//             this.leftImg = this.slides[0]
//             this.leftshow = true
//         }
//         if(s > 400){
//             this.rightImg = this.slides[1]
//             this.rightshow = true
//             this.leftshow = false
//         }
//         }
//     },
//
// }
// const app = Vue.createApp(SliderApp).mount('#slider')
//
// document.body.onscroll = function(){
//     let s = window.scrollY
//     console.log(s)
//     app.onscrolImg(s)
// }

// const App = {
//     data() {
//         return {
//             frame:0,
//             slides:[
//               'img/nike1.jpg','img/nike2.jpg','img/nike3.jpg',
//             ],
//             slide:'img/nike1.jpg',
//             moveImg:false
//         }
//     },
//     methods: {
//        startAnimate:function(){
//
//             setInterval(() =>{
//                 if(this.frame <= this.slides.length){
//                     this.slide = this.slides[this.frame++]
//                     this.moveImg = true
//                     if(this.frame === this.slides.length){
//                         this.frame = 0
//                     }
//                 }
//             },3000)
//
//        },
//
//
//     }
//
// }
// const app = Vue.createApp(App);
//
// app.mount('#app');
//
// console.dir(app)
// app.component('blog-post', {
//     data() {
//         return{
//             classNames:['orange','teal','indianred','red','green','pink'],
//             color:''
//         }
//     },
//     methods:{
//         changeColor:function(){
//            let c = Math.floor(Math.random() * this.classNames.length)
//             this.color = this.classNames[c]
//             console.log(this.color)
//         }
//     },
//     template:`
//         <div class="box" :class="color">
//         <a href="#" @click="changeColor" class="btn">change</a>
//         </div>
//     `
// })

// app.component('slider', {
//     data(){
//         return{
//            frame:0,
//             slides:[
//               'img/nike1.jpg','img/nike2.jpg','img/nike3.jpg',
//             ],
//             slide:'img/nike1.jpg'
//         }
//     },
//     template:`
//         <img :src="slide" width="500">
//         <br>
//         <a href="#" class="btn" @click="next">Next</a>
//         <a href="#" class="btn" @click="prev">Prev</a>
//     `,
//     methods:{
//         next:function(){
//             if(this.frame < this.slides.length){
//                 setInterval(() => {
//                   this.slide = this.slides[this.frame++]
//                 },1000)
//
//             }else{
//               this.frame = 0
//             }
//
//             console.log(this.slide)
//
//         },
//         prev:function(){
//             if(this.frame > this.slides.length){
//                 this.slide = this.slides[this.frame--]
//             }else{
//               this.frame = 0
//             }
//             console.log(this.slide)
//         }
//     },
//
// })
