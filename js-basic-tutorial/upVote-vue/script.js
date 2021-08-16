const submissions = [
    {
        id: 1,
        title: "Abdulloh Abdullaev",
        description: "Oq choynakga ko'k qopqoq kokiga oqda aka.",
        url: "#",
        votes: 16,
        avatar: "../public/images/ava.png",
        submissionImage: "../public/images/upvote.png",
    },
    {
        id: 2,
        title: "Jahongir Otajonov",
        description: "Oq choynakga ko'k qopqoq kokiga oqda aka.",
        url: "#",
        votes: 19,
        avatar: "public/images/ava.png",
        submissionImage: "public/images/upvote.png",
    },
]

const upvoteApp = {
    data() {
        return {
            submissions:submissions
        }
    },
    methods:{
        upVote:function(sub_id){
            console.log(sub_id)
            const sub = this.submissions.find(
                (submission) => submission.id === sub_id
            );
            sub.votes++
        }
    },
    computed:{
        sortSubmissions(){
            return this.submissions.sort((a,b)=>{
                return b.votes - a.votes;
            })
        }
    }
};
Vue.createApp(upvoteApp).mount('#app');

