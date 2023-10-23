// var globalVariable=44;
// console.log(globalVariable);

// var globalVariable=44;
// console.log(globalVariable);

// var globalVariable=44;
// console.log(globalVariable);

// // ES6(2015)
// //LET
// let localVariable=23;
// console.log(localVariable);
// localVariable=50;
// console.log(localVariable);

// // CONST
// const localVariable2="Merhabalar";
// console.log(localVariable);

// //Common Rules
// // üğşçö sayıyla başlama
// let dataVariable=44;
// console.log(dataVariable);

// let dataVariable55=44;
// console.log(dataVariable55);

// let _dataVariable55=44;
// console.log(_dataVariable55);

// let $_dataVariable55=44;
// console.log($_dataVariable55);
//////////////////////////////////////////////////////////////
// + - * / %
// x++    ++x
// x--    --x
// &&=VE ||=VEYA  !
// let data10=44.45;
// console.log(typeof data10);


// // Hoisting
// data11=1>2;
// var data11;
// console.log(data11);
//////////////////////////////////////////////////////////////
// console.log(Math.min(2,1,-100,500));
// console.log(Math.max(2,1,-100,500));
// console.log(Math.sin(-1));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(2,5));
// console.log(Math.floor(6.9));
// console.log(Math.ceil(6.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));
//let data12=Math.abs(Number(prompt("Lütfen adınızı giriniz"))) ;
// let data12=Math.abs(parseInt("Lütfen adınızı giriniz")) ;
// let data13= Math.floor((Math.random()*data12+1).toFixed(2)) ;
// console.log(data13);
////////////////////////////////////////////////////////////// 
// let data14 = "js ÖĞReniyorum js";
// console.log(data14);
// console.log(data14.length);
// console.log(data14.trim(). length);

// console.log(data14.startsWith(" "));
// console.log(data14.endsWith("s"));

// console.log(data14.toUpperCase());
// console.log(data14.toLowerCase());
// data14=data14.concat(" -INC");
// console.log(data14);

// let data = " js ÖĞReniyorum js";
// data14 = data14.replace(data14, data);
// console.log(data14);
// console.log(data14.charAt(1));
// console.log(data14.substring(4));
// console.log(data14.substring(0, 4));


// console.log(data14.indexOf("js"));
// console.log(data14.lastIndexOf("js"));

// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
//let userData = prompt("Lütfen bir şeyler yazınız");
// S-1) Kaç karakterlidir ? (length)
//userData.length;
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
//userData.trim;
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
//userData.toLowerCase();
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase());
//userData.toUpperCase();
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
//console.log(userData.substring(0, userData.indexOf(' ')));//ilk kelime
//let newUserData = userData.replace(userData.split(' ')[0], 'Javascript');
// console.log(newUserData);
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
//console.log(userData.startsWith("javascript"));
// console.log(userData.startsWith("javascript") ? "ewet" : "hayır");
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// console.log(userData.endsWith("javascript") ? "ewet" : "hayır");
// S-8) ilk harf nedir  ? (charAt())
// console.log(userData.charAt(0));
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
//console.log(userData.concat('-ben js öğreniyorum'));
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
// console.log(userData.substring(0,4));

// Örnek
// 1.YOL normal diziyle yapalım.
// 2.YOL map,filter, forEach ile yapalım.
// rastgele 10 elemanlı bir dizi  oluşturalım.  ==> (random)
// bu sayılardan tek olanları bulalım.          ==> (filter)
// bu tek sayıların sonuna 5 ekleyelim          ==> (map)
// buradaki sayıları ekranda gösterelim. ?      ==> (forEach)
// bu şarta uyan kaç tane sayı vardır ?         ==> (counter)
//1.yol
// let data = [];
// let counter;
// for (let i = 0; i < 10; i++) {
//     data[i] = Math.floor(Math.random() * 9 + 1);
//     if (data[i] % 2 != 0) {
//         data[i] += 5;
//         counter++;
//         document.writeln(data[i]);
//     }
// }
//2.yol
// let counter = 0;
// const arr = [...Array(10).keys()].map((val) => Math.floor(Math.random() * 9
//     + 1)).filter((num) => num % 2 !== 0).map(odd => {
//         return odd += 5;
//     }).forEach((value, index, dizi) => {
//         document.write(` ${value}<br>`);
//         counter++;
//     });
// console.log(231, counter);




//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32
//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))

