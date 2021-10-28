// lesson 1
// const Counter = {
//     data() {
//         return {
//             counter: 0,
//             message:"Hello world"
//         }
//     },
//     mounted() {
//         setInterval(() => {
//             this.counter++
//             if(this.counter > 5){
//                 this.counter = 0;
//             }
//         }, 1000)
//     },
//     methods:{
//         plus(){
//             this.counter++
//             console.log(this.counter)
//         },
//         minus(){
//             this.counter--
//             console.log(this.counter)
//         },
//         reverseMessage() {
//             this.message = this.message.split('').reverse().join('')
//         }
//     },
// }
// const app = Vue.createApp(Counter)
// app.mount("#app")

// lesson 2

// const MyApp = {
//     let n = 10;
//     data(){
//         return {
//             name:null,
//             myClass:"test",
//             seen:true,
//             items:[
//                 {name:"Ball"},
//                 {name:"Bag"},
//                 {name:"Water"}
//             ],
//             names:["John", "Mike"],
//         }
//     },
//     methods:{
//         changeClass(){
//             this.myClass = "red"
//         },
//     }
// }
// v-on: >> metodlarga Vue orqali javob berish
// v-if: >> true/false ga tekshiruv, display : none/block
// v-else >> agar v-if true qiymat kemas ishlaydi : display:block;
// v-bind: >> js bilan dom elementni bog'lash
// v-for: >> js dagi massiv ni forga tashash uchun

// const app = Vue.createApp(MyApp)
//
//
// app.component("list-item",{
//     props: ['todo'],
//     template: `<li>{{ todo.text }}</li>`
// })
// app.component("search-bar", {
//     template: `
//         <form action="#">
//         <input type="text">
//         <br>
//         <input type="submit" value="Search">
//         </form>`
// })
// app.mount("#app")
// console.log(app.$data.myClass)

