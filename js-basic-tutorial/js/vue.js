

let vm = new Vue({
    el: '#app',
    data: {
        message: 'Hello',
        counter :0,
        name:'Vue.js',
        isActive:true,
        styleObj:{
            color:'red',
            borderRadius:'30px'
        },
        todos: [
              { text: 'Изучить JavaScript' },
              { text: 'Изучить Vue' },
              { text: 'Создать что-нибудь классное' }
            ],
    },
    methods:{
        greet:function(event) {
            alert('Hello' + this.name + '!')
        if(event){
            alert(event.target.tagName)
        }
        }
    },
    computed: {
 
        reversedMessage: function() {
            if (this.message.length > 5){
                return this.todos.push({text:this.message})
            }            
        },
        now: function () {
            let time = new Date();
            return time.getDate()
          }
    }
});

Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">Удалить</button>
    </li>
  `,
  props: ['title']
})

let todo = new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Помыть посуду'
      },
      {
        id: 2,
        title: 'Вынести мусор'
      },
      {
        id: 3,
        title: 'Подстричь газон'
      }
    ],
    nextTodoId: 4
  },
    methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})




let app2 = new Vue({
    el:'#app-2',
    data:{

        dataList:[
            { id: 0, text: 'Mevalar' },
            { id: 1, text: 'Pishloq' },
            { id: 2, text: 'Yana nimadur ?' }
        ],
        parentMessage: 'Родитель',
        items: [
          { message: 'Python' },
          { message: 'JavaScript' },
          { message: 'C++' },
        ],
        object: {
              title: 'How to do lists in Vue',
              author: 'Jane Doe',
              publishedAt: '2016-04-10'
            }
    }
})


