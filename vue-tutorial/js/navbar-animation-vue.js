const App = {
    data(){
       return{
           openStatus:false
       }
    },
    methods:{
        open:function (){
            this.openStatus = true
        },
        close:function () {
            this.openStatus = false
        }
    }
    
}
Vue.createApp(App).mount('#navbar')