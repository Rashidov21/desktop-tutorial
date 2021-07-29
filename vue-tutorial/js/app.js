
const App = {
    data() {
        return {
            frame:0,
            slides:[
              'img/nike1.jpg','img/nike2.jpg','img/nike3.jpg',
            ],
            slide:'img/nike1.jpg',
            moveImg:false
        }
    },
    methods: {
       startAnimate:function(){

            setInterval(() =>{
                if(this.frame <= this.slides.length){
                    this.slide = this.slides[this.frame++]
                    this.moveImg = true
                    if(this.frame === this.slides.length){
                        this.frame = 0
                    }
                }
            },3000)

       },


    }

}
const app = Vue.createApp(App);

app.mount('#app');

console.dir(app)
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
