// Dastur 
// 1-ma'lumotlarni qabul qiladi 2,2 
// 2- ularni qayta ishlaydi : 2+2
// 3- natijani saqlaydi
// 4- natijani qaytaradi

// var , let , const 
// O'zgaruvchi bu kompyuer xotirasidagi katakchalarni biror bir nom sotiga biriktirish
// var x = 10; // ES5  >> EcmaScript 2009
// let y = 15; // ES6 >> EcmaScript 2015


// const z = 3.14 // ES6 >> EcmaScript 2015
// const - bu konstanta uni qiymati ozgarmaydi 

// var a = "apple";
// var a = "samsung";
// console.log(a + " company"); // samsung company

// let phone = "Galaxy Z Fold"
// phone = "Galaxy A52"
// console.log(phone)

// let x,y,z;
// x = 10
// y = 20
// z = 30
// console.log(x + y + z) // console.log(10 + 20 + 30) >> 60
// let name = "John"
// let age = 15
// let language = "Javascript"
// console.log(name + " " + age + " " + language)

// Nomlash qoidalri
// 1-ingliz tilida 
// 2- mantiqan to'g'ri 
// 3-kichik harflar bilan 
// 4-uzundan uzun emas 
// 5-qisqa lo'nda 

// let userprofilephotourl; // xato
// let userProfilePhotoUrl; // shunisi ma'qul Camel Case
// let user_profile_photo_url; // bu ham yaxshi

// let user1 = "john" // togri , yaxshi
// let u2ser = "mike" // togri lekin  yaxshi emas 
// let 2user = "david" // xato
// let User = "sara" // togri lekin yaxshi emas

// const pi = 3.14
// pi = 2.14
// console.log(pi) //xato

// let COLOR = "#fff" // constanta 
// COLOR = "#000"
// console.log(COLOR) //#000

// Shu nomlar bilan ozgaruvchi ochib bolmaydi  
// var , let , const , if , else , catch , try, function, break , while 
// for, class , return , script , continue

// Nom topish uchun oson usul
// Bu nima qiymat saqlaydi savoliga javob topish ! 
// let userAge = 36

// console.log(2 + 2);
// alert(2 + 2) // brauzerda alert oynasini ochadi
// prompt() // input oynasini
// confirm() // tasdiqlash oynasini ochadi

// if(confirm("ok or cancel")){
//     alert("OK")
// }else{
//     alert("CANCEL")
// }

// let num1 = +prompt("birinchi son")
// let num2 = +prompt("ikkinchi son")
// console.log(num1 + num2);

// + qoshish
// - ayirish
// / bolish 
// * kopaytirish
// ** daraja

// task 1
// let a = +prompt("Tomonini kirit")
// console.log("Perimetr = " ,4*a)

/*
fdfd
fdfdfd
SVGFEDropShadowElementf
*/

// DATA TYPES >> Ma'lumot turlari
// Number() *
// Infinity()*
// BigInt()*
// NaN *
// String()
// Boolean(),
// undefined, null, Object()

// let x = 10; // Number >> son , Butun son 
// let y = 10.2 // Number >> son 
// let z = -5 // Number
// Math 
// let age = prompt("your age ?\n")
// let a = "15"
// console.log(182 - a) // NaN
// console.log(182 - Number(a)) // 167
// let b = 12.5 // number
// console.log(typeof String(b)) // string
// let num = 5.3;
// console.log(typeof num.toFixed()); //5 = string
// console.log(typeof num.toString()); // '5' = string
// console.log(Math.PI) // 3.14
// console.log(Math.pow(2,2)) //4 pow bu darajaga kotarish
// console.log(Math.ceil(2.3)) //3 ceil yaxlitlash tepaga qarab
// console.log(Math.floor(2.7)) //2 floor yaxlitlash pastga qarab
// console.log(Math.round(2.7)) // 3
// round agara qoldigi 5 dan katta bolsa tepaga qarab 
// aks holda pastga qarab yaxlitlash 
// let randomNumber = Math.random() // 0 bilan 1 ni orasida tasodifiy bitta son
// console.log(Math.round(randomNumber)) // 1 yoki 0
// console.log( Math.round(Math.random() * 5 + 10)); //10 bilan 15 ni orasida

// console.log(2 + 2) //4
// console.log(10 - 2) // 8
// console.log(10 / 2) // 5
// console.log(10 * 2) // 20
// console.log(10 ** 2) // 100
// console.log(7 % 2) // 1

// console.log(2 + 2 * 5) // 12
// console.log((2 + 2) * 5) // 20
// console.log(2 * "apple") //NaN Not a Number >> Son emas
// console.log("olma" / 2) //NaN Not a Number >> Son emas
// console.log("olma" + 2) //olma2

// console.log(x) // 10
// console.log(typeof x) // number typeof bu ozgaruvchini turini korsatadi
// console.log(1 / 0) // Infinity
// BigInt >> Big Integer >> Katta butun sonlar = -2 ** 53 darajasi dan to 2 53 darajasigacha


