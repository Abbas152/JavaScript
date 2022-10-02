


// *************************************
// Events 
// 4 Methods are Available to Use Events 

// // i) Method   <button class="learn-More-btn btn-style" onclick="console.log('Clicked')">

// //ii) Method   
// const btn = document.querySelector(".learn-More-btn");
// console.log(btn);
// btn.onclick = function (){
//     console.log("Clicked");
// }


// iii) Method  <button class="learn-More-btn btn-style" onclick="func()">     const func = ()=>{console.log("Clicked");}




// // iv) addEventListener is a Best Method
// // addEventListener Need two Arguments. 1st Type of Event Which WE Need, 2nd Function We Want to Perform Task
// // in the Case of Function Declaration the Value of This Keyword is Element Which we Select.  
// // But In the Case of Arrow Function the Value of This Keyword is window Object. 
// // The Value of This Keyword in Arrow Function 1 Level Up from Arrow Function.
// // EventListener is not Work With QuerySelectorAll. But We can use Loop for this

// const btn = document.querySelector(".Static-and-Live button");
// clickFunc = function () {
//     console.log("Clicked");
//     console.log("Value of This");
//     console.log(this);
// }
// btn.addEventListener("click", clickFunc);






// Loops In Events 
// const allBtn = document.querySelectorAll(".Static-and-Live button");
// console.log(allBtn);

// For of Loop
// for (const btn of allBtn) {
//     btn.addEventListener("click", function (button) {
//         console.log(this);
//     })
//     console.log(btn);
// }



// For Loop
// for (let index = 0; index < allBtn.length; index++) {
//     const element = allBtn[index];
//     element.addEventListener("click", function (button) {
//         console.log(this);
//     })
//     console.log(element);
// }




// For Each Loop
// allBtn.forEach(function (Btn) {
//     Btn.addEventListener("click", function () {
//         console.log(this);
//     })
// })






// *************************************
// Events Object



// jab kisi bhi element pe event listener add hoga 
// js Engine --- line by line execute karta hai 
// browser ---- js Engine + extra features 
// browser ----- js Engine + WebApi

// jab browser ko pata chala ki user ne event perform kia 
// jo hum listen kar rahe hai 
// browser ----- 2 kam kre ga
// 1.) Browser callback functions JS Engine ko dega ...... 
// 2.) Brwoser callback function ke sath jo event hua hai uski information bhi dega.
// ye info hamein ek object ke form mai milegi 
// EventListener is not Work With QuerySelectorAll. But We can use Loop for to add EventListener on All Elements.


// const allBtn = document.querySelectorAll(".Static-and-Live .btn");
// console.log(allBtn);

// // For of Loop
// for (const btn of allBtn) {
//     btn.addEventListener("click", function (event) {
//         console.log(event, this);                   // We Can Get Specify Properties Like Target or currentTarget
//     })
//     console.log(btn);
// }




// Keypress Event
// mouseover Event
// mouseleave
// // Keypress Event 
// const body = document.querySelector("body");
// body.addEventListener("keypress", (event)=>{
//     console.log(event.key);
// })


// // mouseover Event
// const btn = document.querySelector(".Static-and-Live button");
// btn.addEventListener("mouseover", (event)=>{
//     console.log(event);
// })


// mouseleave Event
// const btn = document.querySelector(".Static-and-Live button");
// btn.addEventListener("mouseleave", (event)=>{
//     console.log(event);
// })





// *************************************
// Event Bubbling 
// Event Capturing
// Event Delegation


// Event Bubbling 
// Here We Clicked Just on Child But Parent, GrandParent, Body is Parents of Child Thats Because It All Clicked, 
// It is Called Event Bubbling. 

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.querySelector("body");



// // Bubbling
// child.addEventListener("click", () => {
//     console.log("Bubbling Child");
// })

// parent.addEventListener("click", () => {
//     console.log("Bubbling Parent");
// })

// grandparent.addEventListener("click", () => {
//     console.log("Bubbling GrandParent");
// })

// body.addEventListener("click", () => {
//     console.log("Bubbling Body");
// })





// // Event Capturing
// // Capturing
// child.addEventListener("click", () => {
//     console.log("Capturing Child");
// }, true)

// parent.addEventListener("click", () => {
//     console.log("Capturing Parent");
// }, true)

// grandparent.addEventListener("click", () => {
//     console.log("Capturing GrandParent");
// }, true)

// body.addEventListener("click", () => {
//     console.log("Capturing Body");
// }, true)


// ****************************************************************************
// Cycle of Capturing to Bubbling

//      * Left     TO      Right *
//      *                        *
//      *                        *
//      *                        *
//      *                        *
//      *                        *
//       *                      *
//        *                    *
//          *                *
//             *          * 
//                *    *
// ****************************************************************************









// // Event Delegation
// // Event Delegation is basically a pattern to handle events efficiently.
// // Instead of adding an event listener to each and every similar element, 
// // we can add an event listener to a parent element and call an event on a 
// // particular target using the . target property of the event object.

// grandparent.addEventListener("click", () => {
//     console.log("Capturing GrandParent");
// },)




// Please Comment Event Delegation and Uncomment Main QuerySelector Code 
// Event Delegation With Event Object   

// grandparent.addEventListener("click", (e) => {
//     console.log(e.target);     // Because We Click on Child We Can See Target = child div 
// },)

