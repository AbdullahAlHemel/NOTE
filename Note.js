string javascript:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
math javascript

//numeric
var price = 11;
var age = 33;
var temperature = 2;

//string
var person= "ira";
var location='mira';

// boolean
var serious = true;
var note= false


//change variable
var price1 = 21;
var price2 = 25;
var price1 = price1+ 10;
console.log(price1);


//change variable shortcut
price1+= 100
price1-= 10
price1/= 333
price1*= 3

note++
note--

var firstName = "Abdullah";
var lastName = "Hemel"
var fullName = firstName+' Al '+lastName;
console.log(fullName)

//persentize
var a=11;
var b=2;
console.log(a%b);


//character to number

//int
var love ="31";
var hate =14;
var emotion=love+hate;
console.log(emotion)
var loveIn = parseInt(love)
console.log(loveIn)

//float
var love ="31.433";
var sec = parseFloat(love);
console.log(sec)


var number= 100;
console.log(typeof number);
var number1= '100';
console.log(typeof number1);
var number3= true;
console.log(typeof number3);
var love
console.log(typeof love);


//float lock .float number minimise

var love1 = 0.1;
var love2 = 0.2;
var love = love1 + love2;
love = love.toFixed(3) ;
love = parseFloat(love)
console.log(love)



//:::::::::::::::::::::::::::::::::::::::::::::::m_4(17) start:::::::::::::::::::::::::::::::::::::::::


var love = "we are programmer";
console.log(love);		



var x = [100, 10, 29, 50, 548]
var y = ['Ira', 'Mira','Zara']
console.log(y)


var x = [100, 10, 29, 50, 548]
var y = ['Ira', 'Mira','Zara']
console.log(x.length)



//indecator
var love = [30,39,3,14,19,1090];
console.log(love[5])


//change value
var love = [30,39,3,14,19,1090];
love[5] = 101;
console.log(love);



//add .
var love = [30, 39, 3, 14, 19, 1090];
love.push(6050);
console.log(love);


var word = ['a','b','ccc'];
word.push('kk');
console.log(word)



//remove
var word = ['a','b','ccc'];
word.pop();
word.pop();
console.log(word)


var word = ['a','b','ccc'];
word. splice(2); 
console.log(word)



//calculatuion
console.log(4 = 4);   
console.log(4 != 4);   
console.log(4 < 4);   
console.log(4 > 2);   



//if else
	var iPhone = 70000;
var myBudget = 10000;

if (iPhone<myBudget){
    console.log("i phone kine fotani kormu");
}else{
    console.log("Lav loss nai life tai loss")
}


//case
var Graduated = true;
if (Graduated == true){
    console.log("i love you")
}else(
    console.log('i am sorry')
)


var salary = 100000;
var Graduated = true;
if (Graduated == true && salary >910000){
    console.log("i love you")
}else(
    console.log('i am sorry')
)



var salary = 100000;
var Graduated = true;
if (Graduated == true || salary >910000){
    console.log("i love you")
}else(
    console.log('i am sorry')
)



