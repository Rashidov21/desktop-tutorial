const Slider = {
    data(){
        return{}

    },
    methods:{
        autoSlide(){
            let slides = ["img/air1.jpg","img/air2.jpg","img/air3.jpg"];
            let frame = 0;
            let section = document.getElementById("app");
            if(!frame){
                section.backgroundImage = `${slides[frame]}`;
                frame++
            }
        },
    }
}
Vue.createApp(Slider).mount("#app")