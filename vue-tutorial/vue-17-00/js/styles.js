const App = {
    data(){
        return {
            name:"John",
            surname:"Doe",
            message:'No comment',
            status:false,
            bg:"orange",
            styles:{
                fontSize:"30px",
                borderRadius:"10px",
                background:"orange",
                padding:"5px"
            },
            stylesX:{
                fontSize:"20px",
                borderRadius:"10px",
                background:"red",
                padding:"5px"
            },
            box:{
                padding: "10px",
                borderRadius:"10px",
                background:"lightblue",
            },
            fonts:{
                fontSize:"30px",
                fontWeight:"700",
                textAlign:"center"
            }
        }
    },
    methods:{
        change(){
           // this.bg = "red"
           //  this.check = true
        },

    },
    computed:{
        reversedMessage() {
            return this.message
                .split('')
                .reverse().join('');
        },
        fullName(){
            return `${this.name}-${this.surname}`
        }
    }
}
Vue.createApp(App).mount("#app")