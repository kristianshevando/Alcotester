// //console.log(Math.round(Math.random()*10));

// var a = Math.round(Math.random()*10);
// var b = Math.round(Math.random()*10);
// var operator = prompt("Что делаем? ", "+");

// console.log(a);
// console.log(b);
// console.log(result(a, b, operator));
// // var years = prompt("Сколько вам лет? ", 100);
// // years = +years;
// // years+=1;
// // alert("Вам " + years + " лет!");
// // console.log(Math);

// function result(a, b, operator)
// {
//     if(operator == "+"){
//         return +(a+b);
//     }
//     else if(operator == "-"){
//         return +(a-b);
//     }
//     else if(operator == "*"){
//         return +(a*b);
//     }
//     else if(operator == "/"){
//         return +(a/b);
//     }
// }


// var a = Math.round(Math.random()*10);
// var b = Math.round(Math.random()*10);

// operators = [
//     {
//         sign: "+",
//         method: function(a, b){
//             console.log("a = ", a);
//             console.log("b = ", b);
//             return a+b;
//         }
//     },
//     {
//         sign: "-",
//         method: function(a, b){
//             console.log("a = ", a);
//             console.log("b = ", b);
//             return a-b;
//         }
//     },
//     {
//         sign: "*",
//         method: function(a, b){
//             console.log("a = ", a);
//             console.log("b = ", b);
//             return a*b;
//         }
//     },
//     {
//         sign: "/",
//         method: function(a, b){
//             while(b == 0){
//                 b = Math.round(Math.random()*10);
//             }
//             console.log("a = ", a);
//             console.log("b = ", b);
//             return a/b;
//         }
//     }
// ];

// var operator = Math.round(Math.random()*3);
// //console.log("a", operators[operator].sign, "b = ", operators[operator].method(a, b));
// console.log(`a ${operators[operator].sign} b = ${operators[operator].method(a, b)}`);


var operators = [
    {
        sign: "-", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a-b;
        }
    },
    {
        sign: "+", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a+b;
        }
    },
    { 
        sign: "*", 
        method: function(a,b){
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a*b;
        }
    },
    {
        sign: "/", 
        method: function(a,b){
        while(b==0){
            b = Math.round(Math.random() * 10);
        }    
        console.log( 'a = ', a);
        console.log('b = ', b);
        return a/b;
        }
    }
];


//hello friend my name is Kristian

var t;
var b;
var strB;
flag = true;
var neededStr;
var userStr;
var operator;

while (flag) {
    // t = Math.round(Math.random() * 10);
    // b = Math.round(Math.random() * 10);
    operator = Math.round(Math.random()*3);  
    t = Math.round(Math.random()*20 - 10);
    b = Math.round(Math.random()*20 - 10);
    
    if(b < 0) {
        strB = `(${b})`;
    } else {
        strB = `${b}`;
    }

    neededStr = (operators[operator].method(t,b)).toFixed(1);
    console.log('neededStr: ', neededStr);
    console.log(t);
    console.log(b);
    userStr = prompt(`Введи число ${t}${operators[operator].sign}${strB}: `,);
    console.log(userStr);
    userStr = userStr.replace(",",".");

    console.log('userStr: ', userStr);
    if( +userStr == +neededStr) {
        alert('Давай ещё по одной!!!');
    } else {
        var dotCounter = 0;
        for( i = 0; i < userStr.length; i++) {
            if( userStr[i] == ".") {
                dotCounter++;
            }
        }
        if (dotCounter>1){
            alert('Воу Воу, поменьше точек, алкоголик!');
            flag = false;
            break;
        }
        alert('С тебя хватит! Вали спать, сволочь!');
        flag = false;
    }
}