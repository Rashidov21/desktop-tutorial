const App = {
    data(){
        return {
            hello:"Welcome",
            num:10,

            num1: 1,
            num2: 2,
            num3: 3,
        }
    },
    methods:{
        showMessage(){
            alert(this.hello)
        }
    }
}
Vue.createApp(App).mount("#app")







const Task4 = {
    data(){
        return{
            num1: 1,
            num2: 2,
            num3: 3,
            status:true,
            show:true,
            hide:false
        }
    },
    methods:{
        sum(){
            alert(this.num1 + this.num2 + this.num3);
        },
        hideElem(){
            this.show = false;
            this.hide = true;
        },
        showElem(){
            this.show = true;
            this.hide = false;
        }
    }
}

Vue.createApp(Task4).mount("#task4")
const Form = {
    data(){
        return{
            message:"",
            check:false,
            lang:[],
            type:"",
            choiceLang:'',
            mySelect:''
        }
    },
    methods:{
        checkLength(){
            if(this.message.length > 8){
                alert("error!")
            }
        },
        // change(){
        //     if(this.choiceLang === 'en'){
        //         this.choiceLang = "Your language is English"
        //     }
        //     if(this.choiceLang === 'ru'){
        //         this.choiceLang = "Your language is Russian"
        //     }
        //     if(this.choiceLang === 'uz'){
        //         this.choiceLang = "Your language is Uzbek"
        //     }
        // }
    }
}
Vue.createApp(Form).mount("#forms")