//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
console.log(Math.abs(-5.9));
// 2-yuvarlama yapsın  6.0
console.log(Math.round(6.2));
// 3-karesini alsın 36.00
console.log(Math.pow(6, 2));
// 4-karekök alsın 6.0
console.log(Math.sqrt(36.00));
// 5-yuvarlama yapsın 6.0
console.log(Math.round(6.2));
// 6-)çıkan sonucu 5 bölsün 6/5=1
console.log((parseInt)(6 / 5));
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
console.log(Math.min(1, 5));
let sayı = Math.min(1, 5);
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
console.log(sayı % 2 == 0 ? sayı + 2 : sayı + 5)
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// let userDataa;
// let isNumber = false;

// while (!isNumber) {
//     userDataa = prompt("Lütfen bir sayı yazınız");
//     isNumber = !isNaN(userDataa) && userDataa !== '';

//     if (!isNumber) {
//         alert("Lütfen geçerli bir sayı girin.");
//     } else {
//         document.writeln(userDataa > 0 ? "pozitif" : "negatif")
//     }
// }

//NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
// userpw = prompt("Lütfen Şifrenizi Giriniz");
// secondpw = prompt("Lütfen ikincil şifrenizi Giriniz");
// console.log(userpw ?? secondpw);

// if (userpw === secondpw) {
//     console.log('Aynı Veriler');
// } else {
//     console.log('Birbirine   Uymamaktadır')
// }


// ÖDEV 
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// let usernameandsurname = prompt("Lütfen isim ve soyisminizi yazınız.");
// let name = usernameandsurname.substring(0, usernameandsurname.indexOf(' '))
// let surname = usernameandsurname.substring(name.length, usernameandsurname.length)
// surname = surname.trim();
// let cursor = ['*', '*', '*']
// // console.log(usernameandsurname.substring(0, usernameandsurname.indexOf(' ')));
// if (name[0].toUpperCase() != name.charAt(0)) {
//     false;
// } else {

//     let maskedWord = "";
//     for (let j = 0; j < name.length; j++) {
//         maskedWord += j === 0 ? name[j] : "*";
//     }

//     document.writeln(maskedWord);
// }

// if (surname[0].charAt(0).toUpperCase() != surname[0].charAt(0)) {
//     false;
// } else {
//     let maskedWord = "";
//     for (let i = 0; i < surname.length; i++) {

//         if (i === 0 || i === 1 || i === 2) {
//             maskedWord += surname[i]; // İlk üç harfi göster
//         } else {
//             maskedWord += "*"; // Diğer harfleri maskele
//         }
//     }
//     document.writeln(maskedWord);
// }
//     // splitname[0].replace(splitname[0][i], '*');
//     // splitname[1].replace(splitname[1][i], '*');
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/////////////////////////////////////////////////////////////////////////////
// Function
// 1
// function retursuzParametresiz(){
//     console.log("retursuz Parametresiz");
// }
// retursuzParametresiz();

// // 2
// function retursuzParametreli(uname,usurname){
//     console.log("retursuz Parametreli "+uname+" "+usurname);
// }
// retursuzParametreli("Hamit","Mızrak");

// // 3
// function returluParametresiz(){
//     return "returlu Parametresiz"
// }
// let data14= returluParametresiz();
// console.log(data14);

// // 4
// function returluParametreli(uname,usurname){
//     return "returlu Parametreli"+uname+" "+usurname;
// }
// let data15= returluParametreli("Hamit","Mızrak");
// console.log(data15);

/////////////////////////////////////////////////////////////////////////////

// immedia function (()=>{})()
// (() => {
//     console.log("data immedia function");
// })()


// // normal Function 
// function normalFunction() {
//     console.log("normal  function");
// }
// normalFunction();

// // anonymous function
// const anonymous = function () {
//     console.log("anonymous  function");
// }
// anonymous();

// // arrow function
// const arrow = () => {
//     console.log("arrow  function");
// }
// arrow()


/////////////////////////////////////////////////////////////////////////////

// conditional
// const data20=()=>{
//     let data=parseInt(prompt("Lütfen bir sayı giriniz"));
//     if(data>0){
//         console.log("Sayı pozitif");
//     }else if(data<0){
//         console.log("Sayı negatif");
//     }else{
//         console.log("Sayı sıfır");
//     }
// }
// //data20();


// const data21=()=>{
//     let data=16;
//     if(data%2==0){
//         console.log("Sayı çifttir");
//     }else{
//         console.log("Sayı tektir");
//     }
// }
// data21();
/////////////////////////////////////////////////////////////////////////////
// ternary
// const data22=()=>{
//     let data=16;
//     let result=(data%2==0) ? "Sayı çifttir" : "Sayı tektir";
//     console.log(result);
// }
// data22();
/////////////////////////////////////////////////////////////////////////////

