const InputComponent = {
    template:`<input
        class="input is-small"
        v-model="input"
        :placeholder="placeholder"
        @keyup.enter="monitorEnterKey"
        type="text" />`,
    props:['placeholder'],
    data(){
        return{
            input:'',
        }
    },
    emits: ["add-note"],
    methods:{
        monitorEnterKey(){
            this.$emit('add-note',{
                note:this.input,
                timestamp:new Date().toLocaleDateString()
            });
            this.input = '';
        }
    },
}
const app = {
    data() {
        return {
            notes: [],
            timestamps: [],
            placeholder: 'Enter a note',
        }
    },
    methods: {
        addNote(event) {
            this.notes.push(event.note);
            this.timestamps.push(event.timestamp);
        }
    },
    components:{
        'input-component':InputComponent
    }
}
Vue.createApp(app).mount('#app')