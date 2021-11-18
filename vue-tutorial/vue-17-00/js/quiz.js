const App = {
    data(){
        return{
            questions:[
                {
                    question: 'Asal ari qancha umr koradi?',
                    answers: [
                        '45 kun',
                        '65 kun',
                        '90 kun',
                    ],
                    right: 0, // номер правильного ответа
                },
                {
                    question: 'Oktyabr oyi necha kun?',
                    answers: [
                        '30 kun',
                        '31 kun',
                        '29 kun',

                    ],
                    right: 1, // номер правильного ответа
                },
                {
                    question: 'Bir yilda necha kun bor ?',
                    answers: [
                        '360 kun',
                        '361 kun',
                        '365 kun',

                    ],
                    right: 2, // номер правильного ответа
                },
            ],
            questionIndex:0,
            points:0,
        }
    },
    methods:{
        checkAnswer(question, answerIndex){

            let rightAnswer = question.right;
            if(answerIndex === rightAnswer){
                this.points += 10
            }

        },
        nextQuestion(){
            if(this.questionIndex >= this.questions.length){
                this.questionIndex = 0;
            }else{
                this.questionIndex++
            }
        }
    }
}
Vue.createApp(App).mount("#app")

// Aviakompaniya yolovchilar chipta pularini hisoblay olmay qolishdi ularga yordam berin
// Bir kunda 3 ta reys amalga oshirishadi har bir reysda minimum 60 ta maximum 120 ta
// yolovchi tashiladi, chipta narxi 120 min so’m , aksariyat chiptalar bir hil narxda yani
// ekonom class uchundir. Faqat umumiy yolovchilarni 3% gina biznes klassda uchishadi va
// ular uchun chipta narxi 380 ming som. Siz bir kunda Aviakompaniya qancha chipta
// sotganini va ulardan nechtasi ekanom class va nechtasi biznes class ekanini hisoblang
// summalarni chiqaring.