
// document.getElementById("btn").addEventListener("click", ()=>{

    // let jokes = ["Why did the chicken cross the playground?","To get to the other slide!","Why did the actor fall through the floorboards?","They were going through a stage!","Why did a scarecrow win a Nobel prize?","He was outstanding in his field!","Why are peppers the best at archery?","Because they habanero!","What did the duck say after she bought chapstick?","Put it on my bill!","Why did an old man fall in a well?","Because he couldn’t see that well!","What do you call a fake noodle?","An impasta!","What did the three-legged dog say when he walked into a saloon?","“I’m looking for the man who shot my paw!”","How do you tell the difference between a bull and a cow?","It is either one or the udder!","What’s red and smells like blue paint?","Red paint!","What’s the difference between a hippo and a Zippo?","One is very heavy, the other is a little lighter!","jokes for kids","Why can’t you send a duck to space?","Because the bill would be astronomical!","What does Jeff Bezos do before he goes to sleep?","He puts his PJ-Amazon!","What happened when the world's tongue-twister champion got arrested?","They gave him a tough sentence!","What did the mama cow say to the calf?","It’s pasture bedtime!","How does a vampire start a letter?","Tomb it may concern!","What do you call an illegally parked frog?","Toad!","What did one plate say to the other?","Dinner is on me!","Why do hummingbirds hum?","Because they don’t know the words!","What do sprinters eat before a race?","Nothing. They fast!","Two muffins are baking in an oven. One of them looks to the other and says, Phew, it\'s getting hot in here! The other looks back and says, 'Ack! A talking muffin!'","What do cats eat for breakfast?","Mice Crispies!","What do you call an elephant that doesn’t matter?","An irrelephant!","What do you get when you cross a rabbit with shellfish?","An oyster bunny!","Where do polar bears keep their money?","In a snow bank!","Why did the pony get sent to his room?","He wouldn’t stop horsing around!","What kind of dog does a magician have?","A Labracadabrador!","Where do cows go on Friday nights?","They go to the moo-vies!","Why couldn\'t the pony sing “Happy Birthday?”","Because she was just a little hoarse!","How do you make an octopus laugh?","With ten-tickles!","How do you keep a bull from charging?","Take away its credit card!","Why can’t a leopard hide?","Because he’s always spotted!","What do frogs order at fast-food restaurants?, French flies!"];
    // let b = Math.floor(Math.random()*(jokes.length)+1);
    // let c = Math.floor(Math.random()*(jokes.length)+1);
    // let joke = jokes[b]
    // let joke1 = jokes[c]
    // document.getElementById("jke").innerHTML=`${joke} ${joke1}`;
    // document.getElementById("empty").insertAdjacentHTML("beforebegin", "<p id='error'>There has been a error</p>");
    
    // let togg = document.getElementById("empty");
    // togg.classList.toggle('hidden');
    // clearTimeout(abv);
    // if(count>5){
    //     clearInterval(func);
    // }

// })

// console.log( jke.getAttribute("class"));
// let a = document.getElementById("hlo")
// a.innerHTML = `${a.innerHTML}!!!`;


// let div = document.createElement("div");
// div.innerHTML="<h1>What</h1>";
// document.getElementById("hlo").prepend(div);
// document.getElementById("hlo").replaceWith(div);
// document.getElementById("hlo").after(div);
// document.getElementById("hlo").append(div);

// let abv = setTimeout( ()=>{
//     console.log('hello');
// },1000)

// let count = 0
// let func = ()=>{
//     count+=1;
//     console.log(count);
// }
// setInterval(func, 2000);

// let func = setInterval(()=>{
//     count+=1;
//     console.log(count);
// }, 2000);

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(data => console.log(JSON.stringify(data)));


// let hour = 10;
// let minute = 48;
// let second = 0;
// setInterval(()=>{
//     second += 1;
//     if(second >= 60){
//         second = 0;
//         minute += 1;
//         if(minute >= 60){
//             minute = 0;
//             hour += 1;
//         }
//     }
//     p.innerHTML = `${hour}:${minute}:${second}`;
// },1000);


// let p = document.getElementById("jke");
// let count = 0;
// setInterval( ()=>{
//     let t = new Date();
//     p.innerHTML = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`;
// },1000);


// let isOdd = (num)=> num % 2 === 1;
// let isEven = (num) => num % 2 === 0;
    
// let exclaim = (str)=> `${str}!`;

// let doubleChar = (name)=> name
// .split('')
// .map(x => `${x}${x}`)
// .join('');

// let atLeastTwo = (array, callback) => array.filter(callback)

