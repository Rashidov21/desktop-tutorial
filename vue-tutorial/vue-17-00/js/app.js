const Counter = {
    data() {
        return {
            counter: 0,
            message:"Hello world"
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
            if(this.counter > 5){
                this.counter = 0;
            }
        }, 1000)
    },
    methods:{
        plus(){
            this.counter++
            console.log(this.counter)
        },
        minus(){
            this.counter--
            console.log(this.counter)
        },
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    },
}
const app = Vue.createApp(Counter)
app.mount("#app")