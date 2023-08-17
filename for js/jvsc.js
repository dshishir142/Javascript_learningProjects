// let obj = {'Harry': 98, 'Rohan':70, 'Aakash':7};

// for( let i=0; i<Object.keys(obj).length; i++){
//     console.log(Object.keys(obj)[i] +` received `+ Object.values(obj)[i]+` marks`);
// }

// console.log(" ");

// for( let i in obj){
//     console.log(i + " received " + obj[i] + " marks");
// }

// while(true){
//     let number = prompt("Enter a number: ");
//     if(Number.isInteger(Number.parseInt(number))){
//         console.log(number);
//         break;
//     }
// }


// let boy1 = 'Shishir';
// let boy2 = 'sisir';
// let sentence = `${boy1} id ${boy2}\'s another name`;
// console.log(sentence);

// let sentence = "My name is shishir dahal.";
// console.log(sentence.trim());


// console.log( 10<8 ? "is greater": "is not greater");

// console.log(sentence.slice('My name is '.length).toUpperCase());
// console.log(sentence.replace(sentence[4],"i"));      

// let arr = [1,2,3,4,5,6,7,8,9]       
// delete arr[0];      
// console.log(arr);     
// let arr2 = [17, 102, 1111, 16, 13, 19, 144, 15, 18];
// let arr3 = arr.concat(arr2);
// for(let i in arr2){
//     console.log(arr2.sort((a,b)=>{return a-b})[i]);
// }

// for(let i of arr2){
//     console.log(i);
// }

// arr2.forEach((i)=>{
//     console.log(i+i)
// })

// let arr4 = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
// console.log(arr2.sort(function(a,b){return a-b}));
// console.log(arr4.sort());

// arr2.splice(0,0,1,2,3,4);
// console.log(arr2);
// let arr3 = arr2.slice(0,4)
// console.log(arr3);

// let arr1 = []
// while(true){
//     let b = Number.parseInt(prompt("Enter the number in array"));
//     arr1.push(b);
//     if(b==0){
//         break;
//     }
// }
// console.log(arr1);

// let number = [10,12,15,20,60,99,19];
// console.log(number.filter((i)=>{
//     if(i%10==0){
//         return i;
//     }
// }));

// let arr = [1,2,3,4,5,6,7,8,9] 
// console.log(arr.map( (i)=>{
//     return i*i;
// }));

// let num = Number.parseInt(prompt("Enter a number to calculate factorial"));
// let value = [];
// for(let i=1; i<=num; i++){
    // value.push(i);
// }
// console.log(value.reduce( (j,k)=>{
    // return j*k;
// }));

                                                //Number guessing game
// let play = confirm("Do you want to play number guessing game!!! ");
// if(play){
//     let b = Math.floor((Math.random()*100)+1);
//     let guess = Number.parseInt(prompt("Enter a number from 1 to 100"));
//     var count = 0
//     while (true){
//         count += 1;
//         if (guess == b){
//             console.log(`${guess} is the right guess`);
//             let final = 100 - count;
//             console.log(`Your score is ${final}`);
//             break;
//         }else if (guess > b){
//             guess = Number.parseInt(prompt("The number is less than your guess"));
//         }
//         else{
//             guess = Number.parseInt(prompt("The number is greater than your guess"));
//         }
//     }
// }


// let a = Number.parseInt(prompt("Enter anything", "Shishir"));
// if( Number.isInteger(a)){
//     document.write(`You entered a integer`);
// }else{
//     document.write("You entered a string");
// }

// function driving_age(){
//     age = Number.parseInt(prompt("Enter your age: "));
//     if(Number.isInteger(age)){
//         if( age >= 18){
//             alert("You can drive");
//             play();
//         }else if( age < 18 && age > 0){
//             alert("You cannot drive");
//             play();
//         }else{
//             console.error("The age cannot be in minus");
//         }
//     }else{
//         alert("Please enter your age in number: ");
//         driving_age();
//     }
// }

// driving_age();
// function play(){
//     if( confirm("Do you wish to enter age again: ")){
//         driving_age();
//     }
// }

// let num = Number.parseInt(prompt("Enter 4 to redirected to google: "))
// if( num == 4){
//     location.replace("https://www.google.com/");
// }

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// let d = Array.from(document.body.childNodes); 
// console.log(d.length);
// for( let i in d){
//     console.log(document.body.childNodes[i]);
// }


// let a = 'Shishir';
// let b = Array.from(a);
// for(let i of b){
//     console.log(i);
// }


// ###########
// ###########
// let elem = document.querySelectorAll("button");

// elem.forEach(element=>{
//     element.addEventListener("click", ()=>{
//         element.style.color="red";
//     })
// })

// ###########
// ###########

// let elem = document.getElementById("button1");
// elem.addEventListener("click", ()=>{
//     elem.style.color="red";
// })

// let button = document.getElementById("button1");
// console.log(button);
// console.log(button.matches(".first"));


// let button = document.getElementById("button1");
// console.log(button);
// console.log(button.closest(".second"));

// let tr = document.getElementById("id1");
// console.log(tr.contains(button));

// let li = document.getElementsByTagName("li");
// Array.from(li).forEach(element => {
//     element.style.background="cyan";
// });

// let a = "Nepal";
// console.log(a.charAt(1));
// console.log(a.substr(0,4));


// class plane{
//     constructor(Name){
//         this.type = Name
//     }
//     static fly(objName){
//         if(objName){
//             console.log(`${objName.type} is flying`)
//         }else{
//             console.log("Some plane is flying")
//         }
//     }
//     get name(){
//         return this.type
//     }
//     set name(newName){
//         this.type = newName
//     }
// }
// let Golfstream = new plane("G5")
// plane.fly(Golfstream)
// plane.fly();
// Golfstream.name = "G4"
// console.log(Golfstream.name)


// class complex{
//     constructor(real, imaginary){
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
//     get realNum(){
//         return this.real
//     }
//     get imaginaryNum(){
//         return this.imaginary
//     }

//     set realNum(num){
//         this.real = num;
//     }
//     set imaginaryNum(num){
//         this.imaginary = num;
//     }
// }
// let a = new complex(2, 4);
// let b = new complex(8, 1);
// // a.add(b);
// // console.log(`${a.real} + ${a.imaginary}i`)
// console.log(`${a.realNum} + ${a.imaginaryNum}i`)
// a.realNum = 5;
// a.imaginaryNum = 0;
// console.log(`${a.realNum} + ${a.imaginaryNum}i`)


// class human{
//     constructor(name, gender){
//         this.name = name;
//         this.gender = gender;
//     }
//     nam(){
//         console.log(`${this.name} is a human`)
//     }
// }
// class student extends human{
//     nam(){
//         console.log(`${this.name} is a student`)
//     }
// }
// let harry = new student("Harry", "Male")
// harry.nam()
// let shishir = new human("Shishir", "Male");
// shishir.nam()
// console.log(shishir instanceof student)