// console.log(atLeastTwo([1, 2, 3, 4, 5], isEven));
// console.log(atLeastTwo([1, 2, 3, 4, 5], (t) => t > 3));


// let p = new Promise((resolve,reject)=>{
//     console.log("pending");
//     setTimeout(()=>{
//         resolve("Completed");
//     },2000)
//     setTimeout(()=>{
//         reject("Not on my watch")
//     },3000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     console.log("pending");
//     setTimeout(()=>{
//         resolve("Completed");
//     },3000)
//     setTimeout(()=>{
//         reject("Not on my watch")
//     },2000)
// })
// p.then((value)=>{
//     console.log(value)
// })
// p2.catch((value)=>{
//     console.log(value)
// })



// let a = fetch("https://jsonplaceholder.typicode.com/todos/1")
// .catch((error)=>{
//     console.log(`There is a error ${error}`)
// })
// .then(res => res.json())
// .then(data => console.log(`${JSON.stringify(data)}`));


// let isOdd = (x)=>(x%2 === 1)
// let check = (value, cb) => value.filter(cb)
// let nums = [1,2,3,4,5]
// check(nums,isOdd)



// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//     resolve({data: "Hello, friend!!", error: null})
//     },2000)
//     })
//     myPromise.then((val)=>{
//         console.log(val)
//         setTimeout(()=>{
//             return new Promise((resolve, reject)=>{
//                 resolve()
//             }).then(()=>{
//                 console.log("First promise chain completed")
//             })
//         },2000)
//     })
//     myPromise.then((value)=>{
//         console.log(value)                  
//         return new Promise((resolve, reject)=>{
//             setTimeout(()=>{
//                 resolve()
//             },3000)
//         }).then(()=>{
//             console.log("Second promise chain completed")
//         })
//     })

// console.log("Program pending...!!")
  

// let value = 0;
// let newPromise = new Promise((resolve, reject)=>[
//     setTimeout(()=>{
//         resolve(10)
//     },2000)
// ])

// let newPromise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(20)
//     },1000)
// })
// let promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },3000)
// })
// Promise.allSettled([newPromise,newPromise2,promise3]).then((val)=>{
//     console.log(val)
// })
// Promise.all([newPromise,newPromise2,promise3]).then((val)=>{
//     console.log(val)
//     console.log(val.reduce((a,b)=>{return a + b}, 0))
// })
// Promise.race([newPromise,newPromise2,promise3]).then((val)=>{          //prints the one that resolves first including error
//     console.log(val)
// })
// Promise.any([newPromise,newPromise2,promise3]).then((val)=>{           //prints the one that resolves first excluding error
//     console.log(val)
// })


// try{
//     if(a > 4) throw 5;
//     if(a < 4) throw new TypeError("There is an error");
// }catch(err){
//     console.log(err.stack)
//     console.log(err)
//     console.log(err.message)
//     console.log(err.name)
//     throw SyntaxError("There is a syntax error")
// }
// finally{
//     console.log("Program continue")
// }


// async function func(url){
//     return new Promise((resolve, reject)=>{
//         let Script = document.createElement("Script");
//         Script.src = url;
//         document.head.append(Script);
//         Script.onload = ()=>{
//             resolve("The script has been loaded");
//         }
//     }).then((val)=>{console.log(val)})
// }
// let main_ = async ()=>{
//     return await func("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js");
// }
// main_()


// let one = async ()=>{
//     return  new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new TypeError("TF"))
//         },3000)
//     })
// }
// let mainF = async ()=>{
//     try{
//         let b = await one();
//         console.log(b)
//     }catch(error){
//         console.log(error.name)
//         console.log(error.message)
//     }
// }
// mainF()



// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     },1000)
// })
// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(2)
//     },2000)
// })
// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },3000)
// })
// let main_ = async ()=>{
//     console.time("run")
//     let b =  await Promise.all([p1, p2, p3]);
//     console.log(b)
//     console.timeLog("run")
// }
// main_();



// setTimeout(()=>{console.log("Hacking process started!")},1000)
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hacking this mobile....")
//     },2000)
// }).then(val=>{console.log(val)
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{resolve("User found shishir...")},2000);
//     }).then(v=>console.log(v))
// })
// p1.then(()=>{
//     return new Promise((resolve, reject)=>setTimeout(()=>{
//         resolve('Fetching password of "shishir"')
//     },1000))
//     .then(va=>console.log(va))
//     .then(()=>{
//         setTimeout(()=>{console.log("The password is ********* ")},2000)
//     })
// }).



