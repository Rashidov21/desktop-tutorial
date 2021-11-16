const App = {
    data(){
        return {
            a:false,
            b:true,
        }
    }
}

const app = Vue.createApp(App);
app.mount("#app")
// app.component('first-component', {
//     data(){
//         return{
//             name:"First Component | Counter !",
//             count:0
//         }
//     },
//     template: '<button v-on:click="count++">{{name}} — {{ count }}</button>'
// })
//
// app.component("mars", {
//     data(){
//         return{}
//     },
//     template:`
//       <div class="space">
//       <div class="ship">
//         <div class="ship-rotate">
//           <div class="pod"></div>
//           <div class="fuselage"></div>
//         </div>
//       </div>
//       <div class="ship-shadow"></div>
//       <div class="mars">
//         <div class="tentacle"></div>
//         <div class="flag">
//           <div class="small-tentacle"></div>
//         </div>
//         <div class="planet">
//           <div class="surface"></div>
//           <div class="crater1"></div>
//           <div class="crater2"></div>
//           <div class="crater3"></div>
//         </div>
//       </div>
//       <div class="test"></div>
//       </div>`
// })
// app.component("saturn", {
//     data(){
//         return{}
//     },
//     template:`<div class="planet">
//     <div class="wrap">
//       <div class="background"></div>
//       <div class="clouds"></div>
//     </div>
//     <div class="mask"></div>
//     </div>`
// })
// app.component("navbar", {
//     data(){
//         return{
//         }
//     },
//     props:['mars', 'saturn'],
//     template:`
//       <div id="nav">
//         <button @click=" this.mars = !this.mars">Mars</button>
//         <button @click=" this.mars = !this.mars">Saturn</button>
//       </div>
//     `
// })
