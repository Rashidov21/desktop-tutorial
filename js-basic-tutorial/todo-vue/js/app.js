const app = new Vue({
   el:'#app',
   data:{
        newTodo:'',
        todos:[]
   },
    methods:{
       addTodo(){
            this.todos.push({
                title:this.newTodo,
                done:false
            });
            this.newTodo = '';

       }
    }
});