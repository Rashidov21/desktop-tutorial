// Javascript

Comment
// bir qatorli commentlar uchun
/*  
bir necha qatorli 
commentlar
uchun
*/

// o'zgaruvchilarni e'lon qilish
const pi=3.14
 let x;
 var y;

// operatorlar
= - bu o'zgaruvchiga qiymatni biriktiradi
+ qiymatlarni qo'shish
- qiymatlarni ayriydi
* qiymatlarni ko'paytirish
/ qiymatlarni bo'ladi
** bu sonni darajaga ko'tarish
% bu ikki sonni bo'lganda qoldiqni aniqlash
x++ bu qiymatni bittaga oshirish
x-- bu qiymatni bittaga kamaytirish


js Assignment operators
+= x+=y  x=x+y
-= x-=y  x=x-y
*= x*=y  x=x*y
/= x/=y x=x/y
%= x%=y x=x%y
**= x**=y  x=x**y


js taqqoslash operatorlari
== qiymatlarni aniqlaydi
=== qiymatlarni tipi miqdorlari teng bo'lishi kerak
'5'==5 teng
'5'===5 teng emas
!= teng emas
!== teng emas
> katta
< kichik 
>= katta yoki teng
<= kichik yoki teng


Mantiqiy operatorlari
&& - bu va (and) 
|| -bu yoki (or)
! - bu emas (not)



Js ma'lumot turlari
1) String
2) Number
3) BigInt
4) Boolean
5) undefined
6)null
7)Symbol
8) Object

String
let s='  katta '
s.length()-String belgilar sonini aniqlaydi
s.slice(start, end)- stringdan ko'rsatilgan oraliqni kesib oladi
s.substring(start, end)- stringdan ko'rsatilgan oraliqni kesib oladi
s.replace(String1, String2)- s String String1 ni String2 almashtiradi
s.toUpperCase() - String barch belgilarini katta shiriftga o'tkazadi
s.toLowerCase() - String barch belgilarini kichik shiriftga o'tkazadi
s.concat(s1,s2,..)- ko'rsatilgan birlashtiradi
s.trim()- string ni boshi va oxiridagi bo'sh joylarni olib tashlash
s.trimStart() - string ni boshi  bo'sh joylarni olib tashlash
s.trimEnd() -string ni oxiridagi bo'sh joylarni olib tashlash
s.split('string')- ko'rsatilgan belgilar bo'yicha qismlarga bo'ladi
s.indexOf('dd')- ko'rsatilgan qiymatni indexni qaytaradi
s.lastIndexOf('dd')- ko'rsatilgan qiymatni oxirgi indexni qaytaradi
s.search('dd')- index ni qaytaradi
s.startsWith('dd')- o'zgaruvchini ko'rsatilgan qiymat qiymat bilan boshalanishini aniqlaydi (true, false)
s.endsWith('dd')- o'zgaruvchini ko'rsatilgan qiymat qiymat bilan oxirgini aniqlaydi  (true, false)


number 
BigInt


String(son)
Number(string)
typeof(o'zgaruvchi)



Array
let arr=[11, 'trd', true]
indexlanadi , o dan boshlanadi
arr.length()- qiymatlar sonini
arr.pop() - Array oxirigi elementni o'chiradi
arr.push(qiymat)- array yangi qiymat qo'shadi
arr.shift()- array ning birinchi olib tashlaydi
arr.unshift(qiymat) -array boshiga yangi qiymat qo'shadi
arr.concat(array2)- arraylarni biralashtiradi
delete arr[2] -ko'rsatilgan qiymatni o'chiradi
delete arr - array o'zini butunlay o'chiradi



Boolean
true false
''- false
';'- true
12,3- true
0 - false
null, undefined- false
10>5 -true
7<3 -false



shart operatorlari
if (shart){
code1
}
else if (shart2){
code2
}
else{
code3
}



Loops
for (let i;i<10;i++){
    code
}


while (shart){
    code
}

do {
code
}
while(shart)

break
continue


switch (qiymat){
    case qiymat1:
        code1;
        break;
    case qiymat2:
        code2;
        break;
    default:
        code;        
}


Object
1) qiymat
2) funsiyalari


const person={
    firstname:'john',
    lastname:'doe',
    age:'21',
    fullname:function(){
        return this.firstname+'  '+ this.lastname;
    }
}