var g= true;
var s= 40000;
var c= 2;
if(g=true && (s >==40000 && c >= 1)){
    console.log("i love you!")
}else{
    console.log("i am sorry")



var money = 80 ;
var toast = 80;
var danish = 60;
var malai = 90;

if(money >= malai ){
    console.log("malai onek moja")
}else if(money >= toast){
    console.log("toast den mama")
}else if(money >= danish){
    console.log("danish oi den")
}else{
    console.log("taka nai")
}

//::::::::::::::::::::::::::::milsone-4 (18)M::::::::::::::::::::::::::::::::::


//while loop ~~~~~~~~~~~~~~~~
var r = 0;
while( r < 5){
    console.log("greater")
    r++
}

//show value number
 console.log(note);

//add value in end
var value = 0;
while( value <= 30){
    console.log(value);
    value = value+3
}

//for loop ~~~~~~~~~~~~~~~
for(var price = 0; price < 5; price++){
    console.log("price is comfortable")
}

//+=
for(var i= 0;  i <= 10; i+=4){
 console.log(i)
}


//add two variable
var no = [100, 20, 40 ,20 ,90];
for (var i = 0; i <5 ; i++){
    var TotalNo = no[i];
    console.log(TotalNo)
}

var No = [20,40,30,20,390,500,490,20,25,55,40];
for (i = 0; i <No.length; i++){
    TotalNumber= No[i];
    console.log(TotalNumber)
}

var No = ['love','hate','angry'];
for (i = 0; i <No.length; i++){
    TotalNumber= No[i];
    console.log(TotalNumber)
}


//break...for
for(i = 0; i<= 10; i++){
     console.log(i);
    if (i >= 3){
     break;
    }
     }

//break...whlie
var r = 0;
while(r <= 10){
     console.log(r);
     r++;
     if(r > 5){
          break;
     }
}


//continue
var r = 0;
while(r <= 10){
     console.log(r);
     r++;
     if(r > 5){
          continue;
     }
}


//input_reverse..while
var num = 10;
while(num >= 1){
   console.log(num);
   num--;
}

//input_reverse..for
for(i=10;i>=0 ;i--){
     console.log(i)
}


//++
var t=500;
var c=300;
var s = t- c;
console.log(s)

//..decimal
var math = 50.33;
var phy = 70.33;
var ch = 20.443233;
var eng = 40.4;
var TotalMark = math + phy + ch + eng;
var MarkAverage = TotalMark/5;
var MarkAverageDec = MarkAverage.toFixed(2)
console.log(MarkAverageDec )


//compare
var num1= 300 ;
var num2= 500 ;
var num3= 60 ;
if(num1 > num2){if(num1 > num3){
     console.log("Number one biggest")
}else{
     console.log("number two biggest")
}}
else{
     if(num2 > num3){
          console.log("Number two big")
     }else{
          console.log("number three big")
     }
}



//euqal
var one = 2;
var two = 9;
var three = 2;
if(one == two || two == three){
    console.log("Equal")
}else{
    console.log("not equal")
}


//:::::::::::::::::::::::::::::::::::::::::m:19>java::::::::::::::::::::::::::::::::::::::::::::


function start(){
    console.log("love")
    console.log("hate")
    console.log("boring")
}
start()
start()

//change in function

function start(emotion){
    console.log("love")
    console.log(emotion)
   
}
start(100)


//INTO
function bringsingara(money){
    console.log("taka disen" , money);
    console.log("ai nen taka");
}
var taka = 500;

bringsingara(taka)


//multiple peramiter
function i(no1, no2, no3){
    console.log("kind of subject: " , no1, no2, no3 );
}
i(20 , 30 ,40);


//sum in peramiter
function n(a,b,c,d,e){
    console.log(a,b,c,d,e);
    var sum = a+b+c+d-e;
    console.log(sum);
}n(20,40,348,238,47)

//return
function add(num1, num2){
    console.log(num1,num2);
    var sum = num1 + num2;
    return sum;
}
add(10,30)

//into
function Tsingara(money){
    var OneSingara = 10;
    var sum = money / OneSingara;
    return sum;
}
var No = 60;
var total = Tsingara(No);
console.log(total)


//const use
function assingment(a1, a2, a3){
    const part = 3
    const num = a1 + a2 + a3;
    const total = num/ part
    return total
}
const a =60;
const b =58;
const c =50;

const result = assingment(a, b, c);
console.log(result)

//multiple work
function assingment(a1,a2,a3){
    const no = 3 ;
    const total =  (a1+a2+a3)/no;
   return total;
}

const result = assingment(60, 58, 50);
const result2 = assingment(50, 50, 50);
console.log(result , result2)

//Object
var MyComputor = {
    Brand : "lanebo",
    Price : 39000,
}
console.log(MyComputor.Brand)

//change_object
var love = {
    need : 12,
    capacity : 14,
    sweetName : "RifhaTamanna",
}
console.log(love.sweetName);
love.sweetName = "Adie";
console.log(love.sweetName)		

//see value and keysvar card = {
    top:20,
    left:40,
    bottom:134,
}
console.log(card)
var properties = Object.keys(card);
console.log(properties);
var properties1 = Object.values(card);
console.log(properties1)

//change value
const wish = {
    Habit : 5,
    love : 12,
    income : 50000,
    CGPA : 3.4,}
const R = Object.keys(wish);
console.log(R);
const V = Object.values(wish);
console.log(V)
wish.Habit= 10;
console.log(wish.Habit)
//altornative change
wish["Habit"] = 100


//loop
const Make = {love:10,
              hate :30,
              emotion:40}
var keys = Object.keys(Make);
console.log(keys);
for(var a =0; a < keys.length; a++){
    var one = keys[a];
    var two = Make[one];
    console.log(one , two)
}


//:::::::::::::::::::::::::::::::::::::::::::::::::::m 20 ::::::::::::::::::::::::::::::::::::::::::::::::::::
var number = 100;
var numOperation = number % 2;
if (numOperation === 0) {
    console.log("Number is Even")
}else {
    console.log("Number is Odd")
}


//leap year
function leapYear(year) {
    var result = year % 4;

if (result === 0) {
    console.log("This year is Leap Year")
}else(
    console.log("Normal Year")
)}
leapYear(2026)

//more 
function numbers(total) {
    console.log('num:',total)
}
var allValue = [20,20,30,40,50];
numbers(allValue)