// String 
// let str1 = "Javascript"// >>>>> JavaScripT
// console.log(str1.length); // 10 belgilar soni
// console.log("Java" + "S" + "crip" + "T")
// console.log(str1[0] + str1[1] + str1[2] + str1[3] + str1[4].toUpperCase())
// console.log(str1.toLowerCase()); // kichik harflar
// console.log(str1.toUpperCase()); // katta harflar
// console.log(str1[0]);//J
// console.log(str1[1]);//a
// console.log(str1[2]);//v
// console.log(str1[3]);//a
// console.log(str1[4]);//s
// console.log(str1[5]);//c
// console.log(str1[6]);//r
// console.log(str1[7]);//i
// console.log(str1[8]);//p
// console.log(str1[9]);//t
// let str2 = 'Javascript vs Python'
// let str3 = `Javascript vs ${str1}` // ES6 ${} >> ozgaruvchini qiymatini string ga joylash
// console.log(str1 + " " + str2 + " " + str3);

// let str = "-324234"
// console.log(typeof str) // string

// let s = "Javascript \n is  \tweb programming langauge"
// // \n - yangi qatorga otish
// // \t - tab 
// console.log(s)
// let user = `John :\n\t*is_superuser=true\n\t*is_admin=true`
// console.log(user);

// John :
// 	  *is_superuser=true
// 	  *is_admin=true

// Task 1 
// Choyhonada 10 kishi uchun 1kg guruch , 0.75 kg go’sht,0.25kg dumba, 1kg sabzi dan iborat palov tayyorlanadi . Choyhona uchun necha kishi kelishiga qarab masalliqlarni va ular uchun harjatni hisoblaydigan dastur tuzing.
// 1 kg guruch = 25.000
// 0.75kg gosht = 50.000
// 0.25 dumba = 20.000
// 1kg sabzi = 5000 

// Task 2 
// Orol dengizining hajmi 1960-yili 68.900 km2 bo’lgan va 2014-yilga kelib uni hajmi 8305 km2 ga kamaydi . Siz Orol dengizi shu vaqt oralig’ida taxminan yiliga nechi km2 dan kamayganini hisoblovchi dastur tuzing.

// Task 3 
// Inson har bir kilogramm og’irligi uchun 35ml suv istemol qilishi kerak,
// Abdulloh X kg vaznga ega u bir kunda necha litr suv istemol qilishi kerak ?

// STRING METHODS 

// let str = "Python"
// console.log(str.toLocaleLowerCase());
// console.log(str.toLocaleUpperCase());
// console.log(str.length); // 6 type = number
// console.log(str.length * 2); //12

// console.log(str.indexOf("h") ); // 3

// console.log("Python is OOP language".indexOf("OOP")); // 10
// let str = "Python is better"
// console.log(str.includes("hon")); // true / rost
// console.log(str.includes("ava")); // false / yolgon
// console.log(str.startsWith("Py")); // true
// console.log(str.endsWith("er")); // true
// console.log(str.startsWith("Ja")); // false
// console.log(str.endsWith("ov")); // false

// >  : katta
// < : kichik
// >= : katta yoki teng
// <= : kichik yoki teng
// == : teng
// != : teng emas
// === : qatiy teng
// !== : qatiy teng emas 
//  ! : emas (inkor)

// Boolean() >> true/false
// let x = true;
// console.log(typeof x); // boolean / true
// console.log(10 > 5); // katta == true
// console.log(7 < 9); // true
// console.log(5 >= 5); //true 
// console.log(5 <= 5); //true 
// console.log("a" == "A");// false
// console.log("a" != "A"); // true
// console.log("1" == 1);//true
// console.log("1" === 1);//false 
// console.log(!true); // not true == false
// console.log(!false); // not false == true 
// console.log("A".charCodeAt()); // 65
// console.log("a".charCodeAt()); // 97

// AND , OR , NOT 
// AND = va 
// OR = yoki
// NOT = emas 

// && - AND >> VA 
// || - OR >> YOKI 
// ! - NOT >> EMAS 
// let age = +prompt("Age ? \n:")
// console.log(age > 18);
// console.log(age < 65);
// console.log(age > 18 && age < 65); //agar age 18 dan katta VA  65 dan kichik  bolsa true 
// console.log(age > 18 || age < 65);//agar age 18 dan katta YOKI  65 dan kichik  bolsa true
// console.log(Boolean("text")); // true
// console.log(Boolean("")); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(-56)); // true

// console.log(Boolean(age)); // 

// let age = +prompt("Yosh")
// if(age > 18){
//     console.log("Hush kelibsiz !");
// }else{
//     console.log("Kirish mumkin emas ! ");
// }

// if(shart){amal}

// if(shart){amal}else if(shart){amal}else{amal}

// if >> agar shart = true amal bajarilsin
// else if yoki shart = true amal bajarilsin
// else aks holda amal bajarilsin

// let age = +prompt("Yosh") // 18
// if(age > 18){
//     console.log("Hush kelibsiz !");
// }else if(age == 18){
//     console.log("Hush kelibsiz !");    
// }else{
//     console.log("Kirish mumkin emas ! ");
// }