// switch case
// let data23 = () => {
//     let number = new Date().getDay();
//     console.log(number);
//     if (number == 0)
//         console.log("Pazar");
//     else if (number == 1)
//         console.log("Pazartesi");
//     else if (number == 2)
//         console.log("Salı");
//     else if (number == 3)
//         console.log("Çarşamba");
//     else if (number === 4)
//         console.log("Perşembe");
//     else if (number == 5)
//         console.log("Cuma");
//     else if (number == 6)
//         console.log("Cumartesi");
//     else
//         console.log("0-6 arasındaki sayılar giriniz");
// }
//data23()


// let data24 = () => {
//     let number = new Date().getDay();
//     console.log(number);
//     switch (number) {
//         case 0:
//             console.log("Pazar");
//             break;
//         case 1:
//             console.log("Pazartesi");
//             break;
//         case 2:
//             console.log("Salı");
//             break;
//         case 3:
//             console.log("Çarşamba");
//             break;
//         case 4:
//             console.log("Perşembe");
//             break;
//         case 5:
//             console.log("Cuma");
//             break;
//         case 6:
//             console.log("Cumartesi");
//             break;

//         default:
//             console.log("0-6 arasındaki sayılar giriniz");
//             break;
//     }
// }
//data24()
/////////////////////////////////////////////////////////////////////////////

// Loop
const loopTutorials = () => {
    // i=i+1;
    // i+=1
    // i++

    // for ile while arasındaki farklar nelerdir ?

    // For 
    for (let i = 1; i <= 9; i++) {
        document.writeln(i)
    }

    document.writeln("<br/>");

    // While
    let x = 1;
    while (x <= 9) {
        document.writeln(x)
        x = x + 1;
    }

    document.writeln("<br/>");

    //do-while
    let y = 1;
    do {
        document.writeln(y)
        y += 1;
    } while (y <= 9);

}
// loopTutorials()
/////////////////////////////////////////////////////////////////////////////

// Array
const dataArray = () => {
    let arr = [4, 2, 9, 1, 8, 0];
    console.log(arr);
    console.log(typeof arr);

    arr.push(66);
    for (let i = 0; i < arr.length; i++) {
        console.log(i + " => " + arr[i])
    }

    // arr.unshift(55);
    // for (let temp of arr) {
    //     console.log(temp);
    // }

    // arr.pop();
    // arr.shift();
    // // callbackfn: (value: T, index: number, array: T[])
    // arr.forEach(function(value,index,dizi){
    //     //console.log(index+" => "+value);
    //     console.log(`${index} => ${value}`);
    // });

    console.log(" ");
    //arr.sort()
    //arr.reverse()
    arr.sort().reverse()

    arr.forEach((value, index, dizi) => {
        //console.log(index+" => "+value);
        console.log(`${index} => ${value}`);
    });

    //let data15=arr.toString().substring(0,4);
    let data15 = arr.join(" ");
    //console.log(data15);
}
//dataArray();


const dataArray2 = () => {
    let array = [];
    for (let i = 0; i < 9; i++) {
        array[i] = Math.floor(Math.random() * 9 + 1)
    }
    //console.log(array);
    return array;
}
//dataArray2();


const dataArray3 = () => {
    let array = dataArray2();
    console.log(array);
    let result1 = array.filter((x, index, dizi) => {
        if (x % 2 == 0) return true
    }).map((x) => {
        return x = x * 10;
    }).forEach((x, y) => {
        console.log(`${x}=>${y}`);
    });
    // console.log(result1);

    // let result = array.filter((value, index, dizi) => {
    //     return value % 2 == 0
    // }).map((value, index, dizi) => {
    //     return value = value * 10;
    // }).forEach((value, index, dizi) => {
    //     //console.log(index+" => "+value);
    //     console.log(`${index} => ${value}`);
    // });

}
//dataArray3();

/////////////////////////////////////////////////////////////////////////////
// Object

const objectData = {
    name: "Yakub",
    surname: "Özten"
};
// console.log(objectData);
// console.log(objectData.name);
// console.log(objectData.surname);
/////////////////////////////////////////////////////////////////////////////

// DOM
/////////////////////////////////////////////////////////////////////////////

// Event Listener
/////////////////////////////////////////////////////////////////////////////

// Local Storage

//////////////////////////////////////////////////////////////////
// Form örneğine devam


/////////////////////////////////////////////////////////////////////////////
// Function

// normal Function
// anonymous function
// arrow function
// immedia function