//sum++++
function GetSomeArray(values) {
    let sum = 0;
    for(i = 0; i < values.length; i++){
        var k = i;
        var s = values[i];
         sum = sum + s;
        console.log(k,s,sum)
    } }
    let num = [20,30,40,34,45]
    GetSomeArray(num)
	
//sum%%%%%%%%
function int(no) {
    for(var i = 0; i < no.length ; i++){
        var result = no[i];
        if(result % 2 === 0){
            
            console.log(i,result)
        }
    }  
}
var number = [100,49,59,44,33,11,22,33,345,56]
int(number)

//**********
function gon(num) {
    let I = 1;
    for(var p = 1; p <= num; p++){
        I = I * p;}
        return I  
}
var x = gon(5);
console.log(x);

//-----base 
function love(no) {
    for(let p=no; p >= 1; p-- ){
        console.log(p)
    }
}
love(45)

//-------
function love(no) {
    var x = 1;
    for(let p=no; p > 1; p-- ){
        x= x*p
        console.log(p , x)
    }
}
love(6)

//-full oparation
function love(no) {
    var x = 1;
    for(let p=no; p >= 1; p-- ){
        x= x*p
        console.log(p , x)
    } return x
}
let innumber = 6;
let xxx = love(innumber);
console.log("final:", innumber, xxx)

//-full oparation_while
function lfd(dfsdf){
    var dddddd= 1;
    var a = dfsdf;
    while( a > 1){
        dddddd = dddddd*a;
        a--;}
    return dddddd
}
var dxxx = 8;
var sdf =  lfd(dxxx);
console.log ("done!",dxxx,sdf);


//::::::::::::::::::::::::::::::::::::::::::::::::m-21::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//lowercase
var aaa= "HeMel";
console.log(aaa.toLowerCase());

//uppercase
var aaa= "HeMel";
console.log(aaa.toUpperCase())

//includes
var love = "tumi bondo kala phaki";
var xxx = love.includes('phaki');
console.log(xxx);

//indexOf
var love = "tumi bondo kala phaki";
if(love.indexOf('tumi') !== -1){
    console.log("Exist");
}else{
    console.log("void");
}
//startsWith
//endWith

//spilt
var love = "tomi bondu kala paki ami jeno ki bosonto kale tomay bolte pare ni";
var result = love.split(" ");
console.log(result);

//Spilt-2
var love = "tomi bondu kala paki ami jeno ki bosonto kale tomay bolte pare ni";
var result = love.split('');
console.log(result);

//,,,,,....in lines
var love = ['tomi bondu kala paki',
            'ami jeno ki',
            'bosonto kale tomay bolte pare nani'
            ];
 var result = love.join(", ")
            console.log(result);

//math.abs
//math.ceil----topnumber
//math.floor------lownumber
var a=21;
var b=10;
var gap =Math.abs(a-b);
if(gap <= 5){
    console.log("Yes,He can be your friend");
}else{
    console.log("you should take apart");
}

//random
var result = Math.round(Math.random()*1000);
console.log(result);

//tempo_1
var a = 10;
var b = 50;
console.log(a, b);
var change = a;
a = b;
b = change;
console.log(a,b);

//tempo_2
var a = 10;
var b = 50;
console.log(a, b);
[a,b] = [b,a]
console.log(a,b);

//math.max
var x = Math.max(20,34,45,200);
console.log(x);

//math.min 
var x = Math.min(20,34,45,200);
console.log(x);

//greater than
function maxinarray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > largest) {
            largest = element;                
        }
    }
    return largest; 
}
var num = [23,345,4,777,666];
var result = maxinarray(num)
console.log(result);	

//fg
//ds
//dd
//df
function call(number) {
    for (let love = 0; love < number.length; love++) {
        const element = number[love];
        console.log(element);
    }
}
var no = "love or Hate";
call(no);
//df
//fd
//ff..........reversed
//er
//df
function call(number) {
    for (let love = number.length-1; love >= 0; love--) {
        const element = number[love];
        console.log(element);
    }
}
var no = "love or Hate";
call(no);

//fibo
var fibo = [0 , 1];
for (i = 2; i < 100; i++){
    fibo[i] = fibo[i-1] + fibo[i-2] ;
}
console.log(fibo);


//::::::::::::::::::::::::::::::::::::::::::::::M-22::::::::::::::::::::::::::::::::::::::::::::

//.concat
var ppp = [1000,20000]
var x = [20,304,50,290];
 var y = x.concat(ppp);
 console.log(y);
 
//slice
var x = [23,34,45,56,33,234];
var y = x.slice(1,3);
console.log(y);

//splice
var x = [23,34,45,56,33,234];
var y = x.splice(1,3);
console.log(y);














































































































