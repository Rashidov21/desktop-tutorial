
const App = {
	data(){
		return {num:0}
	},
	mounted(){
		setInterval(() =>{
			this.num++
		}, 1000)
	}
}
Vue.createApp(App).mount('#app')