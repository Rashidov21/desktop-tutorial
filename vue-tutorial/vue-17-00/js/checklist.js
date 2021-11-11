const CheckList = {
    data(){
     return{
         newTask:'',
         tasks:[

         ],
         done:{
             color:"red",
             textTransform:"italic"
         }
     }
    },
    methods:{
        add(event){
            if(event.keyCode === 13){
                this.tasks.push({name:this.newTask, status: false});
                this.newTask = '';
            }
        },
        remove(index){
            this.tasks.splice(index,index)
        }
    }
}
Vue.createApp(CheckList).mount("#app")