
const WeatherApp = {
    data(){
        return{
            data:{},
            city:'',
            temp:'',
            icon:'',
            query:'',
            url:'http://api.weatherapi.com/v1/current.json?key=49fda1aa672f47c1afb53615210608',

        }
    },
    methods:{
        getData:function(){
            const xhr = new XMLHttpRequest();
            xhr.open('GET',`${this.url}&q=${this.query}`)
            xhr.addEventListener('load', ()=>{

                this.data = JSON.parse(xhr.responseText);

                this.city = this.data.location.name
                this.temp = this.data.current.temp_c
                this.icon = this.data.current.condition.icon

            })
            xhr.send();
            this.query = ''
        }
    },
    computed:{
        viewData(){

        }
    }
}
Vue.createApp(WeatherApp).mount('#app')