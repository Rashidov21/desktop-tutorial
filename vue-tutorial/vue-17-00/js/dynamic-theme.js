// lesson 3 dynamic Theme
window.onload = function (){
    document.body.className = localStorage.getItem("theme")
}
const Theme = {
    data(){
        return {
            day:true
        }
    },
    methods:{
        night(){
            document.body.className = "grey darken-4";
            localStorage.setItem("theme", "grey darken-4")
            this.day = false;
        },
        light(){
            document.body.className = "grey lighten-5";
            localStorage.setItem("theme", "grey lighten-5")
            this.day = true
        }
    }
}
const app = Vue.createApp(Theme)
app.mount("#theme")