// async function fet(url){
//     let b =  await fetch(url, {method : "POST",
//         headers:{"content-type":"application/JSON"},
//         body: JSON.stringify({
//             title: "Shishir",
//             what: "lol",
//             name: "dont know"
//         })
//     })
//     return b.text();
// }
// main_ = async (url)=> {
//     let p = await fet(url)
//     console.log(p)
// }
// main_("https://jsonplaceholder.typicode.com/posts")


// let key = prompt("enter a key: ");
// let value = prompt("Enter the value for the key: ");
// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
// console.log(decodeURIComponent(document.cookie))

// localStorage.setItem("Name", JSON.stringify({"first": "Shishir", "Second": "Dahal"}))
// let obj = JSON.parse(localStorage.getItem("Name"))
// console.log(obj)
// console.log(obj["first"])


// function place(){
//     let county = document.getElementById("display");
//     county.addEventListener("keydown", (key)=>{
//         let city = county.value;
//         if(key.code == "Enter"){
//             console.log(localStorage.getItem(`${city}`))
//             fetchData(city)
//         }
//     })
// }
// async function fetchData(place){
//         let b = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ddf141f591dbee5512c13c652b3ec35b&units=metric`)
//         .then(res => res.json())
//         .then(data => 
//             {JSON.stringify(data);
//             let temp = data["main"]["temp"];
//             let condi = data["weather"][0]["description"];
//             let obj = {"temp":`${temp}`,"condition":`${condi}`};
//             localStorage.setItem(`${place}`, JSON.stringify(obj));
//         })
// }
// place()


// class formSub{
//     constructor(givenName){
//         this.name = givenName;
//     }
//     submit(){
//         console.log(`${this.name} Submitted`)
//     }
//     cancel(){
//         console.log(`${this.name} Cancelled`)
//     }
// }
// let shishir = new formSub("Shishir");
// let rojen = new formSub("Rojen");
// shishir.submit()
// rojen.submit()
// rojen.cancel()


// class staff{
//     constructor(amount, Name){
//         this.salary = amount;
//         this.name = Name;
//     }
//     login(){
//         console.log(`${this.name} has logged in`)
//     }
//     leave(){
//         console.log(`${this.name} has left`)
//     }
//     payment(){
//         console.log(`${this.name} received ${this.salary}`)
//     }
// }
// class partTime extends staff{
//     constructor(amount, Name, time){
//         super(amount, Name);
//         this.time = time
//     }
//     leave(){
//         super.leave();
//         console.log(`${this.name} works until ${this.time}`)
//     }
// }
// let harry = new partTime(100000, "Harry", 5);
// harry.leave();




                            // Random password generator

class passwordGenerator{

    mediumPassword(){
        let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let word = "";
        for(let i=0; i<6; i++){
            let ind_a = Math.floor(Math.random() * a.length);
            let randomWord = a[ind_a];
            word += randomWord;
        }
        for(let i=0; i<=2; i++){
            let randomNumber = Math.floor(Math.random()*10);
            let ind_randomNumber = Math.floor(Math.random()*word.length);
            word = word.substring(0, ind_randomNumber) + randomNumber + word.substring(ind_randomNumber);
        }
        return word;
    }

    weakPassword(){
        async function fetchWord(url){
            let word = await fetch(url)
                .then(res => res.json())
                .then(data => {return data[0]})
            return word;
        }
        let main_ = async () =>{
            let final_Word = await fetchWord("https://random-word-api.herokuapp.com/word")
            for(let i=0; i<=2; i++){
                let randomNumber = Math.floor(Math.random()*10);
                final_Word = final_Word + randomNumber;
            }
            return final_Word;
        }
        return main_()
    }


    strongPassword(){
        let charac = "!@#$%^&*()_+-[]{};:,/?|";
        let word = this.mediumPassword()
        for(let i=0; i<3; i++){
            let random_charac = Math.floor(Math.random()*charac.length)
            let ind_charac = Math.floor(Math.random()*word.length)
            word = word.substring(0, ind_charac) + charac[random_charac] + word.substring(ind_charac)
        }
        return word;
    }
}

let shishir = new passwordGenerator()


let input = document.getElementById("display");
let weak = document.getElementById("weak");
let medium = document.getElementById("medium");
let strong = document.getElementById("strong");

weak.addEventListener("click", async ()=>{
    let pass = await shishir.weakPassword();
    input.value = pass;
})
strong.addEventListener("click", ()=>{
    input.value = shishir.strongPassword();
})
medium.addEventListener("click", ()=>{
    input.value = shishir.mediumPassword();
})