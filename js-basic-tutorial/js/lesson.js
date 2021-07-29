const App = {
	data(){
		
		return{
			slide:'',
			index:0,
			slides:[
				'img/sun.png',
				'img/cloudy.png',
				'img/rain.png',
			],
			colors:['blue','teal','gold','orange']
		}
	},
	methods:{
		next:function(){
			setInterval(() => {
			this.slide = this.colors[this.index]
			console.log(this.slide)
			this.index++
			if(this.index >= this.colors.length){
				this.index = 0
			}
		   },1000)
		}
			
	}
}
const app = Vue.createApp(App);
app.component('slides',{
	props:['slide'],
	data(){
		return{
			count:0
		}
	},
	template:`
		
	`
})
app.mount('#slider')